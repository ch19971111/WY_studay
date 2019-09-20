<template>
    <div class="details-container">
        <van-loading v-if="dataList==''" type="spinner" size="50px" color="#666">加载中...</van-loading>
        <div class="details-main" v-show="dataList.name">
            <div class="details-img">
                <img :src="dataList.largePictureUrl">
            </div>
            <nav class="details-nav">
                <div class="nav-item active">
                    <span>简介</span>
                </div>
                <div class="nav-item">
                    <span>目录</span>
                </div>
                <div class="nav-item">
                    <span>评价</span>
                </div>
            </nav>
            <div class="dateils-content">
                <div class="title-box">
                    <div class="titles">
                        <div>{{dataList.name}}</div>
                        <div class="score">
                            <span class="score-img"></span>
                            <span class="score-number">4.8分</span>
                            <span class="score-hot">3427在学</span>
                            <span class="score-dj">独家</span>
                        </div>
                    </div>
                    <div class="price-box">
                        <div class="price-top">
                            <span class="item">￥</span>
                            <span>{{dataList.discountPrice}}.00</span>
                            <span class="count-down">特价仅剩16天5小时11分钟</span>
                        </div>
                        <div class="price-bottom" v-if="!dataList.discountPrice == dataList.price">
                            ￥{{dataList.price}}.00
                        </div>
                    </div>
                </div>
                <div class="item-content">
                    <h3>课程介绍</h3>
                    <p v-text="text">
                    </p>
                </div>
            </div>
        </div>
        <footer v-show="dataList.name">
            <div class="car-button" @click="changeGoodsList(dataList)">
                <i class="my-home">&#xe60f;</i>
                <span>加入购物车</span>
            </div>
            <div class="join">
                <span>加入学习</span>
            </div>
        </footer>
        <div class="no-data" v-if=" dataList!=='' && !dataList.name" @click="$router.push('/index')">
            暂无数据,点击返回首页
        </div>
    </div>
</template>
<script>
import Http from 'utils/Http.js'
import Vue from 'vue';
import { Toast,Loading } from 'vant';



Vue.use(Toast).use(Loading);
export default {
    data() {
        return {
            dataList : '',
            text : ''
        }
    },
    async created() {
        let res = await Http.detailPost({
            url : '/post?productId='+ this.$route.params.id,
        })
        this.dataList = res.data.result
        if( this.dataList.description){
            this.text = this.dataList.description.replace('/\n/','<br />')
        }
    },
    methods: {
        changeGoodsList(dataList){
            let data = this.$store.state.cart.goodsList
            let flag = data.some((item,index)=>{
                return item.id == dataList.id
            })
            if(!flag){
                this.$store.dispatch('cart/changeGoodsList',{...dataList,status:false})
                this.$toast('已成功加入')
            }else{
                this.$toast('购物车内已存在')
            }
        }
    },
}
</script>
<style lang="stylus" scoped>
@import '~styles/One_boder.styl'




.details-container
    display flex
    flex-direction column
    height 100%
    footer 
        height .63rem
        background-color #ffffff
        padding .07rem .08rem
        border1px(1px 0 0 0 )
        display flex
        .car-button
            display flex
            flex-direction column
            justify-content center
            align-items center
            width .8rem
            color #3C4A55
            font-size .12rem
            .my-home
                font-size .22rem
        .join
            display flex
            justify-content center
            align-items center
            flex 1
            color #fff
            background #FF632A
            font-size .15rem
            border-radius 2rem


    .details-main
        flex 1
        overflow-y scroll
.dateils-content
    .title-box
        height 1.68rem
        padding .18rem 0 .14rem .15rem
        background-color #fff
        .titles
            border1px(0 0 1px 0)
            font-size .18rem
            color #3C4A55
            line-height .26rem
            .score
                padding .09rem 0 
                font-size .12rem
                color #70788C
                .score-img
                    display inline-block
                    width .86rem
                    height .13rem
                    background url(https://edu-image.nosdn.127.net/4b13c7d5-142b-47a8-928c-c8069b4ef178.png?imageView&quality=100) 0 0 no-repeat
                    background-size .86rem 
                .score-hot
                    margin-left .09rem
                .score-dj
                    float right  
                    margin-right .15rem
                    line-height 1em
                    color #70B6F8
                    border 1px solid #70B6F8
                    padding .02rem
    .price-box
        height .70rem
        padding-top .15rem
        .price-top
            color #151515
            font-size .2rem
            .item
                font-size .12rem
            .count-down
                display inline-block
                padding .03rem
                color #ff632a
                border 1px solid #ff632a
                font-size .12rem
                margin-left .15rem
                line-height 1em
                vertical-align middle
        .price-bottom
            font-size .12rem
            color #70788C
            padding .1rem 0 
            text-decoration line-through
.item-content
    margin-top .08rem
    background-color #fff
    padding 0 .15rem
    >h3
        padding .2rem 0 .07rem
        color #3C4A55
        font-size .15rem
        line-height .21rem
    >p
        font-size .14rem
        color #70788C
        line-height .19rem
        width 100%
        white-space pre-wrap

.no-data
    height 100%
    display flex
    justify-content center
    align-items center
    font-size .20rem
    background-color #fff

.details-img
    height 2.0833rem
    img 
        width 100%
        height 100%
.details-nav
    display flex
    height .46rem
    background-color #fff
    justify-content space-between
    border1px(0 0 1px 0)
    .nav-item
        flex 1
        display flex
        justify-content center
        align-items center
        color #333
        font-size .16rem
        span 
            padding 0 .2rem
            display inline
            line-height  .43rem
        &.active
            >span 
                color #2cc17b
                border-bottom 3px solid #2cc17b


>>>.van-loading
    width 100%
    height 100%
    display flex
    justify-content center
    align-items center
</style>