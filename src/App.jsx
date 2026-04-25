import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <CartDrawer />
          <Routes>
            <Route path="/"         element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about"    element={<About />} />
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  )
}
