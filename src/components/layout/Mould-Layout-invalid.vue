<template>
  <div>
      <template v-slot:title>
          <h2>test</h2>
      </template>
      <template v-slot:title="title">
          <h2>{{title}}</h2>
      </template>
      <template v-slot:summary="summary">
          <span>{{summary}}</span>
      </template>
      <template v-slot:infoLeft="category">
          新组件{{category}}
      </template>
      <template v-slot:infoRight="number">
          <span>{{number}}</span>
      </template>
  </div>
</template>

<script>
export default {
    props:{
        item: Object
    },
    computed:{
        title:function(){
            return this.item.title;
        },
        summary:function(){
            return this.item.summary;
        },
        category:function(){
            return this.item.sCatogoryName;
        },
        number:function(){
            return this.item.number;
        }
    }
}
</script>

<style>

</style>