// Rutas para el módulo de productos
import ProductsSection from './views/ProductsSection.vue'

export const productsRoutes = [
  {
    path: '/productos',
    name: 'Productos',
    meta: { 
      layout: 'default', 
      title: 'Productos', 
      description: 'Descubre nuestros productos destacados.',
      module: 'products'
    },
    component: ProductsSection,
  }
]

export default productsRoutes
