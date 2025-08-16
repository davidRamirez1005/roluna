# Estructura Modular de Roluna

## 📁 Organización de Módulos

La aplicación ha sido restructurada para facilitar la escalabilidad y el mantenimiento mediante un sistema modular.

### 🏗️ Estructura Actual

```
src/
├── modules/
│   ├── home/                    # Módulo principal/inicio
│   │   ├── Home.vue            # Vista principal
│   │   └── routes.js           # Rutas del módulo
│   │
│   ├── pages/
│   │   ├── accesorios/         # Módulo de accesorios
│   │   │   ├── views/          # Vistas principales
│   │   │   │   └── AccesoriosSection.vue
│   │   │   ├── pages/          # Páginas específicas
│   │   │   │   ├── MenPage.vue
│   │   │   │   └── WomenPage.vue
│   │   │   ├── components/     # Componentes del módulo
│   │   │   │   ├── home/       # Componentes de la página principal
│   │   │   │   ├── men/        # Componentes masculinos
│   │   │   │   └── woman/      # Componentes femeninos
│   │   │   └── routes.js       # Rutas del módulo
│   │   │
│   │   └── products/           # Módulo de productos
│   │       ├── views/          # Vistas principales
│   │       ├── components/     # Componentes del módulo
│   │       └── routes.js       # Rutas del módulo
│   │
│   └── auth/                   # Módulo de autenticación
│       ├── components/         # Componentes del módulo
│       └── routes.js           # Rutas del módulo
│
├── shared/                     # Recursos compartidos
│   ├── components/             # Componentes globales
│   ├── composables/            # Composables/hooks
│   ├── layouts/                # Layouts de página
│   └── router/                 # Configuración de routing
│
├── language/                   # Internacionalización
└── utils/                     # Utilidades
```

## 🚀 Sistema de Importaciones con Decoradores

### Alias de Importación

Se han configurado alias en `vite.config.js` para facilitar las importaciones:

```javascript
// Alias disponibles
'@' -> 'src/'
'@shared' -> 'src/shared'
'@modules' -> 'src/modules'
'@core' -> 'src/modules/core'
'@catalog' -> 'src/modules/catalog'
'@men' -> 'src/modules/men'
'@women' -> 'src/modules/women'
'@auth' -> 'src/modules/auth'
'@assets' -> 'src/assets'
```

### Ejemplos de Uso de Decoradores

```javascript
// ✅ Correcto - Usando decoradores @alias
import Header from '@shared/components/Header.vue'
import ProductCard from '@shared/components/ProductCard.vue'
import { useCart } from '@shared/components/useCart.js'

// ✅ Correcto - Importaciones relativas dentro del mismo módulo
import MenSection from '../components/home/MenSection.vue'
import MenProductList from '../components/men/MenProductList.vue'

// ❌ Evitar - Rutas relativas largas
import Header from '../../../shared/components/Header.vue'
import ProductCard from '../../../../shared/components/ProductCard.vue'
```

### Composable de Importaciones

El archivo `src/shared/composables/useModuleImports.js` proporciona decoradores para centralizar las importaciones:

```javascript
// Ejemplo de uso
import { SharedComponents, createModuleImports } from '@shared/composables/useModuleImports.js'

// Importaciones compartidas
import Header from '@shared/components/Header.vue'
import CartSidebar from '@shared/components/CartSidebar.vue'

// Importaciones modulares
const AccesoriosModule = createModuleImports('pages/accesorios')
const component = AccesoriosModule.component('MenSection')
```

## 🛣️ Sistema de Rutas Modulares

### Organización de Rutas

Cada módulo tiene su propio archivo `routes.js`:

```javascript
// modules/pages/accesorios/routes.js
export const accesoriosRoutes = [
  {
    path: '/accesorios',
    name: 'Accesorios',
    meta: { 
      layout: 'default', 
      module: 'accesorios' // Identificador del módulo
    },
    component: AccesoriosSection,
  }
]
```

### Combinación Automática

