<template>
  <div>
    <div>
      <header-ring>这是个啥玩意？</header-ring>
      <p>见 <a href="https://github.com/ipid/vue-cssworld/blob/master/README.md">README.md</a>。</p>
      <header-ring>《CSS 世界》和 CSS 2.1 Spec 是什么？</header-ring>
      <p>
        《CSS 世界》：
        <a href="https://www.epubit.com/book/detail/2983">https://www.epubit.com/book/detail/2983</a>
      </p>
      <p>CSS 2.1 Spec（中文里我叫它“标准”）：</p>
      <p>中译版：<b>（！不安全的 HTTP 网站）</b><a href="http://www.ayqy.net/doc/css2-1/cover.html">http://www.ayqy.net/doc/css2-1/cover.html</a></p>
      <p>英文原版：<a href="https://www.w3.org/TR/2011/REC-CSS2-20110607/">https://www.w3.org/TR/2011/REC-CSS2-20110607/</a></p>
    </div>
  </div>
</template>

<style scoped>
  .shrink-to-fit {
    display: inline-block;
  }
</style>

<script>
  export default {
    methods: {
      fuck() {
        alert("fuck!")
      }
    }
  }
</script>