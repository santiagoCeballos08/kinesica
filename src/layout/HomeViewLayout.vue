<template>
	<header-component-core />
	<router-view class="min-h-[80vh]" />
	<footer-component-core />
</template>

<script setup>
import HeaderComponentCore from '@/components/core/HeaderComponentCore.vue';
import FooterComponentCore from '@/components/core/FooterComponentCore.vue';
</script>

<style lang="scss" scoped></style>
