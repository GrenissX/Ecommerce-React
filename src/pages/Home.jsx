import { Link } from 'react-router-dom'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
import styles from './Home.module.css'

export default function Home() {
  const featured = products.slice(0, 4)

  return (
    <main>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroContent}>
          <span className={styles.pill}>✦ Nueva colección 2025</span>
          <h1 className={styles.heroTitle}>
            Tecnología que
            <br />
            <span className={styles.gradient}>redefine</span> el límite
          </h1>
          <p className={styles.heroSub}>
            Descubre los mejores gadgets, periféricos y dispositivos premium.
            Calidad de futuro, entrega hoy.
          </p>
          <div className={styles.heroActions}>
            <Link to="/products" className={styles.btnPrimary}>Explorar productos →</Link>
            <Link to="/about" className={styles.btnGhost}>Conoce NOVA</Link>
          </div>
        </div>

        <div className={styles.heroStats}>
          {[
            { num: '50+', label: 'Productos' },
            { num: '12k+', label: 'Clientes' },
            { num: '4.8★', label: 'Valoración' },
          ].map(({ num, label }) => (
            <div key={label} className={styles.stat}>
              <span className={styles.statNum}>{num}</span>
              <span className={styles.statLabel}>{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className={styles.featured}>
        <div className={styles.sectionHead}>
          <h2 className={styles.sectionTitle}>Más populares</h2>
          <Link to="/products" className={styles.seeAll}>Ver todos →</Link>
        </div>
        <div className={styles.grid}>
          {featured.map((p, i) => (
            <div key={p.id} style={{ animationDelay: `${i * 0.08}s` }}>
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </section>

      {/* Banner CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2>¿Listo para el siguiente nivel?</h2>
          <p>Explora toda nuestra colección y encuentra el gadget perfecto para ti.</p>
          <Link to="/products" className={styles.btnPrimary}>Ver catálogo completo</Link>
        </div>
      </section>
    </main>
  )
}
