<template>
  <scroller :lock-y=true>
      <div ref="container" class="fof-container clearBoth" :style="{width: 'calc((6.55rem + 36px) * '+ itemsCount +')'}">
          <slot></slot>
      </div>
  </scroller>
</template>

<script>
import {Scroller} from 'vux'

export default {
    name:'fof-content',
    components: {
        Scroller,
    },
    props:{
        itemsCount: Number,
    },
    
}
</script>

<style>
.fof-container{
    padding:12px 12px 22px;
    /* width:calc((6.55rem + 36px) * 3) */
}
.clearBoth::after, .clearBoth::before{
    content: "";
    display: table;
    clear: both;
}
</style>