<template>
  <section class="relative overflow-hidden bg-gradient-to-r from-purple-50 to-indigo-50 py-20 md:py-28">
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-0 left-0 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div class="absolute top-0 right-0 w-64 h-64 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div class="absolute bottom-0 left-1/2 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
    </div>
    <div class="container mx-auto px-4 relative z-10">
      <div class="flex flex-col lg:flex-row items-center gap-12">
        <div class="lg:w-1/2 text-center lg:text-left">
          <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Accesorios</span> que <br>definen tu estilo
          </h1>
          <p class="text-xl text-gray-600 mb-8 max-w-lg">
            La mejor selección de accesorios de moda para hombre y mujer. 
            <span class="font-semibold text-purple-600">Envíos gratis</span> en compras sobre $50.000
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#mujer" class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-200">
              Colección Mujer
            </a>
            <a href="#hombre" class="bg-white hover:bg-gray-100 text-purple-600 font-bold py-4 px-8 rounded-full border border-purple-200 transition-all transform hover:scale-105 shadow-sm">
              Colección Hombre
            </a>
          </div>
        </div>
        <div class="lg:w-1/2 mt-16 lg:mt-0 relative flex flex-col items-center">
          <div class="relative w-full max-w-lg mx-auto aspect-square rounded-3xl bg-gradient-to-br from-white via-indigo-100 to-purple-100 shadow-2xl border border-indigo-100 flex items-center justify-center">
            <!-- <ThreeDViewer fbxPath="/models/hip_hop_hound.fbx" texturePath="/models/hip_hop_hound.png" /> -->
            <img src="../../../assets/mascotas.png" alt="Producto destacado" class="w-full h-full object-cover rounded-3xl">
            <div class="absolute -bottom-12 left-15 -translate-x-1/2 bg-white/90 p-6 rounded-2xl shadow-2xl flex items-center gap-4 backdrop-blur-md border border-purple-100">
              <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3"/></svg>
              <div>
                <p class="text-xs text-gray-500">Colección Premium</p>
                <p class="font-bold text-gray-800 text-lg">+50 diseños</p>
              </div>
            </div>
            <div class="absolute -top-12 right-8 bg-white/90 p-6 rounded-2xl shadow-2xl flex items-center gap-4 backdrop-blur-md border border-pink-100">
              <svg class="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 21C12 21 4 13.5 4 8.5C4 5.5 6.5 3 9.5 3C11.24 3 12 4.5 12 4.5C12 4.5 12.76 3 14.5 3C17.5 3 20 5.5 20 8.5C20 13.5 12 21 12 21Z"/></svg>
              <div>
                <p class="text-xs text-gray-500">Clientes satisfechos</p>
                <p class="font-bold text-gray-800 text-lg">+5.000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ThreeDViewer from '../../../shared/components/ThreeDViewer.vue'
</script>

<style scoped>
.category-card {
  transition: all 0.3s ease;
}
.category-card:hover {
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}
@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}
.animate-blob {
  animation: blob 7s infinite;
}
.animation-delay-2000 {
  animation-delay: 2s;
}
.animation-delay-4000 {
  animation-delay: 4s;
}
</style>
