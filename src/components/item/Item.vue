<template>
  <div class="mt24">
    <!-- 标题栏 -->
    <van-row type="flex" justify="space-between" class="TIT" align="center">
      <van-col span="16" class="title">
        <span class="line"></span>
        <span class="txt">热门课程</span>  
        <!-- <count-down :time="time"></count-down> -->
      </van-col>
      <van-col span="6" class="more">查看更多</van-col>
    </van-row>
    <!-- 图文区 -->
    <van-row type="flex" justify="space-between" gutter="10">
      <van-col span="12" v-for="(v,i) in data" :key="i" >
        <div class="item">
          <img :src="v.img" width="100%">
          <div class="detail">
            <p>{{v.detail}}</p>
            <van-row type="flex" justify="space-between" class="info">
              <van-col :class="{price,current:i<2}">
                {{ price(v.price) }}
              </van-col>
              <van-col class="count">已有{{v.count}}w人学习</van-col>
            </van-row>
          </div>
        </div>
      </van-col>
    </van-row>


  </div>
</template>

<script>
  // import CountDown from '../../components/countdown/CountDown.vue'
  export default{
    props:['data'],
    data(){
      return {
        time: 30 * 60 * 60 * 1000,
      }
    },
    methods: {
      price(v){
        return v < 0 ? '免费' : '￥'+v
      }
    },
    components:{
      // CountDown
    }
  }
</script>


<style lang="less">
  .TIT{
    .title{
      display: flex;
      align-items: center;
      margin-bottom: 11.5px;
      .line{
        width: 2px;
        height: 14px;
        display: inline-block;
        background: #333;
        margin-right: 2px;
        border:1px;
      }
      .txt{
        font-size: 16px;
        font-weight: bold;
      }
    }
    .more{
      text-align: right;
      color: #999;
    }
  }
  .item{
    margin-bottom: 8px;
    background: #fff;
    border-radius: 8px;
    overflow: hidden;
    .detail{
      padding:8px;
      
      .info{
        margin-top:10px;
        .price{
        }
        .current{
          color:#F25C05;
        } 
        .count{color: #999;}
      }
    }
  }
  
</style>