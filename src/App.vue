<template>
  <div id="app">
    <aside>
      <el-menu class="min-height-full" background-color="#fdfdfd"
               active-text-color="#285794" :router="true"
               default-active="/helloworld">
        <el-menu-item index="/helloworld">
          HelloWorld
        </el-menu-item>
        <el-submenu index="spec">
          <template slot="title">标准</template>
          <el-menu-item index="/spec-10">
            第 10 章
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </aside>
    <content>
      <div>
        <router-view/>
      </div>
    </content>
  </div>
</template>

<style scoped>
  #app {
    display: flex;
    align-items: stretch;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    font-family: "Microsoft YaHei UI", "STHeiti", "Segoe UI",
    "PingFang SC", sans-serif;
  }

  #app > * {
    overflow-x: hidden;
    overflow-y: auto;
  }

  aside {
    flex: 0 0 320px;
  }

  content {
    flex: 1 0 0;
    color: #58576f;
  }

  @media (max-width: 800px) {
    aside {
      display: none;
    }

    content {
      flex: 1 0 0;
      color: #58576f;
    }
  }

  content > div {
    margin: 50px 75px;
  }

  .min-height-full {
    min-height: 100%;
  }
</style>

<style>
  .box {
    box-sizing: border-box;
    border: 3px solid black;
    display: inline-block;
    overflow: hidden;
    vertical-align: top;
    width: 200px;
    height: 200px;
  }

  .free {
    box-sizing: border-box;
    min-height: 6px;
    border: 3px solid black;
  }

  .color1 {
    color: #b2daff;
    border-color: #b2daff;
  }

  .color2 {
    color: #a7efb6;
    border-color: #a7efb6;
  }

  .color3 {
    color: #ffd7ad;
    border-color: #ffd7ad;
  }

  .color4 {
    color: #ffadad;
    border-color: #ffadad;
  }

  .color5 {
    color: #fac2f4;
    border-color: #fac2f4;
  }

  h4 {
    color: #526176;
    margin-top: 40px;
  }

  a, a:visited {
    color: #42b983;
  }
</style>

<script>
  export default {
    mounted() {
      this.$router.push('/helloworld')
    }
  }
</script>