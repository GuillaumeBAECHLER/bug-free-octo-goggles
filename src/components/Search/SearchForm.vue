<script setup lang="ts">
import { useSearchStore } from '@/stores/search'

const search = useSearchStore()
</script>

<template>
  <div>
    <input type="radio" id="people" value="people" v-model="search.resourceType" />
    <label for="people">Personnage</label>
  </div>
  <div>
    <input type="radio" id="films" value="films" v-model="search.resourceType" />
    <label for="films">Film</label>
  </div>
  <div>
    <input type="search" placeholder="Recherche" v-model="search.searchString" />
    <button @click="search.fetchResults()">Go</button>
  </div>
</template>
