<template>
  <div class="mould-layout">
    <div class="main-box">
      <div class="img-box">
        <img :src="item.pic" alt="">
      </div>
      <div>
        <h2 :class="{title:!isSub, 'sub-title': isSub}">{{title}}</h2>
      </div>
    </div>

    <info-box class="info-box" :infoText="otherInfo">
      <catogory :text="catogory"></catogory>
      <template v-slot:InfoIcon>
        <div class="info-icon"></div>
      </template>
    </info-box>
  </div>
</template>

<script>
import Catogory from '../Catogory'
import InfoBox from './Info-Box'

export default {
  name: 'mouldLayout4',
  components:{
    Catogory,
    InfoBox
  },
  props:{
    item: Object,
    isSub: Boolean,
  },
  computed:{
    title(){
      return this.item.title;
    },
    topic(){
      return this.item.topic;
    },
    summary(){
      return this.item.summary;
    },
    catogory(){
      return this.item.sCatogoryName;
    },
    otherInfo(){
      return this.item.scanTimes+ " " + this.numMeaning();
    },
  },
  methods:{
    numMeaning(){
      var result = "";
      if(this.isSub){
        result = "观看";
      }
      else{
        result = "报名";
      }
      return result;
    }
  }
}

</script>

<style scoped>
.title{
  color: #36363c;
  font-size: .8rem;
  width: 100%;
  overflow: hidden;
  line-height: 1.2;
  margin-top: 18px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.sub-title{
  color: #36363c;
  font-size: .7rem;
  width: 100%;
  overflow: hidden;
  line-height: 0.7rem;
  margin-top: 18px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.summary{
  font-size: .7rem;
  /* height: 1.8rem; */
  line-height: 1.3;
  color: #505050;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  margin-bottom: 8px;
  overflow: hidden;
}
.info-icon{
    font-size: .6rem;
    color: #9c9c9c;
    line-height: 1;
    background-image: url('https://mobile.licai.com/licai/static/img/c684d3b.png') ;
    background-repeat: no-repeat;
    background-size: .5rem .5rem;
    background-position: 0 50%;
    display: inline-block;
    width: .5rem;
    height: .5rem;
}

.img-box{
  width: 100%;
  margin-bottom: -3px;
}
.info-box{
  margin-top: 12px;
}
.info-box .left-box{
  float: left;
}
.info-box .right-box{
  float: right;
}
.clearBoth::after, .clearBoth::before{
  content: "";
  display: table;
  clear: both;
}
</style>