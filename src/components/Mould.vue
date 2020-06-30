<template>
  <div :class="templateClass" v-if="isShow">
      <mould-header class="" v-if="mouldData.topic" :topic="mouldData.topic" :sub-topic="mouldData.sub_topic"></mould-header>
      <slot></slot>
  </div>
</template>

<script>
import MouldHeader from '../components/Mould-Header'

export default {
    name: 'mould',
    components:{
      MouldHeader,
    },
    props:{
      mouldData: Object,
    },
    computed:{
      templateClass(){
        return{
          column: this.mouldData.topic,
          clearBoth: true,
        }
      },
      isShow(){
        var result = true;

        var length = typeof(this.mouldData.contents)  == "object" ? this.mouldData.contents.length: 0;
        var section = this.mouldData.section;
        if(length<=0){
          result = false;
        }
        else if(section == "product"){
          result = false;
        }
        return result;
      }
    }
}
</script>

<style scoped>
.column{
  margin-bottom: .4rem;
  background-color: #fff;
  position: relative;
}
.clearBoth::after, .clearBoth::before{
  content: "";
  display: table;
  clear: both;
}

</style>