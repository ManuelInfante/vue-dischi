<template>
    <div class="album p-3 text-center">
        <div class="img-container">
            <img :src="data.poster" alt="">
        </div>
        <h2>
            {{data.title}}
        </h2>
        <span>
            {{data.author}}
        </span>
    </div>
</template>

<script>
export default {
    name: 'Album',
    props:[
        'data',
    ]
}
</script>

<style scoped lang="scss">
@import "../../style/general";

.album{
    flex-basis: calc((100% / 5) - 20px);
    background-color: $lightblue;
    margin: 10px;

    .img-container{
        width: 100%;

        img{
            width: 100%;
        }
    }

    h2{
        margin-top: 20px;
        font-size: 1.1rem;
        font-weight: 700;
        color: white;
        text-transform: uppercase;
    }

    span{
        color: rgb(173, 173, 173);
        font-size: 1rem;
    }

}
</style>