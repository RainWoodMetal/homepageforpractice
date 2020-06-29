<template>
  <div :class="conLayout">
      <mould-layout-1 v-if="layout=='layout1'" :item="itemData" :itemIndex="itemIndex" :isSub="isSub">
      </mould-layout-1>
      <mould-layout-2 v-else-if="layout=='layout2'" :item="itemData" :itemIndex="itemIndex" :isSub="isSub">
      </mould-layout-2>
      <mould-layout-3 v-else-if="layout=='layout3'" :item="itemData" :itemIndex="itemIndex" :isSub="isSub">
      </mould-layout-3>
      <mould-layout-4 v-else-if="layout=='layout4'" :item="itemData" :itemIndex="itemIndex" :isSub="isSub">
      </mould-layout-4>
      <mould-layout-5 v-else-if="layout=='layout5'" :item="itemData" :itemIndex="itemIndex" :isSub="isSub">
      </mould-layout-5>
  </div>
</template>

<script>
import MouldLayout1 from './layout/Mould-Layout-1'
import MouldLayout2 from './layout/Mould-Layout-2'
import MouldLayout3 from './layout/Mould-Layout-3'
import MouldLayout4 from './layout/Mould-layout-4'
import MouldLayout5 from './layout/Mould-layout-5'

export default {
    name: 'mouldContent',
    components:{
        MouldLayout1,
        MouldLayout2,
        MouldLayout3,
        MouldLayout4,
        MouldLayout5
    },
    props:{
        itemData: Object,
        layout: String,
        section: String,
        itemIndex: Number
    },
    computed:{
        isSub(){
            var result = false;
            var index = this.itemIndex;
            if(index > 0){
                result = true;
            }
            return result;
        },
        conLayout(){
            return{
                con: this.layout &&!(this.isSub && this.layout=='layout4') && this.layout!='layout5',
                'con-sub': this.isSub && this.layout=='layout4',
            }
        }
    }
    
}
</script>

<style scoped>
.con{
  padding: 12px;
  text-align: left;
  position: relative;
}
.con:not(:last-child)::after{
  content: "";
  display: block;
  position: absolute;
  z-index: 2;
  right: 12px;
  bottom: -1px;
  left: 12px;
  border-bottom: 1px solid #e7e7e7;
  transform: scaleY(.5);
  transform-origin: 0 0;
}

.con-sub{
  padding: 12px;
  text-align: left;
  position: relative;

  width: calc(50% - 24px);
  float: left;
}
.clearBoth::after, .clearBoth::before{
  content: "";
  display: table;
  clear: both;
}
</style>