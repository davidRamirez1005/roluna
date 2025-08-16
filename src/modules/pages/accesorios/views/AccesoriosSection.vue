<template>
  <div>
    <Header @open-cart="showCart = true" />
    <HeroSection />
    <WomenSection />
    <MenSection />
    <PromoBanner />
    <ProductsSection />
    <ContactSection />
    <Footer />
    <CartSidebar v-if="showCart" @close="showCart = false" />
    <Chatbot />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Header from '@shared/components/Header.vue'
import HeroSection from '../components/home/HeroSection.vue'
import WomenSection from '../components/home/WomenSection.vue'
import MenSection from '../components/home/MenSection.vue'
import PromoBanner from '../components/home/PromoBanner.vue'
import ProductsSection from '../components/home/ProductsSection.vue'
import ContactSection from '@shared/components/ContactSection.vue'
import Footer from '@shared/components/Footer.vue'
import CartSidebar from '@shared/components/CartSidebar.vue'
import Chatbot from '@shared/components/Chatbot.vue'
import { provideCart } from '@shared/components/useCart.js'

provideCart()

const showCart = ref(false)
</script>

<style scoped>
</style>
