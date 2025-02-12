import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Menu from './components/Menu/Menu.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Gallery from './components/Gallery/Gallery.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App  />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'menu',
        element: <Menu />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'gallery',
        element: <Gallery />,
      }
    ]
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
