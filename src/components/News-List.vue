<template>
    <div class="newsBox">
        <img src="../assets/logoIcon2.png" />
        <div class="newsListShowBox">
            <ul class="newsList" style="list-style: none;">
                <li v-for="(news, index) in newsList" :key="index"><span>{{news.type}}</span>{{news.news}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'news-list',
    props:{
        item: Array,
    },
    computed:{
        newsList(){
            var result=[
                {
                    type: '格上悦读',
                    news: '熵减——华为的活力之源',
                },
                {
                    type: '热门专题',
                    news: '景林致远专享私募子基金GS1期',
                },
                {
                    type: '重磅发布',
                    news: '《私募的进化》，一本书品悟金融超级蓝海中的跌宕十年',
                },
                {
                    type: '热门视频',
                    news: '成长价值金牛奖得主-石锋资产',
                },
                {
                    type: '格上悦读',
                    news: '熵减——华为的活力之源',
                },
            ];

            if(this.item!=undefined)
            {
                result = this.item;
            }
            
            return result;
        }
    }
}
</script>

<style>
.newsBox{
    text-align: left;
    position: relative;
    padding: 12px 0;
    margin: 0 12px 0 2.55rem;
    background: #fff;
    height: 32px;
}
.newsBox img{
    position: absolute;
    width: 1.35rem;
    height: 1.35rem;;
    left: -1.95rem;
    top: 50%;
    transform: translateY(-50%);
}
.newsListShowBox{
    height: 100%;
    background-color: #f8f8f8;
    border-radius: 100px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    z-index: 1;
}
.newsListShowBox li{
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
    line-height: 40px;
    font-family: PingFangSC-Light,helvetica,Heiti SC Light,Droid Sans Light;
    color: #505050;
    margin-left: 10px;
    transform: translateY(-3px);
}

/* .newsBox::after{
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 12px;
    right: 12px;
    border-top: 1px solid #e7e7e7;
    transform: scaleY(.5);
    transform-origin: 0 0;
    z-index: 1;
} */

@keyframes newsAni{
    0%, 22%{ transform: translateY(0);}
    25%, 47%{transform: translateY(-40px);}
    50%, 72%{transform: translateY(-80px);}
    75%, 97%{transform: translateY(-120px);}
    100%{transform:translateY(-160px)}
}
.newsList{
    animation: newsAni 10s linear  infinite;
}
.newsList span::after{
    content: "";
    border-right: 1px solid ;
    background: #d0a369;
    margin: 5px;
}
.newsList span{
    display: inline-block;
    position: relative;
    /* margin-right: .3rem;
    padding-right: .3rem; */
    line-height: 40px;
    font-size: 14px;
    color: #d0a369;
    font-family: PingFangSC-Medium,helvetica,Heiti SC Medium,Droid Sans Medium;
}
</style>