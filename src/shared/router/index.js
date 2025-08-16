import { createRouter, createWebHistory } from 'vue-router';
import routes from './router';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
	scrollBehavior(to, from, savedPosition) {
		// Si hay una posición guardada (ej: navegación con botón atrás/adelante)
		if (savedPosition) {
			return savedPosition
		}
		// Si navegamos a un hash/anchor específico
		if (to.hash) {
			return {
				el: to.hash,
				behavior: 'smooth'
			}
		}
		// Por defecto, ir al top de la página
		return { 
			top: 0, 
			left: 0, 
			behavior: 'smooth' 
		}
	}
});

router.beforeEach(async (to, from) => {
	//return await auth(to, from);

	// if (to.name !== 'login'){
	// 	return await auth(to, from);
	// }

	// return {name: 'home'};
});

export default router;
