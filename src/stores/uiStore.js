import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUIStore = defineStore('ui', () => {
	const isServicesScrollActive = ref(false)
	return { isServicesScrollActive }
})
