<template>
  <div class="mould-layout">
    <div class="main-box clearBoth">
      <div class="img-box">
        <img class="pic" :src="item.pic" alt="">
      </div>
      <div class="text-box">
        <div class="title-box">
          <h2 class="title">{{title}}</h2>
        </div>
        <div class="summary-box">
          <span class="summary">{{summary}}</span>
        </div>
      </div>
    </div>
    <info-box class="info-box" :infoText="otherInfo">
      <catogory :text="catogory"></catogory>
    </info-box>
  </div>
</template>

<script>
import Catogory from '../Catogory'
import InfoBox from './Info-Box'

export default {
  name: 'mouldLayout2',
  components:{
    Catogory,
    InfoBox
  },
  props:{
    item: Object,
  },
  computed:{
    title(){
      return this.item.title;
    },
    summary(){
      return this.item.summary;
    },
    catogory(){
      return this.item.sCatogoryName;
    },
    otherInfo(){
      return this.item.publish_date + "";
    }
  }
}

</script>

<style scoped>
.pic{
  width: 100%;
  height: 100%;
}
.title{
  font-size: .8rem;
  color: #36363c;
  margin-bottom: 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  line-height: .9rem;
  font-family: PingFangSC-Regular,helvetica,Heiti SC Regular,Droid Sans Regular;
}
.summary{
  font-size: .7rem;
  height: 1.8rem;
  line-height: 1.3;
  color: #505050;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  margin-bottom: 8px;
  overflow: hidden;
}

.img-box{
  float: left;
  width: 3.5rem;
  height: 4.3rem;
  margin: 4px 0;
  margin-right: .4rem;
}
.text-box{
  float: left;
  width: calc(100% - 3.9rem);
  position: relative;
}
.info-box{
  margin-top: 8px;
}
.clearBoth::after, .clearBoth::before{
    content: "";
    display: table;
    clear: both;
}
</style>