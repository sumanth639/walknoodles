import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Menu from './pages/Menu'
import Contact from './pages/Contact'
import Home from "./pages/Home"
import './index.css'
import "./App.css"
import Footer from './components/Footer'


function App() {
  return (
    <>
      <Header />
      <div >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
        <Footer/>
      </div>
    </>
  )
}

export default App
