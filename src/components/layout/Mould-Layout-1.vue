<template>
  <div class="mould-layout">
    <div class="main-box">
      <div class="text-box">
        <div class="title-box">
          <h2 class="title">{{title}}</h2>
        </div>
        <div class="summary-box">
          <span class="summary">{{summary}}</span>
        </div>
      </div>
    </div>
    <!-- <div class="info-box clearBoth">
      <div class="left-box">
        <catogory :text="catogory"></catogory>
      </div>
      <div class="right-box">
        <other-info :text="otherInfo"></other-info>
      </div>
    </div> -->
    <info-box class="info-box" :infoText="otherInfo">
      <catogory :text="catogory"></catogory>
    </info-box>
  </div>
</template>

<script>
import Catogory from '../Catogory'
// import otherInfo from '../Other-Info'
import InfoBox from './Info-Box'

export default {
  name: 'mouldLayout1',
  components:{
    Catogory,
    // otherInfo,
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
  /* height: 1.8rem; */
  line-height: 1.3;
  color: #505050;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  margin-bottom: 8px;
  overflow: hidden;
}

.info-box{
  margin-top: 8px;
}
/* .info-box .left-box{
  float: left;
}
.info-box .right-box{
  float: right;
} */
.clearBoth::after, .clearBoth::before{
    content: "";
    display: table;
    clear: both;
}
</style>