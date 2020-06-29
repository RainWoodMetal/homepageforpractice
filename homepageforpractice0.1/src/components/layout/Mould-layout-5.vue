<template>
  <div class="mould-layout">
      <span class="type">{{type}}</span>
      <div class="title">{{title}}</div>
      <div class="con-data">
          <div class="data-data">{{data}}</div>
          <div class="data-name">{{dataName}}</div>
      </div>
      <div class="comment">{{comment}}</div>
  </div>
</template>

<script>
export default {
    name:'mouldLayout5',
    props:{
      item: Object,
    },
    computed:{
      type(){
        return this.item.investment_strategy;
      },
      title(){
        return this.item.product_name;
      },
      data(){
        return this.item.product_data[0].data;
      },
      dataName(){
        return this.item.product_data[0].name;
      },
      comment(){
        var com1 = this.item.comment_1;
        var com2 = this.item.comment_2;
        return com2?com2:com1;
      }
    }
}
</script>

<style scoped>
.mould-layout{
    width: 6.55rem;
    display: block;
    position: relative;
    text-align: center;
    border-radius: 2px;
    box-shadow: 0 2px 14px 0 #ddd;
    padding: 12px 0;
    float: left;
    margin-right: 12px;
}
.type{
    margin: 0 auto ;
    font-size: .5rem;
    color: #636363;
    position: relative;
    padding: 2px 8px 1px;
}
.type::after{
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    border: 1px solid #6b6b6b;
    width: 200%;
    height: 200%;
    border-radius: 40px;
    box-sizing: border-box;
    transform: scale(.5);
    transform-origin: left top;
}
.title{
    font-weight: normal;
    font-size: 0.7rem;
    padding: 10px 16px 12px;
    color: rgb(25, 25, 28);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.con-data{
    
}
.data-data{
    font-size: 1rem;
    height: 1rem;
    line-height: 1rem;
    padding-bottom: 6px;
    color: #BC8F50;
}
.data-name{
    padding-bottom: 12px;
    font-size: 0.6rem;
    color: #9c9c9c;
}
.comment{
    padding: 0px 16px;
    white-space: initial;
    font-size: 0.55rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    min-height: calc(1.2rem + 1px);
    text-align: center;
    font-family: PingFangSC-Light, helvetica, "Heiti SC";
}
</style>