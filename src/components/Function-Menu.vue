<template>
  <div class="func-container clearBoth">
      <div class="options">       
        <div class="row clearBoth" v-for="(row,index) in options" :key="index">
            <div class="funOption" v-for="o in row" :key="o.index" >
                <span class="optionIcon" :style="'background-position-x:' + o.pos + 'px'"></span>
                <p class="optionName">{{o.name}}</p>
            </div>
        </div>
      </div>

      <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'function-menu',
    props:{
        functions: Array,
    },
    computed:{
        options(){
            var result = [];
            var funcs = this.functions;
            
            var row = [];
            for(let i=0; i<funcs.length; i++)
            {
                var cell = {
                    name: funcs[i].name,
                    pos: this.getPos(funcs[i].pic),
                };

                row.push(cell);
                if(row.length>=4)
                {
                    result.push(row);
                    row = [];
                }
            }
            if(row.length>0){
                result.push(row);
            }

            return result
        }
    },
    methods:{
        getPos(pic){
            var pos = 0;
            if(pic == "selected"){
                pos = 0;
            }
            else if(pic == "toplist"){
                pos = -30;
            }
            else if(pic == "profit_rank"){
                pos = -60;
            }
            else if(pic == "platform"){
                pos = -300;
            }
            else if(pic == "yangguang"){
                pos = -120;
            }
            else if(pic == "guquan"){
                pos = -150;
            }
            else if(pic == "quasi_fixed"){
                pos = -180;
            }
            else if(pic == "research"){
                pos = -90;
            }
            return pos;
        }
    },

    // data(){
    //     return{
    //         options:[
    //             [
    //                 {
    //                     name: '格上精选',
    //                     pos: 0,
    //                 },
    //                 {
    //                     name: '巅峰榜',
    //                     pos: -30,
    //                 },
    //                 {
    //                     name: '收益排行',
    //                     pos: -60,
    //                 },
    //                 {
    //                     name: '优质在售',
    //                     pos: -300,
    //                 },
    //             ],
    //             [
    //                 {
    //                     name: '阳光私募',
    //                     pos: -120,
    //                 },
    //                 {
    //                     name: '私募股权',
    //                     pos: -150,
    //                 },
    //                 {
    //                     name: '类固收',
    //                     pos: -180,
    //                 },
    //                 {
    //                     name: '格上研究',
    //                     pos: -90,
    //                 },
    //             ]
    //         ]
    //     }
    // },
}
</script>

<style scoped>
.func-container{
    margin-bottom: 8px;
    padding-top: 12px;
    background-color: #fff;
}
.funOption{
    float: left;
    text-align: center;
    width: 25%;
    padding-bottom: 12px;
}
.optionIcon{
    display: block;
    width: 30px;
    height: 30px;
    margin: auto auto .3rem;

    background-image: url('../assets/functionIcon.png');
    background-repeat: no-repeat;
    background-size: 330px;
}
.optionName{
    font-size: .7rem;
    font-family: PingFangSC-Light,helvetica,Heiti SC Light,Droid Sans Light;
    color: #36363c;
}
.options{
    position: relative;
}
.options::after{
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 12px;
    right: 12px;
    border-top: 1px solid #e7e7e7;
    transform: scaleY(.5);
    transform-origin: 0 0;
    z-index: 1;
}
.clearBoth::before, .clearBoth::after{
    content: "";
    display: table;
    clear: both;
}
</style>