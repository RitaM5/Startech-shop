import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ProductProvider from './context/ProductProvider'
import SidebarProvider from './context/SidebarProvider'
import CartProvider from './context/CartProvider'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />

  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <SidebarProvider>
      <ProductProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </ProductProvider>
    </SidebarProvider>

  </>

)
