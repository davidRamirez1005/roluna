<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 via-pink-50 to-rose-50">
    <Header @open-cart="showCart = true" />
    
    <!-- Hero Section -->
    <div class="relative">
      <div class="bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 py-16 px-4">
        <div class="container mx-auto text-center">
          <div class="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <i class="fas fa-female text-white"></i>
            <span class="text-white font-medium">Accesorios Femeninos</span>
          </div>
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-4">
            Accesorios para
            <span class="bg-gradient-to-r from-pink-200 to-rose-200 bg-clip-text text-transparent">
              Mujer
            </span>
          </h1>
          <p class="text-xl text-pink-100 max-w-2xl mx-auto">
            Encuentra la pieza perfecta que refleje tu personalidad única. Elegancia, feminidad y estilo en cada detalle.
          </p>
        </div>
      </div>
    </div>

    <!-- Sección principal de productos -->
    <main class="container mx-auto px-4 pb-12">
      <!-- Estadísticas rápidas -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 -mt-8 relative z-10">
        <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/30 hover:shadow-lg transition-all duration-300">
          <div class="text-2xl font-bold text-pink-600">{{ totalProducts }}</div>
          <div class="text-sm text-gray-600">Productos</div>
        </div>
        <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/30 hover:shadow-lg transition-all duration-300">
          <div class="text-2xl font-bold text-rose-600">{{ categories.length }}</div>
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
            <div class="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center">
              <i class="fas fa-th-list text-white"></i>
            </div>
            <div>
              <h2 class="text-xl font-bold text-gray-800">Categorías Femeninas</h2>
              <p class="text-sm text-gray-600">Descubre tu estilo único y elegante</p>
            </div>
          </div>
          
          <!-- Contador de productos filtrados -->
          <div class="bg-pink-50 rounded-full px-4 py-2 border border-pink-200">
            <span class="text-sm font-medium text-pink-700">
              {{ getFilteredCount() }} productos disponibles
            </span>
          </div>
        </div>
        
        <WomenCategoriesNav 
          :categories="categories" 
          :active="activeCategory" 
          @select="handleCategoryChange" 
        />
      </div>

      <!-- Filtros de productos -->
      <WomenProductFilters 
        :category="activeCategory"
        @filter-change="handleFilterChange"
      />

      <!-- Lista de productos -->
      <div class="transition-all duration-500 ease-in-out">
        <WomenProductList 
          :category="activeCategory"
          :filters="activeFilters"
          :products="womenProducts"
        />
      </div>

      <!-- Call to action -->
      <div class="mt-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-3xl p-8 text-white text-center shadow-2xl">
        <h3 class="text-2xl font-bold mb-4">¿Buscas el complemento perfecto?</h3>
        <p class="text-pink-100 mb-6 max-w-2xl mx-auto">
          Nuestras especialistas en moda femenina te ayudarán a encontrar esa pieza especial que realce tu belleza natural.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            <i class="fas fa-comments mr-2"></i>
            Asesora de Moda
          </button>
          <button class="border-2 border-white text-white px-8 py-3 rounded-full font-semibol hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            <i class="fas fa-female mr-2"></i>
            Lookbook
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
import Header from '@shared/components/Header.vue'
import WomenCategoriesNav from '../components/woman/WomenCategoriesNav.vue'
import WomenProductFilters from '../components/woman/WomenProductFilters.vue'
import WomenProductList from '../components/woman/WomenProductList.vue'
import ContactSection from '@shared/components/ContactSection.vue'
import Footer from '@shared/components/Footer.vue'
import CartSidebar from '@shared/components/CartSidebar.vue'
import Chatbot from '@shared/components/Chatbot.vue'
import { provideCart } from '@shared/components/useCart.js'

provideCart()

const showCart = ref(false)
const activeCategory = ref('collares')
const activeFilters = ref({})

const categories = [
  { key: 'collares', label: 'Collares', icon: 'fas fa-circle', count: 8 },
  { key: 'aretes', label: 'Aretes', icon: 'fas fa-dot-circle', count: 9 },
  { key: 'pulseras', label: 'Pulseras', icon: 'fas fa-link', count: 6 },
  { key: 'anillos', label: 'Anillos', icon: 'fas fa-ring', count: 7 },
  { key: 'relojes', label: 'Relojes', icon: 'fas fa-clock', count: 5 },
  { key: 'bolsos', label: 'Bolsos', icon: 'fas fa-handbag', count: 4 }
]

const womenProducts = [
  {
    id: 201,
    name: 'Collar Corazón de Plata',
    description: 'Elegante collar con detalle en forma de corazón en plata 925.',
    price: 45990,
    category: 'collares',
    subcategory: 'Plata',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    badge: 'NUEVO'
  },
  {
    id: 202,
    name: 'Aretes de Oro 18K',
    description: 'Aretes clásicos con terminación en oro de 18 quilates.',
    price: 89990,
    category: 'aretes',
    subcategory: 'Oro',
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 203,
    name: 'Reloj Elegante Rosa',
    description: 'Reloj de pulsera con correa de cuero genuino en tono rosa.',
    price: 65990,
    oldPrice: 82990,
    category: 'relojes',
    subcategory: 'Cuero',
    image: 'https://images.unsplash.com/photo-1611591437281-460914d1551c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    discount: 20
  },
  {
    id: 204,
    name: 'Anillo Diamante Solitario',
    description: 'Anillo en plata con diamante central de 0.5 quilates.',
    price: 120990,
    category: 'anillos',
    subcategory: 'Diamantes',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    badge: 'PREMIUM'
  },
  {
    id: 205,
    name: 'Pulsera Perlas Naturales',
    description: 'Pulsera delicada con perlas naturales de agua dulce.',
    price: 38990,
    category: 'pulseras',
    subcategory: 'Perlas',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 206,
    name: 'Aretes Largos Dorados',
    description: 'Aretes colgantes con diseño moderno y acabado dorado.',
    price: 32990,
    category: 'aretes',
    subcategory: 'Oro',
    image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 207,
    name: 'Bolso Mini Rosa',
    description: 'Bolso pequeño de cuero sintético en tono rosa pastel.',
    price: 58990,
    category: 'bolsos',
    subcategory: 'Mini',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 208,
    name: 'Collar Perlas Clásico',
    description: 'Collar tradicional de perlas cultivadas con cierre de plata.',
    price: 75990,
    category: 'collares',
    subcategory: 'Perlas',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    badge: 'CLÁSICO'
  }
]

const totalProducts = computed(() => womenProducts.length)

const getFilteredCount = () => {
  let filtered = womenProducts.filter(product => product.category === activeCategory.value)
  
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
