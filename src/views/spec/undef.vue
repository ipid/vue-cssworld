<template>
  <div>
    <header-ring>包含块大小不定时 margin / padding 为百分值</header-ring>
    <p>CSS 标准第 8 章中规定，margin / padding 的百分值是根据包含块的宽度来计算的。</p>
    <p>如果包含块的宽度取决于当前元素<b>（比如：父元素是 inline-block）</b>，而当前元素 margin / padding 的值是百分比，那么就会产生死循环：包含块的宽度需要根据 margin-box 计算，而 margin 的值又取决于包含块的宽度。因此，标准规定这种情况下 margin / padding 的计算值是未定义的。</p>
    <p>示例如下，内绿框为固定大小的 inline-block，有 10% margin；外蓝框是未指定大小的 inline-block。</p>
    <div class="free color1 shrink">
      <div class="box color2 percent-margin" />
    </div>
    <p><del>上面的东西在不同浏览器下看起来应该不同吧。Chrome 十分鬼畜，搞不懂这个大小怎么算出来的……</del></p>
    <p>惊了，主流浏览器里竟然都长一样</p>
    <p>似乎是直接把 margin 值当做 0 来计算包含块宽度了。计算出包含块宽度之后，用它算 margin 百分比。然后这样显然就会溢出（逃</p>

    <header-ring>&lt;table&gt; 内 tag 的 position: relative</header-ring>
    <p>标准第 9 章规定，display 为 table-row、table-cell 等的元素，设为 position: relative 时布局是未定义的。</p>
    <p>（我并不想设置相对位置，只是想搞个 absolute 子元素，怎么办？）</p>
    <div class="box color1">
      <div class="free color2 table-cell"/>
    </div>
    <p>似乎并没有什么鬼畜效果……</p>
  </div>
</template>

<style scoped>
  .percent-margin {
    margin: 10%;
  }

  .table-cell {
    display: table-cell;
    position: relative;
    width: 10px;
    height: 10px;
  }
</style>