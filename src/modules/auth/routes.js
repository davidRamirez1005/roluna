// Rutas para el módulo de autenticación
export const authRoutes = [
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('./components/404.vue'),
    meta: { 
      name: 'Not Found', 
      title: "404 No Encontrado",
      module: 'auth'
    },
  }
]

export default authRoutes
