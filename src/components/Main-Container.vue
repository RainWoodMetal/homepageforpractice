<template>
  <div style="background-color:#f3f3f3">
      <loop-image></loop-image>
      <function-menu :functions="functions">
          <news-list></news-list>
      </function-menu>
      <mould v-for="(m, index) in homelist" :key="index" :mouldData="m">
          <div v-if="containerSelect(m.section) !='fof'">
              <mould-content v-for="(item, index) in m.contents" :key="index" :itemData="item" :layout="layout(m.section)" :section="m.section" :itemIndex="index"></mould-content>
          </div>
          <fof-content v-else-if="containerSelect(m.section) =='fof'" :itemsCount="m.contents.length">
              <mould-content v-for="(item, index) in m.contents" :key="index" :itemData="item" :layout="layout(m.section)" :section="m.section" :itemIndex="index"></mould-content>
          </fof-content>

          <!-- <column-layout :items="m">
            <mould-content v-for="(item, index) in m.contents" :key="index" :itemData="item" :layout="layout(m.section)" :section="m.section" :itemIndex="index"></mould-content>
          </column-layout> -->
      </mould>
      <tips></tips>
      <Page-Info></Page-Info>
      
  </div>
</template>

<script>
import LoopImage from '../components/Loop-Img'
import Mould from '../components/Mould'
import MouldContent from '../components/Mould-Content'
import FofContent from '../components/FOF-Content'
import FunctionMenu from './Function-Menu'
import NewsList from './News-List'
import Tips from './Tips'
import PageInfo from './Page-Info'
// import ColumnLayout from './layout/Column-Layout'

export default {
    name:'maincontainer',
    components:{
        LoopImage,
        Mould,
        MouldContent,
        FofContent,
        FunctionMenu,
        NewsList,
        Tips,
        PageInfo,
        // ColumnLayout
    },
    data(){
        return{
        }
    },
    methods:{
        layout: function(section){
            return {
                reading: "layout1",
                research: "layout2",
                selected: "layout3",
                video: "layout4",
                FOF: "layout5",
                product: "layout6",
            }[section]
        },
        isFof(section){
            var result = false;
            if (section=="FOF") {
                result = true
            }
            return result;
        },
        containerSelect(section){
            var result = "col";
            if(this.isFof(section))
            {
                result = "fof";
            }
            else if(section=="study")
            {
                result = "";
            }
            return result;
        },

        checkdata:function(){
            var result;
            var x = this.$store.state.homedata.functions;
            if(x==undefined || x==null)
            {
                alert("data not ready");
                result = "error"+ typeof(x);
            }
            else{
                result = x;
            }
            return result;
        },
    },
    watch:{        
    },
    computed:{
        homelist() {
            return this.$store.state.homedata.homelist;
        },
        functions(){
            return this.$store.state.homedata.functions;
        }
    }
}
</script>

<style scoped>
.clearBoth::after, .clearBoth::before{
  content: "";
  display: table;
  clear: both;
}
</style>