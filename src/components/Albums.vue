<template>
    <div class="container mt-5">
        <div class="d-flex flex-wrap" v-if="!loader">
            <Album
            v-for="(AlbumInfo, index) in FiltredAlbumList" :key="index"
            :data="AlbumInfo"
            />
        </div>

        <div v-else>
            <Loader />
        </div>
    </div>
</template>

<script>
import axios from "axios";
import Album from "./subComponents/Album.vue";
import Loader from "./subComponents/Loader.vue";

export default {
    name: 'Albums',
    components: {
    Album,
    Loader,
    },
    props:{
        selectedGenre: String,
    },
    data(){
        return{
            APILink: 'https://flynn.boolean.careers/exercises/api/array/music',
            AlbumsInfo: [],
            loader: true,
            genres: [],
            // searchText: '',
        }
    },
    created() {
        this.getAlbumsData()
    },
    computed: {

        // Esempio di computed properties legato all'esempio con il componente Search con input text,  per essere completo mancherebbe  aggiungere la computed property (in questo caso: FilteredAlbumList) dove necessitiamo di usarla come variabile in questo caso nel ciclo for degli "albums"
        // La pecurialità delle computed properties è quella di essere una variabile dinamica e che ci fa risparmiare energia computazionale perchè se non varia non esegue la "funzione" quindi allgerisce i processi.

        // FilteredAlbumList(){
        //     if (this.searchText === ""){
        //         return this.AlbumsInfo;
        //     }

        //     let filteredList = this.AlbumsInfo.filter( item =>{
        //         return item.title
        //                     .toLowerCase()
        //                     .includes(this.searchText.toLowerCase())
        //     })
        //     return filteredList;
        // } 

        FiltredAlbumList(){
            if(this.selectedGenre === ''){
                return this.AlbumsInfo
            } else {
                return this.AlbumsInfo.filter((item) => item.genre === this.selectedGenre);
            }
        }

    },
    methods: {
        getAlbumsData(){
            axios
            .get(this.APILink)
            .then(reply => {
                this.AlbumsInfo = reply.data.response;
               //setTimeout(() => {  // setTime Out impostato per permetterci di visualizzare con più calma il componente Loader 
                   this.loader = false;
               //}, 5000);
                
                // usando il ciclo foreach vado a ciclare su ogni album e vado a pushare nell'array genres il genere se non è già presente
                this.AlbumsInfo.forEach((album) => {
                    if (!this.genres.includes(album.genre)){
                        this.genres.push(album.genre);
                    }
                });

                //ora con l'emit trasmetto a App.vue i generi contenuti nell' array genres con l'eventi genresReady presnte in app.vue

                this.$emit("genresReady", this.genres)

            })
            .catch(err =>{
                console.log("errore nella chiamta API: ", err); // .catch è un metodo di axios e serve per intercettare gli errori che si verificano durante la chimata e tramite il console log lo andiamo a visualizzare.
            })
        },
    },
}
</script>

<style scoped lang="scss">

</style>