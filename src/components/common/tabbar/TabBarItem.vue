<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot v-if="!isActive" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
    <div :style = activeStyle><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  props:{
    path: String,
    activeColor: {
      type: String,
      default: "#d4237a"
    }
  },
  data(){
    return{
      
    }
  },
  computed: {
    isActive(){
      return this.$route.path === this.path
    },
    activeStyle(){
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick(){
      this.$router.replace(this.path).catch(err=>{})
    }
  }
}
</script>

<style>
  .tab-bar-item{
    flex: 1;
    height: 49px;
    text-align: center;
    font-size: 14px;
  }
   .tab-bar-item img{
     width: 24px;
     height: 24px;
   }
   
   .active{
     color: #d4237a;
   }
</style>