<template>
  <section id="hombre" class="py-16 bg-gray-100">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center mb-10">
        <h2 class="text-3xl font-bold text-gray-800">Accesorios para <span class="text-blue-500">Hombre</span></h2>
        <router-link 
          to="/hombre" 
          class="text-purple-600 hover:text-purple-800 font-medium transition-colors duration-300 flex items-center gap-2"
        >
          Ver todo
          <i class="fas fa-arrow-right text-sm"></i>
        </router-link>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <ProductCard v-for="product in menProducts" :key="product.id" :product="product" @add-to-cart="handleAddToCart" />
      </div>
    </div>
  </section>
</template>

<script setup>
import ProductCard from './ProductCard.vue'
import { useCart } from '../../../shared/components/useCart.js'

const { addToCart } = useCart()

const menProducts = [
  {
    id: 101,
    name: 'Reloj Deportivo Negro',
    description: 'Reloj resistente al agua con múltiples funciones.',
    price: 75990,
    category: 'relojes',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    badge: 'POPULAR'
  },
  {
    id: 102,
    name: 'Pulsera de Cuero Marrón',
    description: 'Pulsera artesanal de cuero genuino con cierre metálico.',
    price: 32990,
    category: 'pulseras',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 103,
    name: 'Collar de Acero Inoxidable',
    description: 'Collar grueso con detalles grabados y cierre seguro.',
    price: 28990,
    oldPrice: 34990,
    category: 'collares',
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    discount: 15
  },
  {
    id: 104,
    name: 'Anillo de Tungsteno Negro',
    description: 'Anillo resistente con acabado negro mate y detalles.',
    price: 42990,
    category: 'anillos',
    image: 'https://images.unsplash.com/photo-1611591437281-460914d1551c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  }
]

function handleAddToCart(product) {
  if (addToCart) addToCart(product)
}
</script>
