<template>
  <nav class="flex flex-wrap gap-3 justify-center lg:justify-start">
    <button
      v-for="cat in categories"
      :key="cat.key"
      :class="[
        'group relative px-6 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-3 min-w-[180px] justify-center',
        active === cat.key 
          ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg shadow-purple-500/30' 
          : 'bg-white/60 text-gray-700 border border-gray-200 hover:bg-white hover:shadow-md hover:border-purple-300'
      ]"
      @click="$emit('select', cat.key)"
    >
      <!-- Icono -->
      <div :class="[
        'w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300',
        active === cat.key 
          ? 'bg-white/20' 
          : 'bg-purple-100 group-hover:bg-purple-200'
      ]">
        <i :class="[
          cat.icon || 'fas fa-box',
          'text-sm',
          active === cat.key ? 'text-white' : 'text-purple-600'
        ]"></i>
      </div>
      
      <!-- Contenido -->
      <div class="flex flex-col items-start">
        <span :class="[
          'text-sm font-bold',
          active === cat.key ? 'text-white' : 'text-gray-800'
        ]">{{ cat.label }}</span>
        <span :class="[
          'text-xs font-medium',
          active === cat.key ? 'text-white/90' : 'text-gray-600'
        ]">
          {{ cat.count || 0 }} productos
        </span>
      </div>
      
      <!-- Indicador activo -->
      <div v-if="active === cat.key" class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-white rounded-full"></div>
      
      <!-- Efecto hover -->
      <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </button>
  </nav>
</template>

<script setup>
defineProps({
  categories: Array,
  active: String
})
defineEmits(['select'])
</script>

<style scoped>
/* Animación de entrada */
nav button {
  animation: slideInUp 0.6s ease-out;
}

nav button:nth-child(2) {
  animation-delay: 0.1s;
}

nav button:nth-child(3) {
  animation-delay: 0.2s;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Efecto de pulsación */
nav button:active {
  transform: scale(0.98);
}
</style>
