import { useCart } from '../context/CartContext'
import { formatPrice } from '../data/products'
import styles from './CartDrawer.module.css'

export default function CartDrawer() {
  const {
    cartItems, removeFromCart, updateQuantity,
    clearCart, totalItems, totalPrice,
    isCartOpen, setIsCartOpen
  } = useCart()

  if (!isCartOpen) return null

  return (
    <>
      <div className={styles.backdrop} onClick={() => setIsCartOpen(false)} />
      <aside className={styles.drawer}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            Carrito
            {totalItems > 0 && <span className={styles.count}>{totalItems}</span>}
          </h2>
          <button className={styles.closeBtn} onClick={() => setIsCartOpen(false)}>✕</button>
        </div>

        {cartItems.length === 0 ? (
          <div className={styles.empty}>
            <div className={styles.emptyIcon}>🛒</div>
            <p>Tu carrito está vacío</p>
            <button className={styles.shopBtn} onClick={() => setIsCartOpen(false)}>
              Ver productos
            </button>
          </div>
        ) : (
          <>
            <ul className={styles.list}>
              {cartItems.map(item => (
                <li key={item.id} className={styles.item}>
                  <img src={item.image} alt={item.name} className={styles.itemImg} />
                  <div className={styles.itemInfo}>
                    <span className={styles.itemName}>{item.name}</span>
                    <span className={styles.itemPrice}>{formatPrice(item.price)}</span>
                    <div className={styles.qtyRow}>
                      <button
                        className={styles.qtyBtn}
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >−</button>
                      <span className={styles.qty}>{item.quantity}</span>
                      <button
                        className={styles.qtyBtn}
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >+</button>
                    </div>
                  </div>
                  <div className={styles.itemRight}>
                    <span className={styles.itemTotal}>{formatPrice(item.price * item.quantity)}</span>
                    <button
                      className={styles.removeBtn}
                      onClick={() => removeFromCart(item.id)}
                      aria-label="Eliminar"
                    >✕</button>
                  </div>
                </li>
              ))}
            </ul>

            <div className={styles.footer}>
              <div className={styles.totalRow}>
                <span>Total</span>
                <span className={styles.totalPrice}>{formatPrice(totalPrice)}</span>
              </div>
              <button className={styles.checkoutBtn}>
                Finalizar compra →
              </button>
              <button className={styles.clearBtn} onClick={clearCart}>
                Vaciar carrito
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
