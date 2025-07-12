<template>
  <div>
    <ProductFilters :category="category" @filter-change="handleFilterChange" />
    <ProductList :category="category" :filters="activeFilters" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProductFilters from './ProductFilters.vue'
import ProductList from './ProductList.vue'

const props = defineProps({ 
  category: String 
})

const activeFilters = ref({})

const handleFilterChange = (filters) => {
  console.log('Filtros recibidos en ProductCategorySection:', filters) // Debug log
  activeFilters.value = filters
}
</script>