Las rutas se combinan automáticamente en `src/shared/router/routes.js`:

```javascript
// Importación de rutas modulares
import { homeRoutes } from '../../modules/home/routes.js'
import { accesoriosRoutes } from '../../modules/pages/accesorios/routes.js'
import { productsRoutes } from '../../modules/pages/products/routes.js'

// Combinación automática
const routes = [
  ...homeRoutes,
  ...accesoriosRoutes,
  ...productsRoutes
]
```

## ➕ Agregar Nuevos Módulos

### Paso 1: Crear Estructura
```bash
mkdir -p src/modules/nuevo-modulo/{views,components}
```

### Paso 2: Crear Archivo de Rutas
```javascript
// src/modules/nuevo-modulo/routes.js
export const nuevoModuloRoutes = [
  {
    path: '/nuevo-modulo',
    name: 'NuevoModulo',
    meta: { 
      layout: 'default',
      module: 'nuevo-modulo'
    },
    component: () => import('./views/NuevoModuloView.vue'),
  }
]
```

### Paso 3: Integrar en Router Principal
```javascript
// src/shared/router/routes.js
import { nuevoModuloRoutes } from '../../modules/nuevo-modulo/routes.js'

const routes = [
  // ... otras rutas
  ...nuevoModuloRoutes
]
```

## 🔧 Beneficios de la Estructura Modular

### ✅ Ventajas

- **Escalabilidad**: Fácil agregar nuevos módulos
- **Mantenibilidad**: Código organizado por funcionalidad
- **Reutilización**: Componentes compartidos centralizados
- **Carga Diferida**: Posibilidad de lazy loading por módulo
- **Equipo**: Diferentes desarrolladores pueden trabajar en módulos separados

### 🎯 Módulos Futuros Sugeridos

```
src/modules/
├── kids/                       # Productos infantiles
├── sports/                     # Productos deportivos
├── luxury/                     # Productos de lujo
├── seasonal/                   # Productos estacionales
├── admin/                      # Panel administrativo
└── user/                       # Gestión de usuarios
```

## 📝 Convenciones de Código

### Nomenclatura de Archivos
- **Vistas**: `PascalCase.vue` (ej: `ProductsSection.vue`)
- **Componentes**: `PascalCase.vue` (ej: `ProductCard.vue`)
- **Rutas**: `camelCase.js` (ej: `routes.js`)

### Organización por Módulo
```
module/
├── views/          # Páginas principales del módulo
├── components/     # Componentes específicos del módulo
├── composables/    # Lógica reutilizable del módulo
├── services/       # Servicios/API del módulo
├── types/          # Tipos TypeScript (si aplica)
└── routes.js       # Definición de rutas del módulo
```

### Meta Information en Rutas
```javascript
{
  path: '/ruta',
  meta: {
    layout: 'default',      // Layout a usar
    title: 'Título',        // Título de la página
    description: '...',     // Descripción SEO
    module: 'nombre',       // Identificador del módulo
    requiresAuth: false,    // Si requiere autenticación
    permissions: []         // Permisos necesarios
  }
}
```

## ✅ **Estado Actual de Importaciones**

### 🎯 **Completamente Migrado:**
- ✅ **Componentes shared**: Todos usando `@shared/components/`
- ✅ **useCart composable**: Todos usando `@shared/components/useCart.js`
- ✅ **ProductCard**: Centralizado en `@shared/components/ProductCard.vue`
- ✅ **Paginate**: Usando `@shared/components/Paginate.vue`
- ✅ **Header, Footer, CartSidebar, Chatbot**: Usando alias `@shared`

### 📝 **Reglas de Importación:**

1. **Componentes Compartidos**: Siempre usar `@shared/`
2. **Dentro del mismo módulo**: Usar rutas relativas (`../components/`)
3. **Entre módulos**: Usar alias específicos cuando sea necesario
4. **Assets**: Usar `@assets/` (configurado pero opcional)

---

**Nota**: Esta estructura facilita el desarrollo en equipo y la escalabilidad futura del proyecto.
