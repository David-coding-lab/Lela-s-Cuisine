import './App.css'
import { Link, Outlet, useLocation} from 'react-router-dom'
import { Badge, Box, Flex, Icon, IconButton, Text, useMediaQuery } from '@chakra-ui/react'
import Header from './Components/Header'
import { useState } from 'react'
import { AppContext } from './AppContex'
import { BiBasket } from 'react-icons/bi'
import UserPage from './pages/UserPage'

function App() {
  const location = useLocation(); // Get current route
  const [foods,setFoods] = useState()
  const [foodType,setFoodType] = useState('')
  const [storedFood,setStoredFood] = useState(JSON.parse(sessionStorage.getItem('foods')))
  const [CartItemsNum, setCartItemsNum] = useState(0)
  const [cartItems, setCartItems] = useState([])
  const [isSmallScreen] = useMediaQuery("(max-width: 991px)");
  const [isOpen, setIsOpen] = useState(false);


  return (
    <AppContext.Provider value={{foods,setFoods, foodType, setFoodType, storedFood,setStoredFood,CartItemsNum,setCartItemsNum,cartItems, setCartItems,setIsOpen,isOpen}}>
      <Flex flexDir='column'>
        <Header />
        <UserPage isOpen={isOpen} setIsOpen={setIsOpen}/>
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

