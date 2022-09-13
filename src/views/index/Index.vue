<template>
  <div>
    <!-- 1)轮播图 -->
    <Swiper :images="images"></Swiper>
    <!-- 2)图标区域 -->
    <nav-icons :nav="nav"></nav-icons>
    <!-- 3)广告位 -->
    
    <!-- 4)小广告图分栏 -->
    <Ads :ads="ads"></Ads>
    <!-- 5)限时优惠 -->

    <!-- 6)热门课程 -->
    <Item :data="hot"></Item>
    <!-- 7)精品推荐 -->
    <Item :data="hot"></Item>
  </div>
</template>

<script>
import Swiper from '../../components/swiper/Swiper.vue'
import NavIcons from '../../components/navicons/NavIcons.vue'
import Ads from '../../components/ads/Ads.vue'
import Item from '../../components/item/Item.vue'
export default{
  data(){
    return {
      //1. 轮播图
      images: [
        require('../../assets/imgs/swipe/1-1@2x.png'),
        require('../../assets/imgs/swipe/1-1@2x.png'),
      ],
      //2.导航图标
      nav:[
        {
          text:'免费试听',
          icon:require('../../assets/imgs/icons/1-1@2x.png')
        },
        {
          text:'新手入门',
          icon:require('../../assets/imgs/icons/1-2@2x.png')
        },
        {
          text:'软件基础',
          icon:require('../../assets/imgs/icons/1-3@2x.png')
        },
        {
          text:'名师课堂',
          icon:require('../../assets/imgs/icons/1-4@2x.png')
        },
        {
          text:'本周热门',
          icon:require('../../assets/imgs/icons/1-5@2x.png')
        },
        {
          text:'直播课程',
          icon:require('../../assets/imgs/icons/1-6@2x.png')
        },
        {
          text:'会员课程',
          icon:require('../../assets/imgs/icons/1-7@2x.png')
        },
        {
          text:'职业技能',
          icon:require('../../assets/imgs/icons/1-8@2x.png')
        },
        {
          text:'全勤返现',
          icon:require('../../assets/imgs/icons/1-9@2x.png')
        },
        {
          text:'设计干货',
          icon:require('../../assets/imgs/icons/1-10@2x.png')
        },
      ],
      //3.小广告图
      ads:[
        {
          img:require('../../assets/imgs/ads/1-1@2x.png')
        },
        {
          img:require('../../assets/imgs/ads/1-2@2x.png')
        }
      ],
      //4.热门课程
      hot:[
        {
          img:require('../../assets/imgs/img1@2x.png'),
          detail:'UI设计图标设计/UI界面设UI动效每日临摹临摹总监作总监...',
          price:'0.0',
          count:2.8
        },
        {
          img:require('../../assets/imgs/img2@2x.png'),
          detail:'UI设计图标设计/UI界面设UI动效每日临摹临摹总监作总监...',
          price:'998.8',
          count:2.8
        },
        {
          img:require('../../assets/imgs/img1@2x.png'),
          detail:'UI设计图标设计/UI界面设UI动效每日临摹临摹总监作总监...',
          price:'0.0',
          count:2.8
        },
        {
          img:require('../../assets/imgs/img2@2x.png'),
          detail:'UI设计图标设计/UI界面设UI动效每日临摹临摹总监作总监...',
          price:'0.0',
          count:2.8
        },
        
      ]
      
    }
  },
  components:{
    Swiper,
    NavIcons,
    Ads,
    Item
  },
  
}


</script>