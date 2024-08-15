import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
function App() {

  return (
    <div className=' overflow-hidden'>
      <Navbar/>
      <Home/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
