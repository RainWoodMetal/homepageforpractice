<template>
  <div>
      <span class="catogory">{{text}}</span>
  </div>
</template>

<script>
export default {
    name: 'catogory',
    props: {
        text: String,
    }
}
</script>

<style scoped>
.catogory{
  color: #a97335;
  font-size: .5rem;
  padding: 2px .3rem 0px;
  position: relative;
}
.catogory::after{
  content: "";
  display: block;
  position: absolute;
  width: 200%;
  height: 200%;
  border-radius: 40px;
  border: 1px solid #a97335;
  top: 0;
  left: 0;
  box-sizing: border-box;
  transform: scale(.5);
  transform-origin: 0 0;
}
</style>