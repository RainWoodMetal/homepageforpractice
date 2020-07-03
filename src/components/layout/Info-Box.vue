<template>
  <div class="clearBoth">
      <div class="left-box">
          <slot></slot>
      </div>
      <div class="right-box">
          <slot name="InfoIcon"></slot>
          <other-info :text="infoText"></other-info>
      </div>
  </div>
</template>


<script>
import otherInfo from '../Other-Info'

export default {
  components:{
    otherInfo
  },
  props:{
    infoText: String,

  }
}
</script>

<style scoped>
.left-box{
  float: left;
}
.right-box{
  float: right;
}
.clearBoth::after, .clearBoth::before{
    content: "";
    display: table;
    clear: both;
}
</style>