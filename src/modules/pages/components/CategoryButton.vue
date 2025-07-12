<template>
  <button :class="[
    'filter-btn w-full font-medium py-2 px-4 rounded transition',
    active ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700',
    'hover:bg-purple-600 hover:text-white'
  ]" @click="$emit('select', filter)">
    <slot />
  </button>
</template>
<script setup>
const props = defineProps({
  filter: { type: String, required: true },
  active: { type: Boolean, default: false }
})
</script>
