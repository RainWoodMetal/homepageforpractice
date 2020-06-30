<template>
  <span class="info">
      {{text}}
      <slot></slot>
  </span>
</template>

<script>
export default {
    name: 'otherInfo',
    props:{
        text: String,
    }
}
</script>

<style scoped>
.info{
  font-size: .6rem;
  padding: 1px 0;
  color: #9c9c9c;
  font-family: PingFangSC-Light,helvetica,Heiti SC Light,Droid Sans Light;
}    
</style>