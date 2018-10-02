<template>
  <div>
    <header-ring>attr() &amp; content</header-ring>
    <p>attr() 是一个 CSS 2 就支持的属性，配合 content 十分好用。</p>
    <p>比如：</p>
    <div class="box color1">
      <span data-comment="这是个 span" class="show-comment"/>
    </div>
    <header-ring>:invalid 伪类</header-ring>
    <p>这个伪类用于选择未通过验证的表单元素（比如，没填的文本框）。</p>
    <p>示例如下，删掉几个数字试试：</p>
    <p><span>请输入手机号：</span><input class="validate" pattern="\+?\d{11,15}" required value="13800138000"/></p>
    <header-ring>:empty 伪类</header-ring>
    <p>这个伪类选择叶子节点。</p>
    <div class="box color1" />
  </div>
</template>

<style scoped>
  .show-comment::after {
    content: attr(data-comment)
  }

  input.validate:invalid {
    background: #dcc0be;
  }

  div.box:empty::after {
    content: '空的 <div>'
  }
</style>

<script>
  export default {
  }
</script>