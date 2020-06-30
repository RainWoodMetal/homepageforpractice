<template>
  <div>
    <main-header class="header"></main-header>
    <main-container class="container"></main-container>
    <main-menu class="menu"></main-menu>
  </div>
</template>

<script>
import MainHeader from '../components/Main-Header'
import MainContainer from '../components/Main-Container'
import MainMenu from '../components/Main-Menu'

export default {
    name: 'homepage',
    components: {
      MainHeader,
      MainContainer,
      MainMenu,
    },
    mounted(){
      //发生在什么时候，数据的加载时同步的还是异步的
      //发生在created之后，也就是说，页面已经呈现后，数据才挂载，导致子组件无法获取数据
      //this.getData();
    },
    data(){
      return{
        state: this.getData(),
      }
      
    },
    methods:{
      getData(){
        this.addDataToStore();
      },
      addDataToStore(){
        var state = require('../assets/json/state.json');
        if(state.msg=='成功')
        {
          this.$store.commit('addHomeData', state.result);
          // alert("data ready");
        }
        else{
          // alert("no data");
        }
      },
    },
    computed:{
      
    },
    watch:{
      fullWidth(val, oldVal){
        alert(val);
        alert(oldVal)
      }
    }

}
</script>

<style>
*{
    margin: 0px;
    padding: 0px;
    border: 0;
}

.container{
    position: absolute;
    top: 44px;
    bottom: 48px;
    overflow-y: scroll;
    width:100%;
    max-width: 640px;
    scrollbar-width: none;   
}
.container::-webkit-scrollbar{
    display: none;
}
.menu{
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>