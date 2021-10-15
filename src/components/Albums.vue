<template>
    <div class="container mt-5">
        <div class="d-flex flex-wrap" v-if="!loader">
            <Album
            v-for="(AlbumInfo, index) in AlbumsInfo" :key="index"
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
    data(){
        return{
            APILink: 'https://flynn.boolean.careers/exercises/api/array/music',
            AlbumsInfo: [],
            loader: true,
        }
    },
    created() {
        this.getAlbumsData()
    },
    methods: {
        getAlbumsData(){
            axios
            .get(this.APILink)
            .then(reply => {
                this.AlbumsInfo = reply.data.response;
               //setTimeout(() => {
                   this.loader = false;
               //}, 5000);
            })
            .catch(err =>{
                console.log("errore nella chiamta API: ", err); // .catch è un metodo di axios e serve per intercettare gli errori che si verificano durante la chimata e tramite il console log lo andiamo a visualizzare.
            })
        }  
    },
}
</script>

<style scoped lang="scss">

</style>