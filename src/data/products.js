export const products = [
  {
    id: 1,
    name: 'AuraPods Pro X',
    price: 299000,
    category: 'Audio',
    rating: 4.8,
    reviews: 1240,
    badge: 'Más vendido',
    description: 'Auriculares inalámbricos con cancelación activa de ruido, 40 h de batería y sonido Hi-Fi 360°.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
    color: '#6c63ff',
  },
  {
    id: 2,
    name: 'LunaWatch Ultra',
    price: 589000,
    category: 'Wearables',
    rating: 4.7,
    reviews: 876,
    badge: 'Nuevo',
    description: 'Smartwatch AMOLED de 49 mm con GPS, SpO2, ECG y autonomía de 18 días.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80',
    color: '#43e97b',
  },
  {
    id: 3,
    name: 'NovaCam 4K',
    price: 1290000,
    category: 'Fotografía',
    rating: 4.9,
    reviews: 532,
    badge: 'Premium',
    description: 'Cámara de acción 4K/120fps con estabilización magnética de 6 ejes y grabación HDR.',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80',
    color: '#ff6584',
  },
  {
    id: 4,
    name: 'ZenBook Slim 14',
    price: 3490000,
    category: 'Laptops',
    rating: 4.6,
    reviews: 430,
    badge: null,
    description: 'Portátil ultraligero (1.1 kg), pantalla OLED 2.8K, chip M-Series y 20 h de batería.',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80',
    color: '#f7971e',
  },
  {
    id: 5,
    name: 'MechKey Phantom',
    price: 420000,
    category: 'Periféricos',
    rating: 4.5,
    reviews: 918,
    badge: null,
    description: 'Teclado mecánico TKL con switches Hall Effect, RGB por tecla y polling de 8000 Hz.',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80',
    color: '#a18cd1',
  },
  {
    id: 6,
    name: 'HoloDesk Monitor',
    price: 1850000,
    category: 'Monitores',
    rating: 4.8,
    reviews: 267,
    badge: 'Oferta',
    description: 'Monitor IPS 27" QHD 240Hz con USB-C 90W, HDR400 y panel antireflejo nano.',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80',
    color: '#00c6ff',
  },
  {
    id: 7,
    name: 'PocketDrive 2TB',
    price: 210000,
    category: 'Almacenamiento',
    rating: 4.7,
    reviews: 1560,
    badge: null,
    description: 'SSD portátil NVMe de 2 TB, velocidades de 2000 MB/s, resistente al agua IP55.',
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&q=80',
    color: '#f093fb',
  },
  {
    id: 8,
    name: 'VortexPad Pro',
    price: 185000,
    category: 'Gaming',
    rating: 4.6,
    reviews: 743,
    badge: null,
    description: 'Control inalámbrico con gatillos adaptativos, vibración háptica y 30 h de autonomía.',
    image: 'https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=500&q=80',
    color: '#43e97b',
  },
]

export const categories = ['Todos', ...new Set(products.map(p => p.category))]

export function formatPrice(price) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  }).format(price)
}

export function filterProducts(products, category, search) {
  return products.filter(p => {
    const matchCat = category === 'Todos' || p.category === category
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
                        p.description.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })
}
