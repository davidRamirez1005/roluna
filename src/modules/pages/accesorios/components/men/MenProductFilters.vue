<template>
  <div class="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-4 mb-6 border border-white/30 relative z-50">
    <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
      <!-- Título y descripción -->
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center shadow-lg">
          <i class="fas fa-filter text-white"></i>
        </div>
        <div>
          <h3 class="text-lg font-bold text-gray-800">Filtrar Accesorios Masculinos</h3>
          <p class="text-xs text-gray-600">Encuentra el estilo perfecto para ti</p>
        </div>
      </div>
      
      <!-- Controles de filtro -->
      <div class="flex flex-wrap gap-3">
        <!-- Filtro por subcategoría -->
        <div class="relative">
          <button 
            @click="showSubcategories = !showSubcategories"
            :class="[
              'flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 min-w-[160px] justify-between',
              selectedSubcategory 
                ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30' 
                : 'bg-white/60 text-gray-700 border border-gray-200 hover:bg-white hover:shadow-md'
            ]"
          >
            <div class="flex items-center gap-2">
              <i class="fas fa-layer-group text-xs"></i>
              <span class="truncate">{{ selectedSubcategory || 'Subcategorías' }}</span>
            </div>
            <i :class="[
              'fas fa-chevron-down transition-transform duration-300 text-xs',
              showSubcategories ? 'rotate-180' : ''
            ]"></i>
          </button>
          
          <div v-if="showSubcategories" class="absolute top-full mt-2 left-0 bg-white border border-gray-200 rounded-xl shadow-2xl z-[999] min-w-[180px] max-w-[220px] overflow-hidden">
            <div class="p-1">
              <button 
                @click="selectSubcategory(null)"
                :class="[
                  'w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 flex items-center gap-2',
                  !selectedSubcategory 
                    ? 'bg-blue-100 text-blue-700 font-medium' 
                    : 'hover:bg-gray-50 text-gray-700'
                ]"
              >
                <i class="fas fa-th-large text-xs"></i>
                <span class="truncate">Todas</span>
              </button>
              <button 
                v-for="subcategory in subcategories"
                :key="subcategory"
                @click="selectSubcategory(subcategory)"
                :class="[
                  'w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 flex items-center gap-2',
                  selectedSubcategory === subcategory 
                    ? 'bg-blue-100 text-blue-700 font-medium' 
                    : 'hover:bg-gray-50 text-gray-700'
                ]"
              >
                <i class="fas fa-tag text-xs"></i>
                <span class="truncate">{{ subcategory }}</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Filtro por precio -->
        <div class="relative">
          <button 
            @click="showPriceFilter = !showPriceFilter"
            :class="[
              'flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 min-w-[160px] justify-between',
              selectedPriceRange 
                ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/30' 
                : 'bg-white/60 text-gray-700 border border-gray-200 hover:bg-white hover:shadow-md'
            ]"
          >
            <div class="flex items-center gap-2">
              <i class="fas fa-dollar-sign text-xs"></i>
              <span class="truncate">{{ selectedPriceRange?.label || 'Rango de precio' }}</span>
            </div>
            <i :class="[
              'fas fa-chevron-down transition-transform duration-300 text-xs',
              showPriceFilter ? 'rotate-180' : ''
            ]"></i>
          </button>
          
          <div v-if="showPriceFilter" class="absolute top-full mt-2 left-0 bg-white border border-gray-200 rounded-xl shadow-2xl z-[999] min-w-[180px] overflow-hidden">
            <div class="p-1">
              <button 
                @click="selectPriceRange(null)"
                :class="[
                  'w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 flex items-center gap-2',
                  !selectedPriceRange 
                    ? 'bg-indigo-100 text-indigo-700 font-medium' 
                    : 'hover:bg-gray-50 text-gray-700'
                ]"
              >
                <i class="fas fa-infinity text-xs"></i>
                Todos los precios
              </button>
              <button 
                v-for="range in priceRanges"
                :key="range.label"
                @click="selectPriceRange(range)"
                :class="[
                  'w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 flex items-center gap-2',
                  selectedPriceRange?.label === range.label 
                    ? 'bg-indigo-100 text-indigo-700 font-medium' 
                    : 'hover:bg-gray-50 text-gray-700'
                ]"
              >
                <i class="fas fa-coins text-xs"></i>
                {{ range.label }}
              </button>
            </div>
          </div>
        </div>

        <!-- Botón limpiar filtros -->
        <button 
          v-if="selectedSubcategory || selectedPriceRange"
          @click="clearFilters"
          class="flex items-center gap-2 bg-red-50 hover:bg-red-100 border border-red-200 rounded-full px-4 py-2 text-sm font-medium text-red-700 transition-all duration-300 hover:shadow-md transform hover:scale-105"
        >
          <i class="fas fa-times-circle text-xs"></i>
          Limpiar
        </button>
      </div>
    </div>
    
    <!-- Filtros activos -->
    <div v-if="selectedSubcategory || selectedPriceRange" class="mt-3 pt-3 border-t border-gray-200">
      <div class="flex items-center gap-2 flex-wrap">
        <span class="text-xs font-medium text-gray-600">Activos:</span>
        
        <div v-if="selectedSubcategory" class="flex items-center gap-1 bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
          <i class="fas fa-tag text-xs"></i>
          <span class="truncate max-w-[80px]">{{ selectedSubcategory }}</span>
          <button @click="selectedSubcategory = null; emitFilters()" class="ml-1 hover:text-blue-800">
            <i class="fas fa-times text-xs"></i>
          </button>
        </div>
        
        <div v-if="selectedPriceRange" class="flex items-center gap-1 bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full text-xs">
          <i class="fas fa-dollar-sign text-xs"></i>
          <span class="truncate max-w-[100px]">{{ selectedPriceRange.label }}</span>
          <button @click="selectedPriceRange = null; emitFilters()" class="ml-1 hover:text-indigo-800">
            <i class="fas fa-times text-xs"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  category: String
})

