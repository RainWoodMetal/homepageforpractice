<template>
    <div class="option">
        <span class="optionIcon afterClearBoth" :style="'background-image:url(' + iconUrl +');' + 'background-position:' + iconPosition + 'px'" ></span>
        <span class="optionName">{{optionName}}</span>
    </div>
</template>

<script>
export default {
    name: "Menu-Option",
    props:{
        iconUrl: String,
        iconPosition: Number,
        optionName: String,
    },
    data(){
        return{

        }
    }
}
</script>

<style  scoped>
.optionIcon{
    height: 24px;
    width: 24px;
    display: block;
    background-size: 240px;
    margin: 6px auto 2px;
}
.optionName{
    font-size: 12px;
}
.option{
    float: left;
    height: 48px;
    overflow-y: hidden;
}
.afterClearBoth::after{
    content: "";
    display: table;
    clear: both;
}
</style>