<template>
    <div class="search-container">
        <header>
            <div class="input-box">
                <input type="search" @click="changeShow" @input="handleInput" :placeholder="hotData.topHotword.name " v-model="text">
                <span v-show="isShowRes" @click="clear"></span>
            </div>
            <a href="javascript:viod(0)" class="search-button">搜索</a>
        </header>
        <div class="hot-keyword" v-show="!isShowRes">
            <p>热门搜索</p>
            <ul>
                <li class="keyword-item" v-for="item in  hotData.recomHotword" :key="item.id">{{item.name}}</li>
            </ul>
        </div>
        <div class="search-res" v-if="isShowRes">
            <ul>
                <li v-for="res in resData.course" :key="res.id" @click="$router.push('/details/'+ res.id)">
                    <span class="find-keyword">{{res.name}}</span>
                    <span class="find-card">微专业</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Http from '../../Utils/Http'
import { chownSync } from 'fs';
export default {
    data() {
        return {
            hotData:{
                topHotword:{
                    name : ''
                }
            },
            isShowRes:false,
            text:'',
            resData: '',
            flagText:'1'
        }
    },
    async created() {
        let results = await Http.post({
            url:'/api?url=/j/getHotQueryDatas.json'
        })
        this.hotData = results.data.result
    },
    methods: {
        async handleInput(){
           if(this.text !== '' && this.text !== this.flagText){
               this.isShowRes = true
               this.flagText = this.text
                let res = await Http.get({
                    url:'/get?url=/j/search/suggestions/courses.json&prefix=' + this.text
                })
                this.resData = res.data.result
                console.log(this.resData)
           }
           if(this.text == ''){
               this.isShowRes = false
           }
        },
        changeShow(){
            if(this.text === ''){
                this.isShowRes = false
            }else{
                this.isShowRes = true
            }
        },
        clear(){
            this.text = ''
            this.isShowRes = false
        }
    },
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/One_boder.styl'

.search-container
    height 100%
    background-color #fff
    >header 
        height .44rem
        background-color #f6f6f6
        padding .05rem 0 .05rem .15rem
        display flex
        .search-button
            color #2CC17B
            font-size .15rem
            display block
            height .34rem
            line-height .34rem
            text-align center
            flex 1
        .input-box
            width 3rem
            height .34rem
            position relative
            input 
                display block
                width 100%
                background #fff url(https://edu-image.nosdn.127.net/d81f836b-b37f-43fa-85de-98acdbc9478b.png?imageView&quality=100) .1rem center no-repeat
                background-size .14rem
                border: 1px solid #E6EAF2
                height .34rem
                border-radius .30rem
                color #3C4A55
                font-size .14rem
                text-indent .3rem
            span 
                width .345rem
                height .34rem
                padding 0 .1rem
                position absolute
                top 0
                right 0
                background url(https://edu-image.nosdn.127.net/e0a17106-f495-4410-9920-97863ed3007b.png?imageView&quality=100) center no-repeat
                background-size .14rem
    .hot-keyword
        padding .15rem
        .keyword-item
            padding .09rem .12rem
            margin .15rem .12rem 0 0
            display inline-block
            color #8891a7
            border 1px solid  #E6EAF2
            border-radius .17rem
            font-size .14rem
            line-height 1em
    .search-res
        width 100%
        >ul
            padding 0 .16rem
            >li
                padding .13rem 0
                font-size .14rem
                line-height .16rem
                height .39rem
                border1px(0 0 1px 0) 
                .find-card
                    background #2196f3
                    color #fff
                    padding .01rem .04rem
                    border-radius .02rem
                    margin-left .05rem
                    font-size .12rem 


</style>
