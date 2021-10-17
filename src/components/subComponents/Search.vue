<template>

    <div>
        
    </div>

    <!-- Qui di seguito un esempio nel caso avessimo avuto un input text, è presente l'emit con il valore passato e aggiornato con il v-model e anche il .prevent, funzione interessante per i form -->

    <!-- <form class="d-flex">
        <div>
            <input type="text" 
            class="form-control"
            placeholder="Search the album"
            v-model="inputText"
            >
        </div>
        <div>
            <button type="submit" 
            class="btn btn-primary"
            @click.prevent="$emit('performSearch', inputText)"
            >

            !!  .prevent anticipa il comportamento di default (in questo caso il refresh della pagina) per impostare ciò che noi desiderassimo facesse al suo posto

                Search
            </button>
        </div>
    </form> -->
</template>

<script>
export default {
    name: "Search",
    data(){
        return{
            inputText: '',
        }
    },
    methods: {
        
    },
}
</script>

<style scoped lang="scss">
@import "../../style/general"
</style>