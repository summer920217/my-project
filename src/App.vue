<template>
  <div id="app">

    <router-view />
    <!-- 底部tabbar -->
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import  Tabbar from './components/tabbar/TabBar.vue';
export default {
  components:{
    Tabbar
  }
}


</script>

<style lang="less">
@import './assets/css/comm.less';

</style>
