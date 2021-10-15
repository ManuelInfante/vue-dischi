<template>
  <div class="header-container d-flex justify-content-between">
    <div class="logo d-flex align-items-center px-3">
      <img src="../assets/img/logo.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>


<style scoped lang="scss">
@import "../style/general";

.header-container{
  text-align: left;
  height: 50px;
  background-color: $lightblue;

  .logo{
    height: 100%;

    img{
      height: 80%;
    }
  }
}
</style>
