import './assets/css/base.css';
import './assets/css/fonts.css';
import './assets/css/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router/index.router';

// importamos directivas personalizadas
import fadeScroll from './assets/directives/fadeScroll';
import showAnimate from './assets/directives/showAnimate';
import fadeInDirectives from './assets/directives/fadeInDirectives';

const app = createApp(App);

// implementamos las directivas
app.directive('fade-scroll', fadeScroll);
app.directive('fade-in', fadeInDirectives);
app.directive('fade-animation-show', showAnimate);

app.use(createPinia());
app.use(router);

app.mount('#app');
