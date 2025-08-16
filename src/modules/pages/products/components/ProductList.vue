<template>
  <div class="space-y-6">
    <!-- Grid de productos -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      <ProductCard
        v-for="product in paginatedProducts"
        :key="product.id"
        :product="product"
      />
    </div>

    <!-- Mensaje cuando no hay productos -->
    <div v-if="filteredProducts.length === 0" class="text-center py-16">
      <div class="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <i class="fas fa-search text-gray-400 text-2xl"></i>
      </div>
      <h3 class="text-lg font-semibold text-gray-800 mb-2">No se encontraron productos</h3>
      <p class="text-gray-600 mb-6">Intenta ajustar los filtros para ver más opciones</p>
    </div>

    <!-- Componente de paginación -->
    <Paginate
      v-if="filteredProducts.length > 0"
      :current-page="currentPage"
      :total-items="filteredProducts.length"
      :items-per-page="itemsPerPage"
      @page-change="handlePageChange"
      @items-per-page-change="handleItemsPerPageChange"
    />
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import ProductCard from '@shared/components/ProductCard.vue'
import Paginate from '@shared/components/Paginate.vue'

// Simulación de productos con subcategorías
const products = [
  // Hogar
  { id: 1, category: 'hogar', subcategory: 'Cocina', name: 'Set de Vasos Premium', price: 25000, image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 2, category: 'hogar', subcategory: 'Iluminación', name: 'Lámpara LED Inteligente', price: 40000, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 3, category: 'hogar', subcategory: 'Decoración', name: 'Organizador Modular', price: 35000, image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 4, category: 'hogar', subcategory: 'Baño', name: 'Difusor de Aromas', price: 28000, image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 5, category: 'hogar', subcategory: 'Textiles', name: 'Cojines Decorativos', price: 18000, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 6, category: 'hogar', subcategory: 'Cocina', name: 'Tabla de Cortar Bambú', price: 22000, image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  
  // Cuidado personal
  { id: 7, category: 'cuidado', subcategory: 'Facial', name: 'Crema Facial Antioxidante', price: 18000, image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 8, category: 'cuidado', subcategory: 'Herramientas', name: 'Cepillo Eléctrico Facial', price: 35000, image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 9, category: 'cuidado', subcategory: 'Facial', name: 'Sérum Vitamina C', price: 22000, image: 'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 10, category: 'cuidado', subcategory: 'Facial', name: 'Mascarilla Hidratante', price: 15000, image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 11, category: 'cuidado', subcategory: 'Corporal', name: 'Loción Corporal Hidratante', price: 25000, image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 12, category: 'cuidado', subcategory: 'Cabello', name: 'Champú Nutritivo', price: 19000, image: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  
  // Nutrición
  { id: 13, category: 'nutricion', subcategory: 'Proteínas', name: 'Proteína Vegana Premium', price: 60000, image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 14, category: 'nutricion', subcategory: 'Vitaminas', name: 'Multivitamínicos Naturales', price: 22000, image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 15, category: 'nutricion', subcategory: 'Suplementos', name: 'Omega 3 Plus', price: 32000, image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 16, category: 'nutricion', subcategory: 'Suplementos', name: 'Probióticos Avanzados', price: 45000, image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 17, category: 'nutricion', subcategory: 'Deportivos', name: 'Pre-Entreno Natural', price: 38000, image: 'https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 18, category: 'nutricion', subcategory: 'Orgánicos', name: 'Superalimentos Mix', price: 28000, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' }
]

const props = defineProps({ 
  category: String,
  filters: Object
})

// Estados de paginación
const currentPage = ref(1)
const itemsPerPage = ref(10)

// Resetear página al cambiar filtros
watch(() => [props.category, props.filters], () => {
  currentPage.value = 1
}, { deep: true })

const filteredProducts = computed(() => {
  console.log('ProductList - Category:', props.category, 'Filters:', props.filters) // Debug log
  let filtered = products.filter(p => p.category === props.category)
  
  // Filtrar por subcategoría
  if (props.filters?.subcategory) {
    console.log('Filtrando por subcategoría:', props.filters.subcategory) // Debug log
    filtered = filtered.filter(p => p.subcategory === props.filters.subcategory)
  }
  
  // Filtrar por rango de precio
  if (props.filters?.priceRange) {
    console.log('Filtrando por precio:', props.filters.priceRange) // Debug log
    const { min, max } = props.filters.priceRange
    filtered = filtered.filter(p => p.price >= min && p.price <= max)
  }
  
  console.log('Productos filtrados:', filtered.length) // Debug log
  return filtered
})

// Productos paginados
const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return filteredProducts.value.slice(start, end)
})

// Funciones de paginación
const handlePageChange = (page) => {
  currentPage.value = page
}

const handleItemsPerPageChange = (newItemsPerPage) => {
  itemsPerPage.value = newItemsPerPage
  currentPage.value = 1
}
</script>
