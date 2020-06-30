<template>
  <div class="infoBox">
      <span class="certificate"></span>
      {{certificate}}
      <p>{{tip}}</p>
  </div>
</template>

<script>
export default {
    name: 'Page-Info',
    computed: {
        certificate:()=>{
            var result = '证监会核准基金销售机构';
            return result;
        },
        tip:()=>{
            var result = "投资有风险，入市需谨慎，最终收益以实际为准";
            return result;
        }
    }
}
</script>

<style scoped>
.certificate{
    background-image: url('../assets/certificate.png');
    background-size: cover;
    background-repeat: no-repeat;
    height: 15px;
    width: 15px;
    display: inline-block;
    vertical-align: middle;
    margin-right: 6px;
    margin-top: -2px;
}
.infoBox{
    display: block;
    text-align: center;
    height: 44px;
    padding-top: 6px;
    font-size: .5rem;
    background-color: #f3f3f3;
}
</style>