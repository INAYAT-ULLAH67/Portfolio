import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Header />
      
      <Outlet />
      <Footer />
      <div className="empty my-10 md:hidden"></div>
    </>
  )
}

export default App