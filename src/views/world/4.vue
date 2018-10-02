<template>
  <div>
    <header-ring>content 可以放图片</header-ring>
    <p>（虽然“鑫三无”说了不要用图片，这不是自打脸吗……</p>
    <p><span class="content-image"/></p>
    <p>书中表示，<b>这个用法可以和 :hover 伪类配合，实现“鼠标移过时显示另一张图片”的效果。</b>在这里，鼠标移过的时候就会显示
      <ruby>黑
        <rt>fǎn</rt>
        化
        <rt>sè</rt>
      </ruby>
      版血小板。
    </p>
    <p>（顺便学习了 <b>&lt;ruby&gt;</b> 标签的使用 233</p>
    <p>但是似乎这样是改不了图片大小的，width/height 没用，爆栈网上的大佬说的 transform 属性也没用……只能用 background 来将就凑合用。所以我觉得这个用法不是很有必要学</p>
    <header-ring>counter、increment、reset</header-ring>
    <p>书中讲解了 counter 的用法，这段比较普通，是查文档就知道的用法。</p>
    <p>CSS 按照先序遍历树的方式渲染，然后渲染到 increment 就把计数器 +1。</p>
    <p>示例如下。本示例使用了 Vue 的 v-for，但数字是通过 CSS 渲染出来的。</p>
    <div class="counter-exp-reset">
      <p v-for="_ in 3">
        <span class="counter-exp">wtf？</span>
      </p>
    </div>
    <p>坑之所在：<b>必须写 counter-reset 才能正常用。</b></p>
    <header-ring>counter 显示多国语言数字</header-ring>
    <p>听说 counter 有一个 style 叫做 hiragana，我就来试试。</p>
    <div class="counter-exp-reset">
      <p v-for="_ in 3">
        <span class="counter-exp-jp">wtf？</span>
      </p>
    </div>
    <header-ring>通过 counter 实现多级列表</header-ring>
    <p>懒得学了，过于麻烦而且需要 HTML 结构的配合</p>
    <header-ring>内联元素垂直（于文字）方向 padding 不影响布局</header-ring>
    <p>比如这样：</p>
    <p><span class="vertical-padding color1">测试文字</span></p>
    <p>小问题：垂直方向 padding 会影响排版吗？</p>
    <p>据说这和 anchor 一起用的话十分方便。但是现在有各种 router 库，会影响到 anchor 的正常使用。</p>
    <header-ring>padding 百分比值总是基于包含块宽度</header-ring>
    <p>这是我这次复习的时候一直忘不掉的知识点。</p>
    <div class="free color1 middle-text">
      <div class="color2 square"/>
    </div>
    <p><del><b>TODO:</b> 这个 1 像素的空白是怎么回事？可能学了 inline-block 特性之后才知道了。</del></p>
    <p>啊，我知道了！（其实是想起来了）这是因为<b>Chrome 的浮点计算策略</b>。计算容器总 height 的时候_____，而计算 padding 的时候却____，因此有时候会出现相差 1px 的情况。这样看来，必须要用一些手段掩盖一下才能使用这个操作。</p>

    <header-ring>小测验</header-ring>
    <ol>
      <li>替换元素的三个特性是什么？</li>
      <li>&lt;button&gt; 和 &lt;input type=&quot;button&quot;/&gt; 的区别是什么？</li>
      <li>替换元素设置为 display: block 后，宽度如何计算？（参考 spec 里 width: auto 的计算）</li>
      <li>什么叫“匿名替换元素”？</li>
      <li>没有 content 的 after/before 属性无法生效，那么 content 填什么合适？</li>
      <li>使用 counter 时必写哪三个属性？</li>
    </ol>
  </div>
</template>

<style scoped>
  .show-comment::after {
    content: attr(data-comment)
  }

  .content-image::after {
    content: url(../../assets/kessyouban.png);
  }

  .content-image:hover::after {
    content: url(../../assets/kessyouban-rev.png);
  }

  .counter-exp-reset {
    counter-reset: counter-exp;
  }

  .counter-exp::before, .counter-exp-jp::before {
    content: counter(counter-exp) '. ';
    counter-increment: counter-exp;
  }

  .counter-exp-jp::before {
    content: counter(counter-exp, hiragana) '. '
  }

  .vertical-padding {
    padding: 30px 0;
  }

  .middle-text {
    text-align: center;
  }

  .square {
    display: inline-block;
    vertical-align: top;
    box-sizing: content-box;
    width: 0;
    height: 0;
    padding: 10%;
  }
</style>

<script>
  export default {}
</script>