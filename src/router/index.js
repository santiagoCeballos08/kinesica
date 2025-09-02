import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'Home',
			component: () => import('../layout/HomeView.vue'),
			children: [
				{
					path: '/',
					name: 'home',
					component: () => import('../layout/HomeView.vue'),
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
			};
		} else {
			return { top: 0 };
		}
	},
});

export default router;
