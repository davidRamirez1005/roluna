<template>
  <section class="relative overflow-hidden bg-gradient-to-br from-purple-200 via-indigo-100 to-white py-16 px-4 mb-8 rounded-3xl shadow-2xl border border-purple-100">
    <div class="container mx-auto flex flex-col md:flex-row items-center gap-8">
      <div class="md:w-2/3 flex flex-col items-center md:items-start text-center md:text-left">
        <span class="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-400 text-white text-xs font-bold px-4 py-1 rounded-full mb-5 shadow-md">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
          PRODUCTOS PREMIUM
        </span>
        <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
          <span class="bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent">Productos para</span><br>
          <span class="text-gray-700">tu bienestar</span>
        </h2>
        <p class="text-lg text-gray-600 mb-8 max-w-xl">
          Descubre nuestra selección premium de productos para el hogar, cuidado personal y nutrición. Calidad y bienestar en un solo lugar.
        </p>
      </div>
      <div class="md:w-1/3 flex justify-center">
        <ThreeDViewer fbxPath="/models/hip_hop_hound.fbx" texturePath="/models/hip_hop_hound.png" />
      </div>
    </div>
    <div class="absolute -top-10 -left-10 w-48 h-48 bg-purple-300 rounded-full opacity-20 blur-2xl"></div>
    <div class="absolute -bottom-16 -right-16 w-72 h-72 bg-indigo-200 rounded-full opacity-20 blur-2xl"></div>
  </section>
</template>

<script setup>
import ThreeDViewer from '../../../shared/components/ThreeDViewer.vue'
</script>
