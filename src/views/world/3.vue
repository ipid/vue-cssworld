<template>
  <div>
    <header-ring>display: inline-table 的特性</header-ring>
    <div>
      和文字平起平坐？？
      <div class="free color1 inline-table">
        <div class="free color2"/>
        <div class="free color3"/>
      </div>
    </div>
    <p>之所以这样是因为 inline-table 外盒子为 inline，内盒子（容器盒）为 table，所以同时具有不换行和表格的特性。</p>
    <header-ring>文字动态居中/居左</header-ring>
    <p>实现如下需求：文字少的时候居中，文字多的时候居左。</p>
    <div>
      <div class="free color1 one-line">
        <p class="free color4 wrapping-block">
          {{ autoMidLeftText }}
        </p>
      </div>
      &nbsp;
      <el-button type="primary" @click="autoMidLeftAddText">增加文字</el-button>
    </div>
    <p>注意绯红色包裹块里的文字一直是左对齐的。</p>
    <p>（什么，你问我<b>绯红块是怎么垂直居中的</b>？很简单，因为它周围的空白都是它自己产生的（而不是父元素的），只要设个上下一样的 margin 就能垂直居中（逃</p>
    <p>
      为什么短的时候不换行，长的时候就换行了？原理详见
      <router-link to="/spec/10">第 10 章</router-link>
      。
    </p>
    <header-ring>画“凹”“凸”字</header-ring>
    <div>
      <div class="zero-width">
        <span class="ao">loveab<br/>爱我<br/>loveab</span>
      </div>
      <div class="zero-width">
        <span class="ao">爱<br/>love<br/>爱</span>
      </div>
      <div class="zero-width r-align">
        <span class="ao">爱<br/>love<br/>爱</span>
      </div>
    </div>
    <p>原来向左的“凸”字要用 direction: rtl 才能完成啊！</p>
    <p>关键点：父元素零宽，利用包裹性。</p>
    <header-ring>什么时候 height: &lt;percentage&gt; 是有效的？</header-ring>
    <p>一言以蔽之：</p>
    <p>1、当其父元素高度不为 auto 时。这点比较显然，不做示例了。</p>
    <p>2、当 position 为 absolute 时。</p>
    <div>
      <div class="free color1 rel wrapping-block">
        <div class="bar back"/>
        <div class="free color2 abs-left"/>
        <div class="free color3 abs-right"/>
      </div>
    </div>
    <p>上面这个有较暗背景的框可以认为是宽高不确定的。但是，仍然可以通过绝对定位来将它分为两半。</p>
    <p>通过这种方法，可以在一张大小不定的图片上方便地搞出左右按钮。</p>
    <header-ring>不设置 width，只设置 min/max</header-ring>
    <p>虽然这个点比较基础，但是我用不熟练。</p>
    <div class="free color1 minmax"/>
    <header-ring>
      <del>原地脱离文档流</del>
    </header-ring>
    <p>
      <del>当元素设置了 position: absolute 但是 左/上/右/下 都没设（即 auto）的时候，这个元素就会脱离文档流，但位置仍在原地不动。</del>
    </p>
    <p>尴尬了，这个布局并不正确，不学了_(:з」∠)_</p>
    <header-ring>min/max 与原属性的互相覆盖</header-ring>
    <p>以 width 为例，这几个属性冲突时，优先级：width < max-width < min-width</p>
    <div>
      <div class="box color1 max-lt-width">
        <p>原宽度：200px</p>
        <p><b>设置最大：150px</b></p>
        <p>实际：150px</p>
      </div>
      <div class="box color4 min-lt-max">
        <p>原宽度：200px</p>
        <p>设置最大：150px</p>
        <p><b>设置最小：250px</b></p>
        <p>实际：250px</p>
      </div>
    </div>
    <p>height 同理。注意这里的“覆盖”并不会导致裁剪，只是会影响 width 计算值。</p>
    <header-ring>用 max-width 实现不定高容器的展开/收起</header-ring>
    <p>CSS 3 中 height: auto 与 0 之间并没有动画，这让展开/收起动画难以实现。但是容器有时候高度未知，必须使用 height: auto，所以使用 max-height 来控制不定高元素的高度。</p>
    <p>
      <el-button @click="switchExpandCheckbox">
        <template v-if="isExpandCheckbox"><i class="el-icon-arrow-up"/> 收起</template>
        <template v-else><i class="el-icon-arrow-down"/> 展开</template>
      </el-button>
    </p>
    <input class="expand-checkbox" type="checkbox"
           style="display: none" v-model="isExpandCheckbox"/>
    <div class="free color1 exp-foldable">
      <div class="box color2"/>
      <div class="box color3"/>
      <div class="box color4"/>
    </div>
    <p>这种方法的缺点非常明显：收起动画有延迟。这是因为 max-height 的值过大，导致收回来的时候需要一定时间。</p>
    <p>解决方法：</p>
    <p>1、动画快一点掩盖掉？</p>
    <p>2、（猜）展开动画结束后测算一下实际 height 值，将其作为 max-height 的值。</p>
    <header-ring>幽灵空白节点（Strut）</header-ring>
    <p>每个 inline 盒子（也就是包括 inline-block 元素）前面都会有一个零宽的字符（可以这么理解）。</p>
    <p>如下所示：</p>
    <div class="free color1"><div class="dot-inline-block"/></div>
    <p>上面那个 &lt;div&gt; 里面只有一个宽高为 0 的 inline-block，竟然就这么高，这当然是幽灵空白节点的功劳。</p>
    <header-ring>小测验（选中可看答案）</header-ring>
    <ol>
      <li>如何搞出一排按钮，让它们排在和文字同一行？<span class="hide-text">（提示：表格，cell）</span></li>
      <li>如何让文字动态居中/居左？</li>
      <li>小地方如何方便地垂直居中？<span class="hide-text">（父元素没有空白，需居中的元素创造出相同的上下空白）</span></li>
      <li>用内联元素父子配合画形状，需要用到哪三个属性？<span class="hide-text">（direction，outline，width）</span></li>
      <li>原属性、min、max 的优先级？</li>
      <li>如何改变不定高元素的高度？<span class="hide-text">（max-height）</span></li>
    </ol>
  </div>
