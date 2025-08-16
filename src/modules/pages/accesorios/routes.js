// Rutas para el módulo de accesorios
import AccesoriosSection from './views/AccesoriosSection.vue'
import MenPage from './pages/MenPage.vue'
import WomenPage from './pages/WomenPage.vue'

export const accesoriosRoutes = [
  {
    path: '/accesorios',
    name: 'Accesorios',
    meta: { 
      layout: 'default', 
      title: 'Accesorios', 
      description: 'Explora nuestra variedad de accesorios.',
      module: 'accesorios'
    },
    component: AccesoriosSection,
  },
  {
    path: '/hombre',
    name: 'MenPage',
    meta: { 
      layout: 'default', 
      title: 'Accesorios para Hombre', 
      description: 'Descubre nuestra colección de accesorios masculinos.',
      module: 'accesorios'
    },
    component: MenPage,
  },
  {
    path: '/mujer',
    name: 'WomenPage',
    meta: { 
      layout: 'default', 
      title: 'Accesorios para Mujer', 
      description: 'Explora nuestra elegante colección femenina.',
      module: 'accesorios'
    },
    component: WomenPage,
  }
]

export default accesoriosRoutes
