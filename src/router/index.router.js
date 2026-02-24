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
		// Offset dinámico basado en el alto real del header sticky
		const getHeaderOffset = () => {
			const header = document.querySelector('.container__header__hero');
			return header ? header.getBoundingClientRect().height : 0;
		};

		if (to.hash) {
			// Si venimos de otra ruta, el DOM aún no tiene el elemento montado.
			// Esperamos hasta que aparezca antes de hacer scroll.
			return new Promise((resolve) => {
				const tryScroll = (attempts = 0) => {
					const el = document.querySelector(to.hash);
					if (el) {
						resolve({
							el: to.hash,
							behavior: 'smooth',
							top: getHeaderOffset(),
						});
					} else if (attempts < 20) {
						setTimeout(() => tryScroll(attempts + 1), 50);
					}
				};
				tryScroll();
			});
		}
		return { top: 0 };
	},
});

export default router;
