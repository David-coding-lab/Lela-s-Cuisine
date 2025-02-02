import './App.css'
import { Link, Outlet, useLocation} from 'react-router-dom'
import { Badge, Box, Flex, Icon, IconButton, Text, useMediaQuery } from '@chakra-ui/react'
import Header from './Components/Header'
import { useState } from 'react'
import { AppContext } from './AppContex'
import { BiBasket } from 'react-icons/bi'

function App() {
  const location = useLocation(); // Get current route
  const [foods,setFoods] = useState()
  const [foodType,setFoodType] = useState('')
  const [storedFood,setStoredFood] = useState(JSON.parse(sessionStorage.getItem('foods')))
  const [CartItemsNum, setCartItemsNum] = useState(0)
  const [cartItems, setCartItems] = useState([])
  const [isSmallScreen] = useMediaQuery("(max-width: 991px)");
  console.log(location);
  

  return (
    <AppContext.Provider value={{foods,setFoods, foodType, setFoodType, storedFood,setStoredFood,CartItemsNum,setCartItemsNum,cartItems, setCartItems}}>
      <Flex flexDir='column'>
        <Header />
        {isSmallScreen  && location.pathname !== '/cart' &&
          <Link to="/cart">
            <Box position="fixed" bottom="20px" right="20px" zIndex="200">
              {/* Cart count badge */}
              {CartItemsNum > 0 && (
                <Badge
                  position="absolute"
                  top="-5px"
                  right="-5px"
                  bg="red.500"
                  color="white"
                  borderRadius="full"
                  px="8px"
                  py="4px"
                  fontSize="sm"
                  fontWeight="bold"
                  zIndex='100'
                >
                  {CartItemsNum}
                </Badge>
              )}

              {/* Basket Icon Button */}
              <IconButton
                width="70px"
                height="70px"
                borderRadius="50%"
                bgColor="#554A4A"
                boxShadow="0px 0px 10px rgba(0, 0, 0, 0.52)"
                icon={<Icon fontSize="50px" color="white" as={BiBasket} />}
              />
            </Box>
          </Link>
        }
        <Outlet />
        </Flex>
      </AppContext.Provider>
  )
}

export default App













// import { useEffect, useState } from 'react'
// import './App.css'
// import { Link, Outlet, useNavigate } from 'react-router-dom'

// function App() {
//   const navigate = useNavigate();
//   useEffect(()=>{ 
//       navigate('/home', { replace: true });
    
//   },[]);

//   return (
//     <div style={{ display:"flex" }}>
//          <div style={{ flex:1,backgroundColor:'#cc33cc;', height:'100vh'}}>
//                 <Link to={'/home'}>Home</Link>
//                 <Link to={'/about'}>About</Link>
//          </div>
//          <div style={{ flex:5,  height:'100vh', }}>
//              <Outlet />
//          </div>
//     </div>
//   )
// }

// export default App
