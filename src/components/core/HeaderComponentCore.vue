<template>
	<header
		ref="headerRef"
		class="container__header__hero flex flex-col items-center p-4 lg:p-10 lg:px-20 lg:py-8 bg-white-app text-black-app sticky z-50 top-0 left-0 w-full lg:h-fit lg:flex-row lg:justify-between transition-all shadow-md"
	>
		<div class="content__icon__button flex w-full lg:w-fit justify-between items-center px-4">
			<figure class="header__icon w-[6rem] lg:h-[5rem] lg:w-[8rem]">
				<img src="/assets/img/logos/logo.webp" alt="logo kinesica" />
			</figure>
			<bars3-center-left-icon class="size-12 cursor-pointer lg:hidden" @click="toggleMenu" />
		</div>

		<nav
			ref="navRef"
			class="header__container__items text-center lg:block w-full lg:w-auto overflow-hidden"
		>
			<ul class="header__navegation__items lg:flex">
				<li class="header__itmes text-main-700">
					<router-link :to="{ path: '/', hash: '#inicio' }" @click="closeMenu"
						>inicio</router-link
					>
				</li>
				<li class="header__itmes text-main-700">
					<router-link :to="{ path: '/', hash: '#quienesSomos' }" @click="closeMenu"
						>Quienes somos</router-link
					>
				</li>
				<li class="header__itmes text-main-700">
					<router-link :to="{ path: '/', hash: '#services' }" @click="closeMenu"
						>Nuestros servicios</router-link
					>
				</li>
				<li class="header__itmes text-main-700">
					<router-link :to="{ path: '/', hash: '#profesionales' }" @click="closeMenu"
						>Profesionales</router-link
					>
				</li>
				<li class="header__itmes text-main-700">
					<router-link :to="{ path: '/', hash: '#precios' }" @click="closeMenu"
						>Planes</router-link
					>
				</li>
				<li class="header__itmes text-main-700">
					<router-link :to="{ path: '/contacto', hash: '' }" @click="closeMenu"
						>Contactanos</router-link
					>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script setup>
import { Bars3CenterLeftIcon } from '@heroicons/vue/20/solid';
import { ref, onMounted } from 'vue';
import gsap from 'gsap';

const headerRef = ref(null);
const navRef = ref(null);
const active = ref(false);

onMounted(() => {
	if (window.innerWidth < 1024) {
		gsap.set(navRef.value, { height: 0, autoAlpha: 0 });
	}
});

function getNavHeight() {
	// El nav ocupa el resto de la pantalla debajo del header
	const headerHeight = headerRef.value?.getBoundingClientRect().height ?? 0;
	return window.innerHeight - headerHeight;
}

function toggleMenu() {
	if (window.innerWidth >= 1024) return;
	active.value ? closeMenu() : openMenu();
}

function openMenu() {
	active.value = true;
	gsap.to(navRef.value, {
		height: getNavHeight(),
		autoAlpha: 1,
		duration: 0.4,
		ease: 'power2.out',
	});
}

function closeMenu() {
	if (!active.value) return;
	gsap.to(navRef.value, {
		height: 0,
		autoAlpha: 0,
		duration: 0.3,
		ease: 'power2.in',
		onComplete: () => {
			active.value = false;
		},
	});
}
</script>
