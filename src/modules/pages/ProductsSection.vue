<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-indigo-50">
    <Header @open-cart="showCart = true" />
    
    <!-- Hero Section con breadcrumb mejorado -->
    <div class="relative">
      <ProductsHeroSection />
    </div>

    <!-- Sección principal de productos con diseño mejorado -->
    <main class="container mx-auto px-4 pb-12">
      <!-- Estadísticas rápidas -->
      <!-- <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div class="bg-white/70 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/30 hover:shadow-lg transition-all duration-300">
          <div class="text-2xl font-bold text-purple-600">{{ totalProducts }}</div>
          <div class="text-sm text-gray-600">Productos</div>
        </div>
        <div class="bg-white/70 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/30 hover:shadow-lg transition-all duration-300">
          <div class="text-2xl font-bold text-indigo-600">{{ categories.length }}</div>
          <div class="text-sm text-gray-600">Categorías</div>
        </div>
        <div class="bg-white/70 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/30 hover:shadow-lg transition-all duration-300">
          <div class="text-2xl font-bold text-pink-600">{{ getProductCount(activeCategory) }}</div>
          <div class="text-sm text-gray-600">En {{ getCategoryLabel(activeCategory) }}</div>
        </div>
        <div class="bg-white/70 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/30 hover:shadow-lg transition-all duration-300">
          <div class="text-2xl font-bold text-emerald-600">
            <i class="fas fa-star"></i>
          </div>
          <div class="text-sm text-gray-600">Premium</div>
        </div>
      </div> -->

      <!-- Navegación de categorías mejorada -->
      <div class="bg-white/80 backdrop-blur-sm rounded-3xl p-6 mb-8 shadow-xl border border-white/30">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center">
              <i class="fas fa-boxes text-white"></i>
            </div>
            <div>
              <h2 class="text-xl font-bold text-gray-800">Explora por Categoría</h2>
              <p class="text-sm text-gray-600">Encuentra exactamente lo que necesitas</p>
            </div>
          </div>
          
          <!-- Contador de productos filtrados -->
          <div class="bg-purple-50 rounded-full px-4 py-2 border border-purple-200">
            <span class="text-sm font-medium text-purple-700">
              {{ getProductCount(activeCategory) }} productos disponibles
            </span>
          </div>
        </div>
        
        <ProductCategoriesNav 
          :categories="categories" 
          :active="activeCategory" 
          @select="handleCategoryChange" 
        />
      </div>

      <!-- Contenido de categoría con transición suave -->
      <div class="transition-all duration-500 ease-in-out">
        <ProductCategorySection 
          :category="activeCategory" 
          :key="activeCategory"
        />
      </div>

      <!-- Call to action adicional -->
      <div class="mt-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-3xl p-8 text-white text-center shadow-2xl">
        <h3 class="text-2xl font-bold mb-4">¿No encuentras lo que buscas?</h3>
        <p class="text-purple-100 mb-6 max-w-2xl mx-auto">
          Nuestro equipo está aquí para ayudarte. Contáctanos y te ayudaremos a encontrar el producto perfecto para ti.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            <i class="fas fa-comments mr-2"></i>
            Hablar con un Asesor
          </button>
          <button class="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
            <i class="fas fa-phone mr-2"></i>
            Llamar Ahora
          </button>
        </div>
      </div>
    </main>

    <ContactSection />
    <Footer />
    <CartSidebar v-if="showCart" @close="showCart = false" />
    <Chatbot />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Header from '../../shared/components/Header.vue'
import ProductsHeroSection from './components/ProductsHeroSection.vue'
import ProductCategoriesNav from './components/ProductCategoriesNav.vue'
import ProductCategorySection from './components/ProductCategorySection.vue'
import ContactSection from '../../shared/components/ContactSection.vue'
import Footer from '../../shared/components/Footer.vue'
import CartSidebar from '../../shared/components/CartSidebar.vue'
import Chatbot from '../../shared/components/Chatbot.vue'
import { provideCart } from '../../shared/components/useCart.js'

provideCart()

const showCart = ref(false)
const categories = [
  { key: 'hogar', label: 'Cosas del Hogar', icon: 'fas fa-home', count: 65},
  { key: 'cuidado', label: 'Cuidado Personal', icon: 'fas fa-heart', count: 6 },
  { key: 'nutricion', label: 'Nutrición', icon: 'fas fa-leaf', count: 6 }
]
const activeCategory = ref(categories[0].key)

// Datos simulados de productos para estadísticas
const productData = {
  hogar: 6,
  cuidado: 6,
  nutricion: 6
}

const totalProducts = computed(() => {
  return Object.values(productData).reduce((total, count) => total + count, 0)
})

const getProductCount = (categoryKey) => {
  return productData[categoryKey] || 0
}

const getCategoryLabel = (categoryKey) => {
  const category = categories.find(cat => cat.key === categoryKey)
  return category ? category.label : ''
}

const handleCategoryChange = (newCategory) => {
  activeCategory.value = newCategory
  // Scroll suave a la sección de productos
  const element = document.querySelector('.transition-all')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<style scoped>
/* Animaciones personalizadas */
.fade-enter-active, .fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/* Glassmorphism effect */
.backdrop-blur-sm {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

/* Hover effects para las tarjetas */
.hover\:shadow-lg:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Animación de entrada para las estadísticas */
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.container > div:first-of-type > div {
  animation: slideUp 0.6s ease-out;
}

.container > div:first-of-type > div:nth-child(2) {
  animation-delay: 0.1s;
}

.container > div:first-of-type > div:nth-child(3) {
  animation-delay: 0.2s;
}

.container > div:first-of-type > div:nth-child(4) {
  animation-delay: 0.3s;
}

/* Smooth transitions para el cambio de categoría */
.transition-all {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Efectos de scroll */
@media (prefers-reduced-motion: no-preference) {
  html {
    scroll-behavior: smooth;
  }
}
</style>
