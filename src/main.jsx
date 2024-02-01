import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./assets/vendors/themify-icons/css/themify-icons.css"
import "./assets/css/johndoe.css"
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Login from './components/admin/Login.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/admin',
    element: <Login />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