</template>

<style scoped>
  .inline-table {
    width: 40px;
    height: 20px;
    display: inline-table;
    vertical-align: middle;
  }

  .inline-table > div {
    display: table-cell;
  }

  .one-line {
    display: inline-block;
    width: 200px;
    text-align: center;
  }

  .wrapping-block {
    display: inline-block;
    vertical-align: middle;
    text-align: left;
  }

  .middle-inside {
    text-align: center;
  }

  .ao {
    outline: 2px solid #e1e22c;
    white-space: nowrap;
  }

  .zero-width {
    width: 0;
    margin-right: 80px;
    display: inline-block;
  }

  .r-align {
    direction: rtl;
  }

  .rel {
    position: relative;
  }

  .back {
    background: #fffff5;
  }

  .abs-left, .abs-right {
    position: absolute;
    width: 50%;
    height: 100%;
    top: 0;
  }

  .abs-left {
    left: 0;
  }

  .abs-right {
    right: 0;
  }

  .minmax {
    min-width: 400px;
    max-width: 1200px;
  }

  .max-lt-width {
    max-width: 150px;
  }

  .min-lt-max {
    min-width: 250px;
    max-width: 150px;
  }

  .exp-foldable {
    overflow: hidden;
    transition: .5s max-height ease-in-out;
  }

  input[type='checkbox'] ~ .exp-foldable {
    max-height: 0;
  }

  input[type='checkbox']:checked ~ .exp-foldable {
    max-height: 610px;
  }

  .dot-inline-block {
    display: inline-block;
    width: 0;
    height: 0;
  }
</style>

<script>
  export default {
    data() {
      return {
        autoMidLeftText: '文字',
        isExpandCheckbox: true
      }
    },

    methods: {
      autoMidLeftAddText() {
        this.autoMidLeftText += '-新增文字'
      },
      switchExpandCheckbox() {
        this.isExpandCheckbox = !this.isExpandCheckbox
      }
    }
  }
</script>