<template>
  <h4>
    <slot/>
  </h4>
</template>

<style scoped>
  h4 {
    color: #526176;
    position: relative;
    margin-top: 50px;
    font-size: 16px;
    line-height: 16px;
  }

  h4::after {
    box-sizing: content-box;
    content: ' ';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 7px;
    border: 3px solid #fd79a1;
    position: absolute;
    left: -32px;
    top: 1px;
  }
</style>

<script>
  export default {
    name: 'HeaderRing'
  }
</script>