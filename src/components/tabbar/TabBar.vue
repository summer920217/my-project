<template>
  <div>
    <van-tabbar v-model="active" 
    active-color="#F25C05" 
    inactive-color="#999" 
    route>
      <van-tabbar-item v-for="(v,i) in tabs" :key="i" :to="v.path">
        <span>{{v.text}}</span>
        <template #icon="props">
          <img :src="props.active ? v.icon.active : v.icon.inactive" />
        </template>
      </van-tabbar-item>

    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      tabs:[
        {
          text:'首页',
          icon:{
            active: require('../../assets/imgs/tabs/index-active@2x.png'),
            inactive: 'https://img01.yzcdn.cn/vant/user-inactive.png'
          },
          path:'/'
        },
        {
          text:'分类',
          icon:{
            active: require('../../assets/imgs/tabs/all-fill@2x (2).png'),
            inactive: require('../../assets/imgs/tabs/all-fill@2x.png')
          },
          path:'/category'
        },
        {
          text:'会员',
          icon:{
            active: 'https://img01.yzcdn.cn/vant/user-active.png',
            inactive: require('../../assets/imgs/tabs/vip-fill@2x.png')
          },
          path:'/vip'
        },
        {
          text:'发现',
          icon:{
            active: require('../../assets/imgs/tabs/faxian (2)@2x.png'),
            inactive: require('../../assets/imgs/tabs/faxian (1)@2x.png')
          },
          path:'/faxian'
        },
        {
          text:'我的',
          icon:{
            active: require('../../assets/imgs/tabs/wode@2x.png'),
            inactive: 'https://img01.yzcdn.cn/vant/user-inactive.png'
          },
          path:'/my'
        },
      ],
      icon: {
        active: 'https://img01.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img01.yzcdn.cn/vant/user-inactive.png',
      },
    };
  },
};

</script>