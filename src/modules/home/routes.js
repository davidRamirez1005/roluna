// Rutas para el módulo home/core
import Home from './Home.vue'

export const homeRoutes = [
  {
    path: '/',
    name: 'Home',
    meta: { 
      layout: 'default', 
      title: 'Urban Accesorios', 
      description: 'Bienvenido a Urban Accesorios. Descubre nuestra colección.',
      module: 'home'
    },
    component: Home,
  }
]

export default homeRoutes
