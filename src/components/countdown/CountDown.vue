<template>
  <div class="cutdown">
    <van-count-down :time="time">
      <template #default="timeData">
        <span class="block">
          {{ padStart(timeData.hours) }}
        </span>
        <span class="colon">:</span>
        <span class="block">{{ padStart(timeData.minutes) }}</span>
        <span class="colon">:</span>
        <span class="block">{{ padStart(timeData.seconds) }}</span>
      </template>
    </van-count-down>
  </div>
</template>

<script>
  export default{
    props:['time'],
    methods:{
      padStart(v){
        return v<10 ? '0'+v : v;
      }
    }
  }

</script>


<style>
  .van-count-down{
    line-height: 16px;
    margin-left: 20px;
  }
  .cutdown{display: inline-block;}
  .colon {
    display: inline-block;
    margin: 0 4px;
    color: #333;
  }
  .block {
    display: inline-block;
    width: 16px;
    color: #fff;
    font-size: 10px;
    text-align: center;
    background-color: #333;
    border-radius: 2px;
  }
</style>