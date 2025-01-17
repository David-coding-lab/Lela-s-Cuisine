import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App.jsx'

// import Home from './pages/Home.jsx'
import Menu from './pages/Menu.jsx'
import Order from './pages/Order.jsx'
import About from './pages/About.jsx'
import Booking from './pages/Booking.jsx'
import Cart from './pages/Cart.jsx'
import UserPage from './pages/UserPage.jsx'

const Route = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/order',
        element: <Order />
      },
      {
        path: '/menu',
        element: <Menu />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/booking',
        element: <Booking />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/userpage',
        element: <UserPage />
      }
    ],
  }
])

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <ChakraProvider>
        <RouterProvider router={Route}/>
      </ChakraProvider>
    </StrictMode>
)


























// import { StrictMode } from 'react'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// // import './index.css'

// import Home from './pages/Home.jsx'
// import About from './pages/About.jsx'


// const Router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         path: '/home',
//         element: <Home />,
//       },
//       {
//         path: '/about',
//         element: <About />,
//       }, 
//       // Add more routes here as needed
//     ],
//   },
//   // Add more routes here as needed
//   // {
//   //   path: '/about',
//   //   element: <About />,
//   // },
//   // {
//   //   path: '/contact',
//   //   element: <Contact />,
//   // },
//   // {
//   //   path: '*',
//   //   element: <NotFound />,
//   // },
// ]);

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <RouterProvider router={Router} /> 
//   </StrictMode>,
// )
