<template>
  <div class="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/30">
    <!-- Header de la lista -->
    <div class="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
          <i class="fas fa-male text-white"></i>
        </div>
        <div>
          <h3 class="text-xl font-bold text-gray-800">{{ getCategoryLabel(category) }}</h3>
          <p class="text-sm text-gray-600">{{ filteredProducts.length }} productos encontrados</p>
        </div>
      </div>
      
      <!-- Ordenamiento -->
      <select 
        v-model="sortBy" 
        class="bg-white/60 border border-gray-200 rounded-full px-4 py-2 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        <option value="name">Ordenar por nombre</option>
        <option value="price-asc">Precio: menor a mayor</option>
        <option value="price-desc">Precio: mayor a menor</option>
        <option value="newest">Más nuevos</option>
      </select>
    </div>

    <!-- Grid de productos -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <ProductCard 
        v-for="product in sortedProducts" 
        :key="product.id" 
        :product="product" 
        @add-to-cart="handleAddToCart" 
      />
    </div>

    <!-- Mensaje cuando no hay productos -->
    <div v-if="filteredProducts.length === 0" class="text-center py-16">
      <div class="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <i class="fas fa-search text-gray-400 text-2xl"></i>
      </div>
      <h3 class="text-lg font-semibold text-gray-800 mb-2">No se encontraron productos</h3>
      <p class="text-gray-600 mb-6">Intenta ajustar los filtros para ver más opciones</p>
      <button 
        @click="clearAllFilters"
        class="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
      >
        <i class="fas fa-refresh mr-2"></i>
        Limpiar filtros
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import ProductCard from './ProductCard.vue'
import { useCart } from '../../../shared/components/useCart.js'

const props = defineProps({
  category: String,
  filters: Object,
  products: Array
})

const emit = defineEmits(['clear-filters'])

const { addToCart } = useCart()
const sortBy = ref('name')

// Productos filtrados
const filteredProducts = computed(() => {
  let filtered = props.products.filter(product => product.category === props.category)
  
  // Filtrar por subcategoría
  if (props.filters?.subcategory) {
    filtered = filtered.filter(product => product.subcategory === props.filters.subcategory)
  }
  
  // Filtrar por rango de precio
  if (props.filters?.priceRange) {
    const { min, max } = props.filters.priceRange
    filtered = filtered.filter(product => product.price >= min && product.price <= max)
  }
  
  return filtered
})

// Productos ordenados
const sortedProducts = computed(() => {
  const products = [...filteredProducts.value]
  
  switch (sortBy.value) {
    case 'price-asc':
      return products.sort((a, b) => a.price - b.price)
    case 'price-desc':
      return products.sort((a, b) => b.price - a.price)
    case 'newest':
      return products.sort((a, b) => b.id - a.id)
    case 'name':
    default:
      return products.sort((a, b) => a.name.localeCompare(b.name))
  }
})

const getCategoryLabel = (categoryKey) => {
  const categoryLabels = {
    relojes: 'Relojes Masculinos',
    pulseras: 'Pulseras para Hombre',
    collares: 'Collares Masculinos',
    anillos: 'Anillos para Hombre',
    billeteras: 'Billeteras',
    gemelos: 'Gemelos'
  }
  return categoryLabels[categoryKey] || 'Productos'
}

const handleAddToCart = (product) => {
  if (addToCart) addToCart(product)
}

const clearAllFilters = () => {
  emit('clear-filters')
}
</script>

<style scoped>
/* Glassmorphism effect */
.backdrop-blur-sm {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

/* Animaciones de entrada para las tarjetas */
.grid > div {
  animation: fadeInUp 0.6s ease-out;
}

.grid > div:nth-child(2) {
  animation-delay: 0.1s;
}

.grid > div:nth-child(3) {
  animation-delay: 0.2s;
}

.grid > div:nth-child(4) {
  animation-delay: 0.3s;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Hover effects para el select */
select:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
</style>
