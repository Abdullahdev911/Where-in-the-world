import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import DarkModeProvider from  './context/darkModeContext'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import Layout from '../Pages/Layout.jsx'
import HomePage from '../Pages/Layout.jsx'
import CardGrid from '../src/components/CardGrid'
import DetailPage,{countryLoader} from './components/DetailPage.jsx'
import Error from './components/Error.jsx'
const router = createBrowserRouter([{
  path:'',
  element: <Layout />,
  children:[
    {
      path:'',
      element: <CardGrid />

    },
    {
      path:'/country/:countryCode',
      element:<DetailPage />,
      loader: countryLoader
    },{
      path:'*',
      element: <Error />
    }
    
  ]
}])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DarkModeProvider>
     < RouterProvider router={router}/>
    </DarkModeProvider>
  </StrictMode>,
)
