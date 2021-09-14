<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
  #tab-bar{
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #dcdcdc;
    box-shadow: 0 -2px 1px rgba(10, 10, 10, 0.2);
  }
</style>