import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/pages/Home'
import CreatAccount from './components/pages/CreatAccount'
import Login from './components/pages/Login'
import AddExpense from './components/pages/AddExpense'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home/>}/>
      <Route path='/CreatAccount' element={<CreatAccount/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/AddExpense' element={<AddExpense />} />

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