const emit = defineEmits(['filter-change'])

const showSubcategories = ref(false)
const showPriceFilter = ref(false)
const selectedSubcategory = ref(null)
const selectedPriceRange = ref(null)

// Definir subcategorías por categoría masculina
const subcategoriesByCategory = {
  relojes: ['Deportivos', 'Clásicos', 'Inteligentes', 'Cronógrafos'],
  pulseras: ['Cuero', 'Acero', 'Silicona', 'Tela'],
  collares: ['Acero', 'Cuero', 'Cadenas', 'Colgantes'],
  anillos: ['Tungsteno', 'Acero', 'Plata', 'Oro'],
  billeteras: ['Cuero', 'Sintético', 'Minimalista', 'Clásica'],
  gemelos: ['Plata', 'Oro', 'Acero', 'Personalizados']
}

const priceRanges = [
  { label: 'Hasta $30.000', min: 0, max: 30000 },
  { label: '$30.000 - $50.000', min: 30000, max: 50000 },
  { label: '$50.000 - $80.000', min: 50000, max: 80000 },
  { label: 'Más de $80.000', min: 80000, max: Infinity }
]

const subcategories = computed(() => {
  return subcategoriesByCategory[props.category] || []
})

// Cerrar dropdowns al hacer clic fuera
const closeDropdowns = () => {
  showSubcategories.value = false
  showPriceFilter.value = false
}

// Funciones de selección
const selectSubcategory = (subcategory) => {
  selectedSubcategory.value = subcategory
  closeDropdowns()
  emitFilters()
}

const selectPriceRange = (range) => {
  selectedPriceRange.value = range
  closeDropdowns()
  emitFilters()
}

const clearFilters = () => {
  selectedSubcategory.value = null
  selectedPriceRange.value = null
  emitFilters()
}

const emitFilters = () => {
  const filters = {
    subcategory: selectedSubcategory.value,
    priceRange: selectedPriceRange.value
  }
  emit('filter-change', filters)
}

// Resetear filtros al cambiar de categoría
watch(() => props.category, () => {
  clearFilters()
})

// Manejar clics fuera de los dropdowns
const handleClickOutside = (event) => {
  const target = event.target
  const isInsideDropdown = target.closest('.relative')
  if (!isInsideDropdown) {
    closeDropdowns()
  }
}

// Agregar y remover event listeners
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
/* Glassmorphism effect */
.backdrop-blur-sm {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

/* Asegurar que los dropdowns aparezcan por encima */
.relative {
  position: relative;
  z-index: 500;
}

.absolute {
  position: absolute;
  z-index: 1001;
}

/* Truncate text */
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* Hover effects mejorados */
button:hover {
  transform: translateY(-1px);
}
</style>
