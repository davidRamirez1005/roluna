<template>
  <section class="relative overflow-hidden py-16 px-4 bg-gradient-to-br from-purple-200 via-indigo-100 to-white shadow-2xl rounded-3xl border border-purple-100">
    <div class="container mx-auto flex flex-col md:flex-row items-center gap-8">
      <div class="md:w-2/3 flex flex-col items-center md:items-start text-center md:text-left">
        <span class="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-400 text-white text-xs font-bold px-4 py-1 rounded-full mb-5 shadow-md animate-pulse">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3"/></svg>
          OFERTA LIMITADA
        </span>
        <h3 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
          <span class="bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent">HASTA 40% DE DESCUENTO</span><br>
          <span class="text-gray-700">EN NUESTRA COLECCIÓN</span>
        </h3>
        <p class="text-lg text-gray-600 mb-8 max-w-xl">
          Aprovecha esta promoción exclusiva por tiempo limitado y renueva tu estilo con lo mejor en accesorios y moda urbana.
        </p>
        <a href="#productos" class="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-indigo-500 hover:to-purple-600 text-white font-bold px-10 py-3 rounded-full shadow-lg hover:scale-105 transition-all duration-200">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          Ver Ofertas
        </a>
      </div>
      <div class="md:w-1/3 flex justify-center">
        <ThreeDViewer fbxPath="/models/hip_hop_hound.fbx" texturePath="/models/hip_hop_hound.png" />
      </div>
    </div>
    <div class="absolute -top-10 -left-10 w-48 h-48 bg-purple-300 rounded-full opacity-20 blur-2xl"></div>
    <div class="absolute -bottom-16 -right-16 w-72 h-72 bg-indigo-200 rounded-full opacity-20 blur-2xl"></div>
    <div class="absolute top-1/2 left-1/2 w-32 h-32 bg-white rounded-full opacity-10 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
  </section>
</template>
<script setup>
// Promo Banner
import ThreeDViewer from '../../../shared/components/ThreeDViewer.vue'
</script>
