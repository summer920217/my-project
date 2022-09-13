<template>
  <div class="navicons">
    <van-grid :gutter="0" :column-num="5" :icon-size="40" 
    :border="false">
      <van-grid-item v-for="(v,i) in nav" :key="i" 
      :icon="v.icon" :text="v.text" />
    </van-grid>
  </div>
</template>

<script>
export default {
  props:['nav'],
  data(){
    return {
      
    }
  }
}


</script>

<style>
  .navicons{
    margin-top: 14px;
  }
  .van-grid-item__content{
    padding:0;
    padding-top:10px;
    background: none;
  }
</style>