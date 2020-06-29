<template>
  <div class="tipsBox clearBoth">
      <div  v-for="(tip, index) in tipsData" :key="index">
        <div class="tip splitLine" :style="'backgroundImage:url('+tip.pic+')'">
          <h3 class="tipTitle" >{{tip.tipTitle}}</h3>
          <span class="tipInfo">{{tip.tipInfo}}</span>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'Tips',
    data(){
        return{
            tipsData:[
                {
                    tipTitle:'什么是FOF基金？',
                    tipInfo:'小格带你快速入门',
                    pic: require('../assets/tipImg_1.png'),
                },
                {
                    tipTitle:'如何购买阳光私募？',
                    tipInfo:'高手教您选私募',
                    pic: require('../assets/tipImg_2.png'),
                }
            ]
        }
    },
    computed:{
        
    }
}
</script>

<style  scoped>

.tipsBox{
    background-color: #ffffff;
    text-align: left;
}
.tip{
    position: relative;
    width: calc(50% - 12px);
    padding: 16px 0 12px 12px;
    float: left;
    background-color: #ffffff;
    background-position: calc(100% - 6px) calc(100% - 6px);
    background-repeat: no-repeat;
    background-size: 50px 56px;
}

.tip1{
    background-image: url('../assets/tipImg_1.png');
}
.tip2{
    background-image: url('../assets/tipImg_2.png');
    
}
.tipTitle{
    font-size: .8rem;
    line-height: .7rem;
    margin-bottom: 12px;
    color: #36363c;
}
.tipInfo{
    display: block;
    line-height: 1;
    font-size: .7rem;
    margin-bottom: 34px;
    color: #9c9c9c;
}
.splitLine::after{
    content: "";
    display: block;
    position: absolute;
    top: 12px;
    right: 0;
    bottom: 12px;
    border-right: 1px solid #e7e7e7;
    transform: scaleX(.5);
}
.clearBoth::after, .clearBoth::before{
    content: "";
    display: table;
    clear: both;
}
</style>