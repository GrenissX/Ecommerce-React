import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.logo}>◈ NOVA<span>store</span></span>
          <p>Tecnología del futuro, disponible hoy.</p>
        </div>

        <nav className={styles.nav}>
          <h4>Tienda</h4>
          <Link to="/products">Productos</Link>
          <Link to="/products">Ofertas</Link>
          <Link to="/about">Nosotros</Link>
        </nav>

        <nav className={styles.nav}>
          <h4>Soporte</h4>
          <a href="#">Preguntas frecuentes</a>
          <a href="#">Envíos</a>
          <a href="#">Devoluciones</a>
        </nav>

        <div className={styles.social}>
          <h4>Síguenos</h4>
          <div className={styles.icons}>
            {['𝕏','◻','▶','◑'].map((icon, i) => (
              <a key={i} href="#" className={styles.icon}>{icon}</a>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© 2025 NOVA Store. Todos los derechos reservados.</span>
        <span>Hecho con ♥ en Colombia</span>
      </div>
    </footer>
  )
}
