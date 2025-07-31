<template>
  <div  class="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/30">
    <!-- Información de página -->
    <div class="flex items-center gap-2 text-sm text-gray-600">
      <i class="fas fa-info-circle text-purple-500"></i>
      <span>
        Mostrando {{ startItem }} - {{ endItem }} de {{ totalItems }} productos
      </span>
    </div>

    <!-- Controles de paginación -->
    <div class="flex items-center gap-2">
      <!-- Botón anterior -->
      <button
        @click="goToPage(currentPage - 1)"
        :disabled="currentPage === 1"
        :class="[
          'flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 text-sm',
          currentPage === 1
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'bg-white/60 text-gray-700 border border-gray-200 hover:bg-purple-50 hover:border-purple-300 hover:text-purple-700 hover:shadow-md transform hover:scale-105'
        ]"
      >
        <i class="fas fa-chevron-left text-xs"></i>
        <span class="hidden sm:inline">Anterior</span>
      </button>

      <!-- Números de página -->
      <div class="flex items-center gap-1">
        <!-- Primera página -->
        <button
          v-if="showFirstPage"
          @click="goToPage(1)"
          :class="[
            'w-10 h-10 rounded-full font-semibold transition-all duration-300 text-sm',
            currentPage === 1
              ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg shadow-purple-500/30'
              : 'bg-white/60 text-gray-700 border border-gray-200 hover:bg-purple-50 hover:border-purple-300 hover:text-purple-700 hover:shadow-md transform hover:scale-110'
          ]"
        >
          1
        </button>

        <!-- Puntos suspensivos izquierda -->
        <span v-if="showLeftEllipsis" class="px-2 text-gray-400">...</span>

        <!-- Páginas visibles -->
        <button
          v-for="page in visiblePages"
          :key="page"
          @click="goToPage(page)"
          :class="[
            'w-10 h-10 rounded-full font-semibold transition-all duration-300 text-sm',
            currentPage === page
              ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg shadow-purple-500/30 transform scale-110'
              : 'bg-white/60 text-gray-700 border border-gray-200 hover:bg-purple-50 hover:border-purple-300 hover:text-purple-700 hover:shadow-md transform hover:scale-110'
          ]"
        >
          {{ page }}
        </button>

        <!-- Puntos suspensivos derecha -->
        <span v-if="showRightEllipsis" class="px-2 text-gray-400">...</span>

        <!-- Última página -->
        <button
          v-if="showLastPage"
          @click="goToPage(totalPages)"
          :class="[
            'w-10 h-10 rounded-full font-semibold transition-all duration-300 text-sm',
            currentPage === totalPages
              ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg shadow-purple-500/30'
              : 'bg-white/60 text-gray-700 border border-gray-200 hover:bg-purple-50 hover:border-purple-300 hover:text-purple-700 hover:shadow-md transform hover:scale-110'
          ]"
        >
          {{ totalPages }}
        </button>
      </div>

      <!-- Botón siguiente -->
      <button
        @click="goToPage(currentPage + 1)"
        :disabled="currentPage === totalPages"
        :class="[
          'flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 text-sm',
          currentPage === totalPages
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'bg-white/60 text-gray-700 border border-gray-200 hover:bg-purple-50 hover:border-purple-300 hover:text-purple-700 hover:shadow-md transform hover:scale-105'
        ]"
      >
        <span class="hidden sm:inline">Siguiente</span>
        <i class="fas fa-chevron-right text-xs"></i>
      </button>
    </div>

    <!-- Selector de elementos por página (opcional) -->
    <div class="flex items-center gap-2 text-sm">
      <span class="text-gray-600">Por página:</span>
      <select
        :value="itemsPerPage"
        @change="changeItemsPerPage($event.target.value)"
        class="bg-white/60 border border-gray-200 rounded-full px-3 py-1 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent hover:shadow-md transition-all duration-300"
      >
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  currentPage: {
    type: Number,
    default: 1
  },
  totalItems: {
    type: Number,
    required: true
  },
  itemsPerPage: {
    type: Number,
    default: 20
  },
  maxVisiblePages: {
    type: Number,
    default: 21
  }
})

const emit = defineEmits(['page-change', 'items-per-page-change'])

// Cálculos de paginación
const totalPages = computed(() => Math.ceil(props.totalItems / props.itemsPerPage))

const startItem = computed(() => {
  if (props.totalItems === 0) return 0
  return (props.currentPage - 1) * props.itemsPerPage + 1
})

const endItem = computed(() => {
  const lastItem = props.currentPage * props.itemsPerPage
  return Math.min(lastItem, props.totalItems)
})

// Lógica para páginas visibles
const visiblePages = computed(() => {
  const pages = []
  const half = Math.floor(props.maxVisiblePages / 2)
  let start = Math.max(props.currentPage - half, 1)
  let end = Math.min(start + props.maxVisiblePages - 1, totalPages.value)

  // Ajustar el inicio si estamos cerca del final
  if (end - start + 1 < props.maxVisiblePages) {
    start = Math.max(end - props.maxVisiblePages + 1, 1)
  }

  // Excluir primera y última página si ya se muestran por separado
  const actualStart = start === 1 ? 2 : start
  const actualEnd = end === totalPages.value ? totalPages.value - 1 : end

  for (let i = actualStart; i <= actualEnd; i++) {
    if (i !== 1 && i !== totalPages.value) {
      pages.push(i)
    }
  }

  return pages
})

const showFirstPage = computed(() => totalPages.value > 1)
const showLastPage = computed(() => totalPages.value > 1 && totalPages.value !== 1)
const showLeftEllipsis = computed(() => visiblePages.value.length > 0 && visiblePages.value[0] > 2)
const showRightEllipsis = computed(() => 
  visiblePages.value.length > 0 && 
  visiblePages.value[visiblePages.value.length - 1] < totalPages.value - 1
)

// Funciones
const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value && page !== props.currentPage) {
    emit('page-change', page)
  }
}

const changeItemsPerPage = (newItemsPerPage) => {
  const numericValue = parseInt(newItemsPerPage)
  if (numericValue !== props.itemsPerPage) {
    emit('items-per-page-change', numericValue)
  }
}
</script>

<style scoped>
/* Glassmorphism effect */
.backdrop-blur-sm {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

/* Animaciones para los botones */
button {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

button:hover:not(:disabled) {
  transform: translateY(-1px);
}

button:active:not(:disabled) {
  transform: translateY(0);
}

/* Efecto especial para la página actual */
button.current-page {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(147, 51, 234, 0.4);
  }
  50% {
    box-shadow: 0 0 0 8px rgba(147, 51, 234, 0);
  }
}

/* Hover effects mejorados */
select:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Estados disabled */
button:disabled {
  transform: none !important;
  box-shadow: none !important;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .flex-col {
    gap: 3rem;
  }
  
  .gap-4 {
    gap: 1rem;
  }
}

/* Focus states para accesibilidad */
button:focus-visible {
  outline: 2px solid #8b5cf6;
  outline-offset: 2px;
}

select:focus-visible {
  outline: 2px solid #8b5cf6;
  outline-offset: 2px;
}
</style>
