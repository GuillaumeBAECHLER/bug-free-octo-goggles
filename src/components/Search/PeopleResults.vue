<script setup lang="ts">
import { useSearchStore } from '@/stores/search'

const search = useSearchStore()
</script>

<template>
  <div v-for="people in search.results" :key="people.name">
    <div>
      <ul>
        <li>Nom: {{ people.name }}</li>
        <li>Année de naissance: {{ people.birth_year }}</li>
        <li>Couleur des yeux: {{ people.eye_color }}</li>
        <li>Nom du homeworld: {{ people.homeworld }}</li>
      </ul>
    </div>
  </div>
</template>
