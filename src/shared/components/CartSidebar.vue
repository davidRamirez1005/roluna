<template>
  <div v-if="visible" class="fixed top-0 right-0 h-full w-full md:w-96 bg-white shadow-lg transition-transform duration-300 overflow-y-auto" :class="{ 'translate-x-0': visible, 'translate-x-full': !visible }" style="z-index: 1000;">
    <div class="p-6">
      <div class="flex justify-between items-center mb-6">
        <h3 class="text-xl font-bold text-gray-800">Tu Carrito</h3>
        <button @click="$emit('close')" class="text-gray-500 hover:text-gray-700">
          <i class="fas fa-times text-xl"></i>
        </button>
      </div>
      <div v-if="cart.length === 0" class="text-center py-8 text-gray-500">
        <i class="fas fa-shopping-cart text-4xl mb-3"></i>
        <p>Tu carrito está vacío</p>
      </div>
      <div v-else class="space-y-4 mb-6">
        <div v-for="item in cart" :key="item.id" class="flex items-start border-b border-gray-200 pb-4">
          <img :src="item.image" :alt="item.name" class="w-16 h-16 object-cover rounded mr-4">
          <div class="flex-1">
            <h4 class="font-medium text-gray-800">{{ item.name }}</h4>
            <div class="flex justify-between items-center mt-1">
              <div class="flex items-center">
                <button @click="decreaseQuantity(item)" class="text-gray-500 hover:text-purple-600 px-2">
                  <i class="fas fa-minus text-xs"></i>
                </button>
                <span class="quantity mx-2">{{ item.quantity }}</span>
                <button @click="increaseQuantity(item)" class="text-gray-500 hover:text-purple-600 px-2">
                  <i class="fas fa-plus text-xs"></i>
                </button>
              </div>
              <span class="font-medium">{{ currency(item.price * item.quantity) }}</span>
            </div>
          </div>
          <button @click="removeFromCart(item)" class="text-gray-400 hover:text-red-500 ml-2">
            <i class="fas fa-times"></i>
          </button>
        </div>
      </div>
      <div class="border-t border-gray-200 pt-4 mb-4">
        <div class="flex justify-between mb-2">
          <span class="text-gray-600">Subtotal</span>
          <span class="font-semibold">{{ currency(subtotal) }}</span>
        </div>
        <div class="flex justify-between mb-2">
          <span class="text-gray-600">Envío</span>
          <span class="font-semibold">Calculado al pagar</span>
        </div>
        <div class="flex justify-between text-lg font-bold">
          <span>Total</span>
          <span>{{ currency(subtotal) }}</span>
        </div>
      </div>
      <button @click="checkout" class="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg transition mb-4">
        Proceder al pago
      </button>
      <button @click="$emit('close')" class="w-full border border-purple-600 text-purple-600 hover:bg-purple-50 font-bold py-3 px-4 rounded-lg transition">
        Seguir comprando
      </button>
    </div>
  </div>
</template>

<script setup>
import { useCart } from './useCart.js'
const { cart, removeFromCart, increaseQuantity, decreaseQuantity, subtotal } = useCart()
const props = defineProps({
  visible: { type: Boolean, default: true },
})
function currency(val) {
  return '$' + (val || 0).toLocaleString()
}
function checkout() {
  if (cart.value.length > 0) {
    alert('Gracias por tu compra! Total: ' + currency(subtotal.value))
    cart.value.splice(0)
  } else {
    alert('Tu carrito está vacío')
  }
}
</script>
