import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'HomePage',
			component: () => import('../layout/HomeViewLayout.vue'),
			children: [
				{
					path: '/',
					name: 'home',
					component: () => import('../views/Home/HomeView.vue'),
				},
				{
					path: '/contacto',
					name: 'conacto',
					component: () => import('../views/Contact/ContactView.vue'),
				},
			],
			// component: HomeView,
		},
	],
	scrollBehavior(to, from, savedPosition) {
		if (to.hash) {
			return {
				el: to.hash,
				behavior: 'smooth',
				top: -10
			};
		} else {
			return { top: 0 };
		}
	},
});

export default router;
