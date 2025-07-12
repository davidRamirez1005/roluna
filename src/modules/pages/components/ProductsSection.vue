<template>
  <section id="productos" class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">Nuestra <span class="text-purple-600">Colección</span></h2>
      <!-- Category Cards -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
        <div v-for="cat in categories" :key="cat.filter" class="category-card bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105">
          <div class="h-40 overflow-hidden">
            <img :src="cat.image" :alt="cat.label" class="w-full h-full object-cover">
          </div>
          <div class="p-4 text-center">
            <CategoryButton :filter="cat.filter" :active="activeFilter === cat.filter" @select="setFilter">
              {{ cat.label }}
            </CategoryButton>
          </div>
        </div>
      </div>
      <!-- Products Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" @add-to-cart="handleAddToCart" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import ProductCard from '../../pages/components/ProductCard.vue'
import CategoryButton from '../../pages/components/CategoryButton.vue'
import { useCart } from '../../../shared/components/useCart.js'

const { addToCart } = useCart()

const categories = [
  { filter: 'all', label: 'Ver Todos', image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
  { filter: 'collares', label: 'Collares', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
  { filter: 'aretes', label: 'Aretes', image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
  { filter: 'relojes', label: 'Relojes', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
  { filter: 'anillos', label: 'Anillos', image: 'https://images.unsplash.com/photo-1611591437281-460914d1551c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
  { filter: 'pulseras', label: 'Pulseras', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' }
]

const products = [
  { id: 1, name: 'Collar Plata 925', description: 'Collar fino de plata con dije geométrico.', price: 38990, category: 'collares', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
  { id: 2, name: 'Aretes Perla Blanca', description: 'Aretes con perla natural y terminación en oro.', price: 52990, category: 'aretes', image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
  { id: 3, name: 'Reloj Clásico Cuero', description: 'Reloj analógico con correa de cuero genuino.', price: 68990, category: 'relojes', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
  { id: 4, name: 'Anillo Plata con Zirconia', description: 'Anillo de plata con piedra de zirconia cúbica.', price: 36990, category: 'anillos', image: 'https://images.unsplash.com/photo-1611591437281-460914d1551c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
  { id: 5, name: 'Pulsera Tejida Multicolor', description: 'Pulsera artesanal tejida con hilos de colores.', price: 24990, category: 'pulseras', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' }
]

const activeFilter = ref('all')
const setFilter = (filter) => { activeFilter.value = filter }
const filteredProducts = computed(() =>
  activeFilter.value === 'all' ? products : products.filter(p => p.category === activeFilter.value)
)

function handleAddToCart(product) {
  console.log('Añadiendo al carrito:', product)
  if (addToCart) addToCart(product)
}
</script>

<style scoped>
.category-card {
  transition: all 0.3s ease;
}
.category-card:hover {
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}
</style>
