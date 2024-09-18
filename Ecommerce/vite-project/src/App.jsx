import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Order from './pages/Order'
import Nopagefound from './pages/Nopagefound'
import Cart from './pages/Cart'
import Allproducts from './pages/Allproducts'
import Dashboard from './pages/Dashboard'

function App() {

  return (
<BrowserRouter>
<Routes path='/' element ={<Home/>}>
<Routes path='/Order' element ={<Order/>}>
<Routes path='/Cart' element ={<Cart/>}>
<Routes path='/Dashboard' element ={<Dashboard/>}>
<Routes path='/*' element ={<Nopagefound/>}>
</Routes>
</Routes>
</Routes>
</Routes>
</Routes>
</BrowserRouter>
  )
}

export default App
