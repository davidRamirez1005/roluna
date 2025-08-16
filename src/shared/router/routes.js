// Sistema de rutas modular
import { homeRoutes } from '../../modules/home/routes.js'
import { accesoriosRoutes } from '../../modules/pages/accesorios/routes.js'
import { productsRoutes } from '../../modules/pages/products/routes.js'

// Combinamos todas las rutas de los módulos
const routes = [
	...homeRoutes,
	...accesoriosRoutes,
	...productsRoutes
	// Aquí se pueden agregar más módulos fácilmente
	// ...futureModuleRoutes,
]

export default routes
