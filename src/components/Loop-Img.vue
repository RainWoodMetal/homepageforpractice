<template>
  <div class="loopContainer">
    <mt-swipe :auto="3000">
        <mt-swipe-item  v-for="(i, index) in imgArry" :key="index">
            <img style="width:100%" :src="i.src" >
        </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui';
import "mint-ui/lib/style.css"

export default {
    name: 'loopImg',
    components:{
        mtSwipe: Swipe,
        mtSwipeItem: SwipeItem
    },
    data(){
        return{
            imgArry:[
                {
                    src:require('../assets/loopImg/00001.jpg')
                },
                {
                    src:require('../assets/loopImg/00002.jpg')
                },
                {
                    src:require('../assets/loopImg/00003.jpg')
                },
                {
                    src:require('../assets/loopImg/00004.jpg')
                },
                {
                    src:require('../assets/loopImg/00005.jpg')
                },
            ]
        }
    }
}
</script>

<style scoped>
@media screen and (max-width: 640px) {
    .loopContainer{
        height: calc(100vw * 0.5);
    }
}
@media screen and (min-width: 640px) {
    .loopContainer{
        height: 320px;
    }
}

.clearBoth::after, .clearBoth::before{
    content: "";
    display: table;
    clear: both;
}
</style>