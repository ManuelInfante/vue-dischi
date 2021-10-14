<template>
  
</template>

<script>
export default {
    name: 'Albums',
    data(){
        return{
            APILink: 'https://flynn.boolean.careers/exercises/api/array/music',
            AlbumsInfo: [],
        }
    },
    created() {
        this.getAlbumsData()
    },
    methods: {
      getAlbumsData(){
          axios
          .get(this.APILink)
          .then
      }  
    },
}
</script>

<style scoped lang="scss">

</style>