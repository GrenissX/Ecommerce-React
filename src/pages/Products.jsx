import { useState, useMemo } from 'react'
import { products, categories, filterProducts } from '../data/products'
import ProductCard from '../components/ProductCard'
import styles from './Products.module.css'

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('default')

  const filtered = useMemo(() => {
    let result = filterProducts(products, activeCategory, search)
    if (sort === 'price-asc')  result = [...result].sort((a, b) => a.price - b.price)
    if (sort === 'price-desc') result = [...result].sort((a, b) => b.price - a.price)
    if (sort === 'rating')     result = [...result].sort((a, b) => b.rating - a.rating)
    return result
  }, [activeCategory, search, sort])

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <header className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Catálogo</h1>
          <p className={styles.pageSub}>{filtered.length} productos encontrados</p>
        </header>

        {/* Search */}
        <div className={styles.searchWrap}>
          <svg className={styles.searchIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input
            type="text"
            placeholder="Buscar productos..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className={styles.searchInput}
          />
          {search && (
            <button className={styles.clearSearch} onClick={() => setSearch('')}>✕</button>
          )}
        </div>

        {/* Filters */}
        <div className={styles.toolbar}>
          <div className={styles.categories}>
            {categories.map(cat => (
              <button
                key={cat}
                className={`${styles.catBtn} ${activeCategory === cat ? styles.catActive : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <select
            value={sort}
            onChange={e => setSort(e.target.value)}
            className={styles.sortSelect}
          >
            <option value="default">Relevancia</option>
            <option value="price-asc">Precio: menor a mayor</option>
            <option value="price-desc">Precio: mayor a menor</option>
            <option value="rating">Mejor valorados</option>
          </select>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className={styles.empty}>
            <p>No se encontraron productos para tu búsqueda.</p>
            <button onClick={() => { setSearch(''); setActiveCategory('Todos') }}>
              Limpiar filtros
            </button>
          </div>
        ) : (
          <div className={styles.grid}>
            {filtered.map((p, i) => (
              <div key={p.id} style={{ animationDelay: `${i * 0.06}s` }}>
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
