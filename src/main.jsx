import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layuout from './components/Layuout'
import NewClient, {action as newClientAction}from './pages/NewClient'
import Index, {loader as clientsLoader} from './pages/Index'
import EditClient, {loader as editClientLoader, action as editClientAction} from './pages/EditClient'
import ErrorPage from './components/ErrorPage'
import { action as deleteClientAction} from './components/Client'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layuout />,
    children: [
      {
        index: true,
        element: <Index/>,
        loader: clientsLoader,
        errorElement: <ErrorPage />
      },
      {
        path: '/clients/new',
        element: <NewClient />,
        action: newClientAction,
        errorElement: <ErrorPage />
      },
      {
        path: '/clients/:idClient/edit',
        element: <EditClient />,
        loader: editClientLoader,
        action: editClientAction,
        errorElement: <ErrorPage />
      },
      {
        path: 'clients/:idClient/delete',
        action: deleteClientAction
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
