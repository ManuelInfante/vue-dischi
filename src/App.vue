<template>
  <div id="app">
    <Header :genres="genresList" @changedGenre="startSearch"/>
    <main>
      <Albums :selectedGenre="genreToSearch" @genresReady="getGenresList"/> 
      <!-- nell'emit l'evento dell' emit passato dal componente albums deve essere scritto nel tag del componente e attribuirgli a sua volta una funzione -->
      <!-- Ovviamente la variabile passata alla funzione "getGenreList", ovvero, "allGenres" viene passata trasparentemente a noi dal componente Albums ed è proprio quel this.genres dopo l'evento che a cui puntare -->
    </main>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Albums from './components/Albums.vue'

export default {
  name: 'App',
  components: {
    Header,
    Albums,
  },
  data(){
    return{
      genresList: [],
      genreToSearch: '',
    }
  },
  methods: {
    getGenresList(allGenres){
      this.genresList = allGenres;
    },
    startSearch(genreToSearch){
      this.genreToSearch = genreToSearch;
    }
  }
}
</script>

<style lang="scss">
@import "style/general"

</style>
