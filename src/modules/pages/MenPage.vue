<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
    <Header @open-cart="showCart = true" />
    
    <!-- Hero Section -->
    <div class="relative">
      <div class="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-16 px-4">
        <div class="container mx-auto text-center">
          <div class="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <i class="fas fa-male text-white"></i>
            <span class="text-white font-medium">Accesorios Masculinos</span>
          </div>
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-4">
            Accesorios para
            <span class="bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
              Hombre
            </span>
          </h1>
          <p class="text-xl text-blue-100 max-w-2xl mx-auto">
            Descubre nuestra colección exclusiva de accesorios masculinos. Estilo, calidad y elegancia en cada pieza.
          </p>
        </div>
      </div>
    </div>

    <!-- Sección principal de productos -->
    <main class="container mx-auto px-4 pb-12">
      <!-- Estadísticas rápidas -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 -mt-8 relative z-10">
        <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/30 hover:shadow-lg transition-all duration-300">
          <div class="text-2xl font-bold text-blue-600">{{ totalProducts }}</div>
          <div class="text-sm text-gray-600">Productos</div>
        </div>
        <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/30 hover:shadow-lg transition-all duration-300">
          <div class="text-2xl font-bold text-indigo-600">{{ categories.length }}</div>
          <div class="text-sm text-gray-600">Categorías</div>
        </div>
        <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/30 hover:shadow-lg transition-all duration-300">
          <div class="text-2xl font-bold text-purple-600">{{ getFilteredCount() }}</div>
          <div class="text-sm text-gray-600">Filtrados</div>
        </div>
        <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/30 hover:shadow-lg transition-all duration-300">
          <div class="text-2xl font-bold text-emerald-600">
            <i class="fas fa-star"></i>
          </div>
          <div class="text-sm text-gray-600">Premium</div>
        </div>
      </div>

      <!-- Navegación de categorías -->
      <div class="bg-white/80 backdrop-blur-sm rounded-3xl p-6 mb-8 shadow-xl border border-white/30">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
              <i class="fas fa-th-list text-white"></i>
            </div>
            <div>
              <h2 class="text-xl font-bold text-gray-800">Categorías Masculinas</h2>
              <p class="text-sm text-gray-600">Encuentra el accesorio perfecto para ti</p>
            </div>
          </div>
          
          <!-- Contador de productos filtrados -->
          <div class="bg-blue-50 rounded-full px-4 py-2 border border-blue-200">
            <span class="text-sm font-medium text-blue-700">
              {{ getFilteredCount() }} productos disponibles
            </span>
          </div>
        </div>
        
        <MenCategoriesNav 
          :categories="categories" 
          :active="activeCategory" 
          @select="handleCategoryChange" 
        />
      </div>

      <!-- Filtros de productos -->
      <MenProductFilters 
        :category="activeCategory"
        @filter-change="handleFilterChange"
      />

      <!-- Lista de productos -->
      <div class="transition-all duration-500 ease-in-out">
        <MenProductList 
          :category="activeCategory"
          :filters="activeFilters"
          :products="menProducts"
        />
      </div>

      <!-- Call to action -->
      <div class="mt-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl p-8 text-white text-center shadow-2xl">
        <h3 class="text-2xl font-bold mb-4">¿Necesitas ayuda para elegir?</h3>
        <p class="text-blue-100 mb-6 max-w-2xl mx-auto">
          Nuestros asesores especializados en accesorios masculinos están aquí para ayudarte a encontrar el complemento perfecto.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            <i class="fas fa-comments mr-2"></i>
            Asesor Especializado
          </button>
          <button class="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            <i class="fas fa-male mr-2"></i>
            Guía de Estilo
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
import MenCategoriesNav from './components/MenCategoriesNav.vue'
import MenProductFilters from './components/MenProductFilters.vue'
import MenProductList from './components/MenProductList.vue'
import ContactSection from '../../shared/components/ContactSection.vue'
import Footer from '../../shared/components/Footer.vue'
import CartSidebar from '../../shared/components/CartSidebar.vue'
import Chatbot from '../../shared/components/Chatbot.vue'
import { provideCart } from '../../shared/components/useCart.js'

