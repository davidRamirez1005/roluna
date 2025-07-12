import { createRouter, createWebHistory } from 'vue-router';
import routes from './router';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

router.beforeEach(async (to, from) => {
	//return await auth(to, from);

	// if (to.name !== 'login'){
	// 	return await auth(to, from);
	// }

	// return {name: 'home'};
});

export default router;
