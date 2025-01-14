import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import Home from './pages/Home.jsx'
import Menu from './pages/Menu.jsx'
import Order from './pages/Order.jsx'
import About from './pages/Menu.jsx'

const Route = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/Menu',
        element: <Menu />
      },
      {
        path: '/Order',
        element: <Order />
      },
      {
        path: '/About',
        element: <About />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Route}/>
  </StrictMode>,
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
