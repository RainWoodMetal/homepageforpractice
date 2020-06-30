<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  data(){
    return{
      screenWidth: '',
    }
  },
  mounted(){
    this.screenWidth = document.body.clientWidth;
    // this.screenHeight = document.body.clientHeight;
    window.onresize = () => {
      return (() => {
        this.screenWidth = document.body.clientWidth;
        // this.screenHeight = document.body.clientHeight;
      })();
    };
  },
  methods:{
    pageFontSize(){
      var result = 25.6;
      var w = this.screenWidth;
      if(w < 640)
      {
        result = w * 0.04;
      }
      return result
    }
  },
  watch:{
    screenWidth(){
      var size = this.pageFontSize();
      var html = document.getElementsByTagName("html")[0];
      html.style.fontSize = size + "px";
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#app{
    max-width: 640px;
    overflow-x: hidden;
    margin: auto;
    background-color: white;
    background-repeat:no-repeat;
}
h1,h2,h3,h4,h5,h6{
    font-size: 100%;
    font-weight: 400;
}
a{
  text-decoration: none;
}
body{
  background-color: #f3f3f3;
  font-size: 14px;
}
img{
  height: 100%;
  width: 100%;
}
</style>
