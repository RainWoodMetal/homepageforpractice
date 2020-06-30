<template>
  <div class="mould-Container clearBoth">
    <div class="topic">
      {{topic}}
    </div>
    <div class="sub-topic">
      {{subTopic}}
    </div>
    <a class="link" href="#">
    </a>
    <div class="split-Line">
    </div>
  </div>
</template>

<script>
export default {
  name:'mouldheader',
  props:{
    topic: String,
    subTopic: String,
  }
}
</script>

<style scoped>
.mould-Container{
  position: relative;
}
.topic{
  float: left;
  font-size: .8rem;
  color: #36363c;
  display: block;
  margin-left: 12px;
  margin-right: 6px;
  line-height: 1.9rem;
  height: 1.9rem;
  font-family: PingFangSC-Medium,helvetica,Heiti SC Medium,Droid Sans Medium;
}
.split-Line::after{
  content: "";
  display: block;
  position: absolute;
  z-index: 2;
  right: 0;
  bottom: -1px;
  left: 0;
  border-bottom: 1px solid #e7e7e7;
  transform: scaleY(.5);
  transform-origin: 0 0;
}
.sub-topic{
  position: relative;
  float: left;
  font-size: .7rem;
  color: #9c9c9c;
  height: 1.9rem;
  line-height: 1.9rem;
  padding-left: 6px;
  font-family: PingFangSC-Light,helvetica,Heiti SC Light,Droid Sans Light;
}
.sub-topic::before{
  content: "";
  display: block;
  position: absolute;
  top: 12px;
  bottom: 12px;
  left: 0;
  border-left: 1px solid #9c9c9c;
  transform: scaleX(.5);
  transform-origin: 0 0;
}
.link{
  display: block;
  float: right;
  height: 1.9rem;
  width: .3rem;
  margin-right: 12px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAkBAMAAACUH2ytAAAAG1BMVEUAAADIyM7IyMzIyMzMzMzHx83MzMzIyMzHx8zALiDyAAAACHRSTlMAKujID8oFRtnLHaYAAABASURBVHhe1ZGhEQAgDAMjemC7QreoZwEMC6EYGwXpwQJQlesnJoE0xbo8bOvknaAEID+Aemh6mH3qzc7vLeJGE30RHjV1h1l+AAAAAElFTkSuQmCC);
  background-repeat: no-repeat;
  background-size: .3rem .6rem;
  background-position: 50%;
}

.clearBoth::after, .clearBoth::before{
    content: "";
    display: table;
    clear: both;
}
</style>