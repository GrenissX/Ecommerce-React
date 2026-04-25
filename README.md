# ◈ NOVA Store — E-Commerce React + Vite

Aplicación web de e-commerce desarrollada con **React 18** y **Vite**, como proyecto académico para la asignatura de Desarrollo Web.

##  Demo

[Ver en Vercel →] https://ecommerce-react-wine-nu.vercel.app/about

##  Tecnologías

| Tecnología | Uso |
|---|---|
| React 18 | UI y componentes |
| Vite 5 | Bundler y dev server |
| React Router v6 | Navegación entre páginas |
| CSS Modules | Estilos por componente |
| Context API | Estado global del carrito |

##  Estructura del proyecto

```
src/
├── components/
│   ├── Navbar.jsx        # Barra de navegación responsiva
│   ├── Navbar.module.css
│   ├── ProductCard.jsx   # Tarjeta reutilizable de producto
│   ├── ProductCard.module.css
│   ├── CartDrawer.jsx    # Panel lateral del carrito
│   ├── CartDrawer.module.css
│   ├── Footer.jsx        # Pie de página
│   └── Footer.module.css
├── context/
│   └── CartContext.jsx   # Estado global del carrito (useContext + useState)
├── data/
│   └── products.js       # Datos de productos y funciones helper
├── pages/
│   ├── Home.jsx          # Página de inicio
│   ├── Products.jsx      # Catálogo con filtros y búsqueda
│   └── About.jsx         # Página informativa
├── App.jsx               # Enrutador principal
├── main.jsx              # Entry point
└── index.css             # Estilos globales y design tokens
```

##  Funcionalidades

- **8 productos** con imagen, nombre, precio, categoría y descripción
- **Carrito de compras** con drawer lateral, cantidad por producto y total
- **Búsqueda en tiempo real** por nombre y descripción
- **Filtros por categoría** y ordenación por precio/valoración
- **Navegación** entre Inicio, Catálogo y Nosotros
- **Responsive** — funciona en móvil, tablet y escritorio
- Estado global con **Context API + useState**

##  Instalación local

```bash
# Clonar repositorio
git clone https://github.com/tu-usuario/ecommerce-react-vite.git
cd ecommerce-react-vite

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

##  Deploy en Vercel

1. Sube el repositorio a GitHub
2. Entra a [vercel.com](https://vercel.com) → **New Project**
3. Importa el repositorio
4. Vercel detecta Vite automáticamente — haz clic en **Deploy**

##  Autor

Desarrollado como proyecto académico — Juan Camilo de la pava cabrera
