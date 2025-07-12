<template>
  <div class="product-item product-card bg-white rounded-lg overflow-hidden shadow-md transition duration-300" :data-category="product.category">
    <div class="relative">
      <img :src="product.image" :alt="product.name" class="w-full h-64 object-cover">
      <div v-if="product.badge" class="absolute top-2 right-2 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full">{{ product.badge }}</div>
      <div v-if="product.discount" class="absolute top-2 right-2 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full">-{{ product.discount }}%</div>
    </div>
    <div class="p-4">
      <h3 class="text-lg font-semibold text-gray-800 mb-1">{{ product.name }}</h3>
      <p class="text-gray-600 text-sm mb-3">{{ product.description }}</p>
      <div class="flex justify-between items-center">
        <div>
          <span class="text-lg font-bold text-gray-800">{{ currency(product.price) }}</span>
          <span v-if="product.oldPrice" class="text-sm text-gray-500 line-through ml-2">{{ currency(product.oldPrice) }}</span>
        </div>
        <button class="add-to-cart bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded-full text-sm transition" @click="handleAddToCart">
          <i class="fas fa-cart-plus mr-1"></i> Añadir
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useCart } from '../../../shared/components/useCart.js'

const { addToCart } = useCart()

const { product } = defineProps({
  product: { type: Object, required: true }
})

function currency(val) {
  return '$' + (val || 0).toLocaleString()
}

function handleAddToCart() {
  addToCart(product)
}
</script>
