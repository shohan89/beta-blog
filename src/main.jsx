import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import './index.css'
import MainLayout from './layouts/MainLayout.jsx'
import Blogs from './pages/Blogs.jsx'
import Bookmarks from './pages/Bookmarks.jsx'
import Home from './pages/Home.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/blogs',
        element: <Blogs />,
        loader: () => fetch('https://dev.to/api/articles?per_page=20&top=7')
      },
      {
        path: '/bookmarks',
        element: <Bookmarks />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
