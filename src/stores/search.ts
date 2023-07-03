import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import swapi from '@/api/swapi'

export const useSearchStore = defineStore('search', () => {
  const resourceType = ref('')
  const searchString = ref('')
  const results = ref([])

  const fetchResults = async () => {
    const response = await swapi.search(resourceType.value)(searchString.value)
    results.value = response.results
  }

  watch(resourceType, () => {
    searchString.value = ''
    results.value = []
  })

  return { resourceType, searchString, results, fetchResults }
})
