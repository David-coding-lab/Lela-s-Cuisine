import './App.css'
import { Outlet} from 'react-router-dom'
import { Box, Text } from '@chakra-ui/react'
import Header from './Components/Header'
import { useState } from 'react'
import { AppContext } from './AppContex'

function App() {
  const [foods,setFoods] = useState()
  const [foodType,setFoodType] = useState('')
  const [storedFood,setStoredFood] = useState(JSON.parse(sessionStorage.getItem('foods')))


  return (
    <AppContext.Provider value={{foods,setFoods, foodType, setFoodType, storedFood,setStoredFood}}>
      <Box>
        <Header />
        <Outlet />
      </Box>
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
