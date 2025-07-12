<template>
  <header class="shadow-md sticky top-0 backdrop-blur-md bg-white/30 border-b border-white/10" style="z-index: 1000;">
    <div class="container mx-auto px-4 py-3">
      <div class="flex justify-between items-center">
        <div class="flex items-center space-x-2">
          <i class="fas fa-ring text-2xl text-purple-600"></i>
          <h1 class="text-2xl font-bold text-gray-800">Urban<span class="text-purple-600">Accesorios</span></h1>
        </div>
        <nav class="hidden md:flex space-x-6">
          <router-link to="/" class="text-gray-700 hover:text-purple-600 transition" active-class="text-purple-600 font-bold" exact>Inicio</router-link>
          <router-link to="/accesorios" class="text-gray-700 hover:text-purple-600 transition" active-class="text-purple-600 font-bold">Accesorios</router-link>
          <router-link to="/productos" class="text-gray-700 hover:text-purple-600 transition" active-class="text-purple-600 font-bold">Productos</router-link>
          <router-link to="/contacto" class="text-gray-700 hover:text-purple-600 transition" active-class="text-purple-600 font-bold">Contacto</router-link>
        </nav>
        <div class="flex items-center space-x-4">
          <button @click="$emit('open-cart')" class="relative">
            <i class="fas fa-shopping-cart text-xl text-gray-700 hover:text-purple-600 transition"></i>
            <span class="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">{{ cartCount }}</span>
          </button>
          <button class="md:hidden" @click="toggleMenu">
            <i class="fas fa-bars text-xl text-gray-700"></i>
          </button>
        </div>
      </div>
      <div v-show="mobileMenu" class="md:hidden mt-4 pb-2">
        <router-link to="/" class="block py-2 text-gray-700 hover:text-purple-600 transition" exact>Inicio</router-link>
        <router-link to="/accesorios" class="block py-2 text-gray-700 hover:text-purple-600 transition">Accesorios</router-link>
        <router-link to="/productos" class="block py-2 text-gray-700 hover:text-purple-600 transition">Productos</router-link>
        <router-link to="/contacto" class="block py-2 text-gray-700 hover:text-purple-600 transition">Contacto</router-link>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useCart } from './useCart.js'
const mobileMenu = ref(false)
const { cart } = useCart()
const cartCount = computed(() => cart.value.reduce((t, i) => t + (i.quantity || 0), 0))
function toggleMenu() {
  mobileMenu.value = !mobileMenu.value
}
</script>
