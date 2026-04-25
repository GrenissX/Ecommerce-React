import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../data/products'
import styles from './ProductCard.module.css'

function StarRating({ rating }) {
  return (
    <div className={styles.stars} aria-label={`Rating ${rating} de 5`}>
      {[1,2,3,4,5].map(n => (
        <span key={n} className={n <= Math.round(rating) ? styles.starFilled : styles.starEmpty}>
          ★
        </span>
      ))}
      <span className={styles.ratingNum}>{rating}</span>
    </div>
  )
}

export default function ProductCard({ product }) {
  const { addToCart, cartItems } = useCart()
  const [added, setAdded] = useState(false)

  const inCart = cartItems.find(i => i.id === product.id)

  function handleAdd() {
    addToCart(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <article className={styles.card} style={{ '--accent-color': product.color }}>
      {product.badge && (
        <span className={styles.badge}>{product.badge}</span>
      )}

      <div className={styles.imageWrap}>
        <img
          src={product.image}
          alt={product.name}
          className={styles.image}
          loading="lazy"
        />
        <div className={styles.overlay} />
      </div>

      <div className={styles.body}>
        <span className={styles.category}>{product.category}</span>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.description}>{product.description}</p>

        <StarRating rating={product.rating} />
        <span className={styles.reviewCount}>({product.reviews} reseñas)</span>

        <div className={styles.footer}>
          <span className={styles.price}>{formatPrice(product.price)}</span>
          <button
            className={`${styles.addBtn} ${added ? styles.addedBtn : ''}`}
            onClick={handleAdd}
          >
            {added ? (
              <>✓ Agregado</>
            ) : (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                  <line x1="3" y1="6" x2="21" y2="6"/>
                  <path d="M16 10a4 4 0 01-8 0"/>
                </svg>
                {inCart ? `En carrito (${inCart.quantity})` : 'Agregar'}
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  )
}
