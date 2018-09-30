<template>
  <div>
    <header-ring>“包裹性”元素的宽度计算方式</header-ring>
    <p>包裹性元素在 width: auto 的时候会用一种神奇的方式缩小到最小。这个宽度是怎么计算出来的呢？</p>
    <p>演示如下，绿框是具包裹性的 inline-block，它的大小随父元素大小变化（请调节浏览器窗口）：</p>
    <div class="free color1">
      <div class="free color2 inline-block">
        <div class="box color3"/>
        <div class="box color4"/>
        <div class="box color5"/>
      </div>
    </div>
    <p>计算方法分成 3 种情况：</p>
    <h4>1、父元素很宽，包裹性元素内部不需要“自动换行”（Soft Wrap）</h4>
    <div class="free color1 shrink-case-1">
      <div class="free color2 inline-block">
        <div class="box color3"/>
        <div class="box color4"/>
        <div class="box color5"/>
      </div>
    </div>
    <p>此时绿框的宽度为：内部不发生自动换行时，最长的行的宽度。</p>
    <h4>2、父元素不够宽，包裹性元素内部需要“自动换行”</h4>
    <div class="free color1 shrink-case-2">
      <div class="free color2 inline-block">
        <div class="box color3"/>
        <div class="box color4"/>
        <div class="box color5"/>
      </div>
    </div>
    <p>此时绿框会贴在父元素边上（这么设计可能是方便内部元素换行同时不溢出吧</p>
    <h4>3、父元素太窄，包裹性元素内部疯狂换行都会溢出</h4>
    <div class="free color1 shrink-case-3">
      <div class="free color2 inline-block">
        <div class="box color3"/>
        <div class="box color4"/>
      </div>
    </div>
    <p>此时绿框的宽度为：内部“能换行就换行”时，最长那一行的宽度。</p>
    <p>但是，如果此时父容器内部还有别的元素会怎样？</p>
    <header-ring>包裹性元素与其它元素共存的演示</header-ring>
    <div class="free color1 more-than-one">
      <div class="box color2"/>
      <div class="free color3 inline-block">
        <div class="box color5"/>
        <div class="box color1"/>
        <div class="box color2"/>
      </div>
      <div class="box color4"/>
    </div>
    <p>依然严格遵守上述原则。（橙框是 inline-block）</p>
    <p>如果内部元素很宽的话，一个包裹性元素似乎可以占满一整行。（然后把别的元素挤下去）</p>
    <header-ring>小测验</header-ring>
    <p>我们知道 &lt;button&gt;/&lt;input&gt; 是一个 inline-block 的包裹性元素。那么，<b>什么时候按钮里的文字会换行呢？</b></p>
    <p><b>答：</b>首先 &lt;input&gt; 的按钮不会换行。然后，根据规则 2，在文字长度比按钮的父元素宽的时候。</p>
    <header-ring>垂直方向上的 auto</header-ring>
    <p>标准明确规定：垂直方向上的 margin 的 auto 值为 0。</p>
    <del><b>（这就是大佬敢写 margin: auto 而菜鸡只会写 margin: 0 auto 的原因。读了标准真的可以为所欲为</b></del>
  </div>
</template>

<style scoped>
  .shrink-case-1 {
    width: 750px;
  }

  .shrink-case-2 {
    width: 500px;
  }

  .shrink-case-3 {
    width: 160px;
  }

  .inline-block {
    display: inline-block;
  }
</style>