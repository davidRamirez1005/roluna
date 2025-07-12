import Home from '../../modules/home/Home.vue'
import AccesoriosSection from '../../modules/pages/AccesoriosSection.vue'
import ProductsSection from '../../modules/pages/ProductsSection.vue'
import MenPage from '../../modules/pages/MenPage.vue'
import WomenPage from '../../modules/pages/WomenPage.vue'

const routes = [
	{
	  path: '/',
	  name: 'Home',
	  meta: { layout: 'default', title: 'Urban Accesorios', description: 'Bienvenido a Urban Accesorios. Descubre nuestra colección.' },
	  component: Home,
	},
	{
	  path: '/accesorios',
	  name: 'Accesorios',
	  meta: { layout: 'default', title: 'Accesorios', description: 'Explora nuestra variedad de accesorios.' },
	  component: AccesoriosSection,
	},
	{
	  path: '/productos',
	  name: 'Productos',
	  meta: { layout: 'default', title: 'Productos', description: 'Descubre nuestros productos destacados.' },
	  component: ProductsSection,
	},
	{
	  path: '/hombre',
	  name: 'MenPage',
	  meta: { layout: 'default', title: 'Accesorios para Hombre', description: 'Descubre nuestra colección de accesorios masculinos.' },
	  component: MenPage,
	},
	{
	  path: '/mujer',
	  name: 'WomenPage',
	  meta: { layout: 'default', title: 'Accesorios para Mujer', description: 'Explora nuestra elegante colección femenina.' },
	  component: WomenPage,
	}
	// Puedes agregar más rutas aquí si lo necesitas
  ];

export default routes
