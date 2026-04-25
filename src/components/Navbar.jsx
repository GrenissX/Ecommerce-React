import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import styles from './Navbar.module.css'

export default function Navbar() {
  const { totalItems, setIsCartOpen } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const links = [
    { to: '/',        label: 'Inicio' },
    { to: '/products', label: 'Productos' },
    { to: '/about',   label: 'Nosotros' },
  ]

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoIcon}>◈</span>
          <span>NOVA</span>
          <span className={styles.logoSub}>store</span>
        </Link>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`${styles.link} ${location.pathname === to ? styles.active : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <button
            className={styles.cartBtn}
            onClick={() => setIsCartOpen(true)}
            aria-label="Abrir carrito"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            {totalItems > 0 && (
              <span className={styles.badge}>{totalItems}</span>
            )}
          </button>

          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Menú"
          >
            <span className={menuOpen ? styles.barX1 : styles.bar} />
            <span className={menuOpen ? styles.barHide : styles.bar} />
            <span className={menuOpen ? styles.barX2 : styles.bar} />
          </button>
        </div>
      </nav>
    </header>
  )
}
