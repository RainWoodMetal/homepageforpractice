<template>
    <div class="menu clearBoth">
        <Menu-Option class="option" v-for="(menuIcon, index) in menuIcons" :key="index" :iconUrl="menuIcon.url" :iconPosition="menuIcon.positon" :optionName="menuIcon.name">
        </Menu-Option>
    </div>
</template>

<script>
import MenuOption from './Menu-Option.vue'

export default {
    name:'Main-Menu',
    components:{
        MenuOption
    },
    data(){
        return{
            menuIcons:[
                {
                    url: require('../assets/menuIcon.png'),
                    positon:-120,
                    name:'首页',
                },
                {
                    url: require('../assets/menuIcon.png'),
                    positon:-192,
                    name:'视频',
                },
                {
                    url: require('../assets/menuIcon.png'),
                    positon:-48,
                    name:'热销',
                },
                {
                    url: require('../assets/menuIcon.png'),
                    positon:0,
                    name:'自选',
                },
                {
                    url: require('../assets/menuIcon.png'),
                    positon:-144,
                    name:'我的',
                },
            ],
        };
    },
}
</script>

<style scoped>
.menu{
    height: 48px;
    max-width: 640px;
    background-color: #f8f8f8;
    text-align: center;
}
.option{
    width: 20%;
}
.clearBoth::after, .clearBoth::before{
  content: "";
  display: table;
  clear: both;
}
</style>