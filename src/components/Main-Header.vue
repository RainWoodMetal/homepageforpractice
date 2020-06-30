<template>
    <div class="header">
        <transition-group name="toggle">
            <div key="1" style="min-width:28px; display:inline-block">
                <img  @click="overSearch" v-if="searchState" class="homeIcon" src="../assets/homeIcon.png" alt="">
                <img  v-else class="logo" src="../assets/pageLogo.png" alt="格上财富">
            </div>
            <form key="2" id="search">
                <input v-model="searchText" :placeholder="placeholder" @click="onSearch" :class=" {searchInput: !searchState, onSearchInput: searchState}"/>
            </form>
        </transition-group>
        <span @click="overSearch" v-show="searchState" class="closeSearch">取消</span>
        <div v-if="searchState" id="mask">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "mainHeader",
    data: function (){
        return {
            searchState: false,
            placeholder: '查净值/产品/经理/公司',
            searchText: '',
            // searchKeyCache: '',
        }
    },
    computed:{
        onSearchStyle(){
            var result;
            if(this.searchState)
            {
                result = {
                    // 'padding-left': '30px',
                    // width: 'calc(100% - 20px)',
                };
            }
            return result;            
        }
    },
    methods: {
        onSearch: function(){
            this.searchState = true;
        },
        overSearch: function(){
            this.searchState = false;
            this.searchText = "";
        }
    }
}
</script>
<style scoped>
.header{
    font-size: 0;
    height: 44px;
    line-height: 44px;
    text-align: left;
    padding: 0 12px;
    overflow-x:hidden;
    white-space:nowrap
}
.homeIcon, .logo{
    display: inline-block;
    vertical-align: middle;
    width: 28px;
    height: 28px;
}
.logo{
    width: 72px;
    height: 18px;
}
#search{
    display: inline-block;
    vertical-align: middle;
    width: calc(100% - 80px);
    height: 28px;
    margin-left: 8px;
}
.searchInput{
    border-style: none;
    height: 28px;
    background-color: #f3f3f3;
    width: 70%;
    display: inline-block;
    vertical-align: top;

    background-image:url('../assets/searchIcon.png');
    background-repeat: no-repeat;
    background-position: 8px 50%;
    background-size: 16px;
    padding-left: 30%;

    outline: none;
}
.onSearchInput{
    border-style: none;
    height: 28px;
    background-color: #f3f3f3;
    width: calc(100% - 30px);
    display: inline-block;
    vertical-align: top;

    background-image:url('../assets/searchIcon.png');
    background-repeat: no-repeat;
    background-position: 8px 50%;
    background-size: 16px;
    padding-left: 30px;

    outline: none;

    background-color: white;
    box-shadow: 0px 0px 0px 1px #cfcfcf;
    animation: searchplaceholder 400ms ease 1;
}
.closeSearch{
    display: inline-block;
    vertical-align: middle;
    font-size: 14px;
    margin-left: 10px;
}

.afterClearBoth::after{
    content: "";
    display: table;
    clear: both;
}
.toggle-move{
    transition: transform .5s;
}
/* 动画建立 */
@keyframes searchMaskAni{
    0%{transform: translateX(300px)}
    100%{transform: translateX(-14px)}
}
@keyframes searchplaceholder{
    0%{padding-left: 30%;}
    100%{padding-left: 30px;}
}

#mask{
    width: 100vw;
    max-width: 640px;
    height: 100vh;
    position: fixed;
    background-color: white;

    font-size: 14px;
    white-space: normal;
    z-index: 50;
    transform: translateX(-12px);
    animation: searchMaskAni 400ms ease 1;
}
</style>