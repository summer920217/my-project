<template>
  <div class="mt24">
    <van-row type="flex" justify="space-between" gutter="10">
      <van-col span="12" v-for="(v,i) in ads" :key="i">
        <van-image fit="contain" :src="v.img" />
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default{
  props:['ads']
}

</script>