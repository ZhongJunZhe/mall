<template>
   <TabBar>
      <TabBarItem path="/home" activeColor="#d4237a">
        <img slot="item-icon" src="@/assets/img/home.svg" alt="">
        <img slot="item-icon-active" src="@/assets/img/homeColor.svg" alt="">
        <div slot="item-text">首页</div> 
      </TabBarItem>
      <TabBarItem path="/classify" activeColor="#d4237a">
        <img slot="item-icon" src="@/assets/img/classify.svg" alt="">
        <img slot="item-icon-active" src="@/assets/img/classifyColor.svg" alt="">
        <div slot="item-text">分类</div> 
      </TabBarItem>
      <TabBarItem path="/cart" activeColor="#d4237a">
        <img slot="item-icon" src="@/assets/img/cart.svg" alt="">
        <img slot="item-icon-active" src="@/assets/img/cartColor.svg" alt="">
        <div slot="item-text">购物车</div> 
      </TabBarItem>
      <TabBarItem path="/client">
        <img slot="item-icon" src="@/assets/img/client.svg" alt="">
        <img slot="item-icon-active" src="@/assets/img/clientColor.svg" alt="">
        <div slot="item-text">我的</div> 
      </TabBarItem>
    </TabBar>
</template>

<script>
import TabBar from '@/components/common/tabbar/TabBar'
import TabBarItem from '@/components/common/tabbar/TabBarItem'

export default {
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>

</style>