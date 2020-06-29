// 列布局
<template>
  <div class="testtesttest">
      <div v-if="containerSelect(m.section) !='fof'">
        <slot></slot>
      </div>
      <fof-content v-else-if="containerSelect(m.section) =='fof'" :itemsCount="m.contents.length">
        <slot></slot>
      </fof-content>
  </div>
</template>

<script>
export default {
    name: 'columnLayout',
    props: {
        m: Object,
    },
    methods:{
      containerSelect(section){
        var result = "col";
        if(this.isFof(section))
        {
            result = "fof";
        }
        else if(section=="study")
        {
            result = "";
        }
        return result;
      },
    }
}
</script>

<style>

</style>