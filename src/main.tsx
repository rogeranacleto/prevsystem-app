import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './App'
import { AuthProvider } from './contexts/AuthContext'
import { UpdateProvider } from './contexts/UpdateContext'
import { Toaster } from 'react-hot-toast'
import { CardProvider } from './contexts/CardContext'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <UpdateProvider>
        <CardProvider>
          <Toaster
            position="bottom-right"
            reverseOrder={false}
            gutter={10}
            containerStyle={{
              padding: '10',
            }}
            toasterId="default"
            toastOptions={{
              className: '', 
              duration: 5000,
              removeDelay: 1000,
              style: {
                border: '1px solid #F3F4F633',
                background: '#000',      
                color: '#fff',          
                borderRadius: '10px',   
                padding: '16px 25px',   
                fontFamily: 'sans-serif',
              },
              success: {
                duration: 5000,
                iconTheme: {
                  primary: 'green',
                  secondary: 'white',
                },
              },
            }}
          />
          <RouterProvider router={router}/>
          </CardProvider>
      </UpdateProvider>
    </AuthProvider>
  </StrictMode>,
)