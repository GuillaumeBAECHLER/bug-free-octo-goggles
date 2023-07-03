<script setup lang="ts">
import { useSearchStore } from '@/stores/search'

const search = useSearchStore()
</script>

<template>
  <div v-for="film in search.results" :key="film.name">
    <div>
      <ul>
        <li>Titre: {{ film.title }}</li>
        <li>Episode: {{ film.episode_id }}</li>
        <li>Réalisateur: {{ film.director }}</li>
        <li>Année de sortie: {{ film.release_date }}</li>
      </ul>
    </div>
  </div>
</template>
