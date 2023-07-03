<script setup lang="ts">
import { computed } from 'vue'
import { useSearchStore } from '@/stores/search'
import PeopleResults from './PeopleResults.vue'
import FilmsResults from './FilmsResults.vue'

const search = useSearchStore()
const resultComponent = computed(() => {
  switch (search.resourceType) {
    case 'people':
      return PeopleResults
    case 'films':
      return FilmsResults
    default:
      return null
  }
})
</script>

<template>
  <div v-if="search.resourceType">
    <component :is="resultComponent" />
  </div>
</template>
