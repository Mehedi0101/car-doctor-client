import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-screen-2xl mx-auto w-11/12'>
    <React.StrictMode>
      <RouterProvider router={routes}></RouterProvider>
    </React.StrictMode>
  </div>,
)
