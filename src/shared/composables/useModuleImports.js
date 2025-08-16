/**
 * Composable para manejar importaciones modulares de manera centralizada
 * Actúa como un decorador para facilitar las importaciones
 */

// Mapeo de rutas modulares
const MODULE_PATHS = {
  // Shared Components
  shared: {
    components: '/src/shared/components',
    layouts: '/src/shared/layouts',
    router: '/src/shared/router'
  },
  
  // Core Module (Home, Hero, etc.)
  core: {
    views: '/src/modules/core/views',
    components: '/src/modules/core/components'
  },
  
  // Catalog Module (Products, Accessories)
  catalog: {
    views: '/src/modules/catalog/views',
    components: '/src/modules/catalog/components'
  },
  
  // Men Module
  men: {
    views: '/src/modules/men/views',
    components: '/src/modules/men/components'
  },
  
  // Women Module
  women: {
    views: '/src/modules/women/views',
    components: '/src/modules/women/components'
  },
  
  // Auth Module
  auth: {
    views: '/src/modules/auth/views',
    components: '/src/modules/auth/components'
  }
}

/**
 * Decorador para obtener rutas de importación
 * @param {string} module - El módulo (shared, core, catalog, men, women, auth)
 * @param {string} type - El tipo (views, components, layouts, router)
 * @param {string} component - El nombre del componente
 * @returns {string} - La ruta completa para importar
 */
export function getImportPath(module, type, component) {
  const basePath = MODULE_PATHS[module]?.[type]
  if (!basePath) {
    console.warn(`Módulo o tipo no encontrado: ${module}.${type}`)
    return null
  }
  return `${basePath}/${component}.vue`
}

/**
 * Decorador para componentes compartidos más comunes
 */
export const SharedComponents = {
  Header: () => import('@/shared/components/Header.vue'),
  Footer: () => import('@/shared/components/Footer.vue'),
  CartSidebar: () => import('@/shared/components/CartSidebar.vue'),
  Chatbot: () => import('@/shared/components/Chatbot.vue'),
  ContactSection: () => import('@/shared/components/ContactSection.vue'),
  Paginate: () => import('@/shared/components/Paginate.vue'),
  CategoryButton: () => import('@/shared/components/CategoryButton.vue'),
  ThreeDViewer: () => import('@/shared/components/ThreeDViewer.vue'),
}

/**
 * Decorador para composables compartidos
 */
export const SharedComposables = {
  useCart: () => import('@/shared/components/useCart.js'),
  useScroll: () => import('@/shared/composables/useScroll.js'),
}

/**
 * Helper para generar importaciones dinámicas por módulo
 */
export function createModuleImports(moduleName) {
  return {
    view: (componentName) => import(`@/modules/${moduleName}/views/${componentName}.vue`),
    component: (componentName) => import(`@/modules/${moduleName}/components/${componentName}.vue`),
  }
}

/**
 * Decoradores específicos por módulo
 */
export const CoreModule = createModuleImports('core')
export const CatalogModule = createModuleImports('catalog')
export const MenModule = createModuleImports('men')
export const WomenModule = createModuleImports('women')
export const AuthModule = createModuleImports('auth')

/**
 * Decorador para rutas modulares
 */
export function createModuleRoutes(routes) {
  return routes.map(route => ({
    ...route,
    meta: {
      layout: 'default',
      ...route.meta
    }
  }))
}

export default {
  getImportPath,
  SharedComponents,
  SharedComposables,
  createModuleImports,
  CoreModule,
  CatalogModule,
  MenModule,
  WomenModule,
  AuthModule,
  createModuleRoutes
}
