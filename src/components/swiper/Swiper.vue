<template>
  <div>
    <van-swipe :autoplay="3000" height="160">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default{
  props:['images'],
  data() {
    return {
     
    };
  },
  

}


</script>

<style scoped>
  img{width:100%;height: 100%;}
</style>