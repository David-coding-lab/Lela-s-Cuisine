import { useEffect, useState } from 'react'
import './App.css'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { Box, Text } from '@chakra-ui/react'
import Header from './Components/Header'

function App() {

  return (
    <Box>
      <Header />
      <Outlet />
      <Text>Hello</Text>
    </Box>
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
