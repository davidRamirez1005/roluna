<template>
  <section id="mujer" class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center mb-10">
        <h2 class="text-3xl font-bold text-gray-800">Accesorios para <span class="text-pink-500">Mujer</span></h2>
        <router-link 
          to="/mujer" 
          class="text-purple-600 hover:text-purple-800 font-medium transition-colors duration-300 flex items-center gap-2"
        >
          Ver todo
          <i class="fas fa-arrow-right text-sm"></i>
        </router-link>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <ProductCard v-for="product in womenProducts" :key="product.id" :product="product" @add-to-cart="handleAddToCart" />
      </div>
    </div>
  </section>
</template>

<script setup>
import ProductCard from '../../pages/components/ProductCard.vue'
import { useCart } from '../../../shared/components/useCart.js'

const { addToCart } = useCart()

const womenProducts = [
  {
    id: 201,
    name: 'Collar Corazón de Plata',
    description: 'Elegante collar con detalle en forma de corazón.',
    price: 45990,
    category: 'collares',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    badge: 'NUEVO'
  },
  {
    id: 202,
    name: 'Aretes de Oro 18K',
    description: 'Aretes clásicos con terminación en oro de 18 quilates.',
    price: 89990,
    category: 'aretes',
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 203,
    name: 'Reloj Elegante Rosa',
    description: 'Reloj de pulsera con correa de cuero genuino.',
    price: 65990,
    oldPrice: 82990,
    category: 'relojes',
    image: 'https://images.unsplash.com/photo-1611591437281-460914d1551c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    discount: 20
  },
  {
    id: 204,
    name: 'Anillo Diamante Solitario',
    description: 'Anillo en plata con diamante central de 0.5 quilates.',
    price: 120990,
    category: 'anillos',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  }
]

function handleAddToCart(product) {
  if (addToCart) addToCart(product)
}
</script>