provideCart()

const showCart = ref(false)
const activeCategory = ref('relojes')
const activeFilters = ref({})

const categories = [
  { key: 'relojes', label: 'Relojes', icon: 'fas fa-clock', count: 8 },
  { key: 'pulseras', label: 'Pulseras', icon: 'fas fa-link', count: 6 },
  { key: 'collares', label: 'Collares', icon: 'fas fa-circle', count: 5 },
  { key: 'anillos', label: 'Anillos', icon: 'fas fa-ring', count: 7 },
  { key: 'billeteras', label: 'Billeteras', icon: 'fas fa-wallet', count: 4 },
  { key: 'gemelos', label: 'Gemelos', icon: 'fas fa-dot-circle', count: 3 }
]

const menProducts = [
  {
    id: 101,
    name: 'Reloj Deportivo Negro',
    description: 'Reloj resistente al agua con múltiples funciones deportivas.',
    price: 75990,
    category: 'relojes',
    subcategory: 'Deportivos',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    badge: 'POPULAR'
  },
  {
    id: 102,
    name: 'Pulsera de Cuero Marrón',
    description: 'Pulsera artesanal de cuero genuino con cierre metálico.',
    price: 32990,
    category: 'pulseras',
    subcategory: 'Cuero',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 103,
    name: 'Collar de Acero Inoxidable',
    description: 'Collar grueso con detalles grabados y cierre seguro.',
    price: 28990,
    oldPrice: 34990,
    category: 'collares',
    subcategory: 'Acero',
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    discount: 15
  },
  {
    id: 104,
    name: 'Anillo de Tungsteno Negro',
    description: 'Anillo resistente con acabado negro mate y detalles.',
    price: 42990,
    category: 'anillos',
    subcategory: 'Tungsteno',
    image: 'https://images.unsplash.com/photo-1611591437281-460914d1551c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 105,
    name: 'Reloj Clásico Dorado',
    description: 'Reloj elegante con correa de cuero marrón y detalles dorados.',
    price: 89990,
    category: 'relojes',
    subcategory: 'Clásicos',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    badge: 'NUEVO'
  },
  {
    id: 106,
    name: 'Pulsera de Acero Plateado',
    description: 'Pulsera moderna de eslabones gruesos con acabado plateado.',
    price: 45990,
    category: 'pulseras',
    subcategory: 'Acero',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 107,
    name: 'Billetera de Cuero Negro',
    description: 'Billetera premium de cuero genuino con múltiples compartimentos.',
    price: 38990,
    category: 'billeteras',
    subcategory: 'Cuero',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 108,
    name: 'Gemelos Plateados Clásicos',
    description: 'Gemelos elegantes con diseño geométrico y acabado plateado.',
    price: 52990,
    category: 'gemelos',
    subcategory: 'Plata',
    image: 'https://images.unsplash.com/photo-1614012118281-6b63ec2b3e7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
]

const totalProducts = computed(() => menProducts.length)

const getFilteredCount = () => {
  let filtered = menProducts.filter(product => product.category === activeCategory.value)
  
  if (activeFilters.value.subcategory) {
    filtered = filtered.filter(p => p.subcategory === activeFilters.value.subcategory)
  }
  
  if (activeFilters.value.priceRange) {
    const { min, max } = activeFilters.value.priceRange
    filtered = filtered.filter(p => p.price >= min && p.price <= max)
  }
  
  return filtered.length
}

const handleCategoryChange = (newCategory) => {
  activeCategory.value = newCategory
  activeFilters.value = {}
}

const handleFilterChange = (filters) => {
  activeFilters.value = filters
}
</script>

<style scoped>
/* Glassmorphism effect */
.backdrop-blur-sm {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

/* Animaciones de entrada */
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
</style>
