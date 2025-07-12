import { ref, computed, provide, inject } from 'vue'

const cart = ref([])

function addToCart(product) {
  const existing = cart.value.find(item => item.id === product.id)
  if (existing) {
    existing.quantity += 1
    cart.value = [...cart.value] // Forzar reactividad
  } else {
    cart.value.push({ ...product, quantity: 1 })
    cart.value = [...cart.value] // Forzar reactividad
  }
}
function removeFromCart(product) {
  cart.value = cart.value.filter(item => item.id !== product.id)
}
function increaseQuantity(product) {
  const item = cart.value.find(i => i.id === product.id)
  if (item) {
    item.quantity++
    cart.value = [...cart.value] // Forzar reactividad
  }
}
function decreaseQuantity(product) {
  const item = cart.value.find(i => i.id === product.id)
  if (item && item.quantity > 1) {
    item.quantity--
    cart.value = [...cart.value] // Forzar reactividad
  }
}
const subtotal = computed(() => cart.value.reduce((t, i) => t + i.price * i.quantity, 0))

export function provideCart() {
  provide('cart', cart)
  provide('addToCart', addToCart)
  provide('removeFromCart', removeFromCart)
  provide('increaseQuantity', increaseQuantity)
  provide('decreaseQuantity', decreaseQuantity)
  provide('subtotal', subtotal)
}
export function useCart() {
  return {
    cart: inject('cart'),
    addToCart: inject('addToCart'),
    removeFromCart: inject('removeFromCart'),
    increaseQuantity: inject('increaseQuantity'),
    decreaseQuantity: inject('decreaseQuantity'),
    subtotal: inject('subtotal'),
  }
}
