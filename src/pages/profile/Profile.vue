<template>
    <div class="profile-container">
        <Empty v-if="dataList.length==0"></Empty>
        <div class="profile-main">
            <div class="goods-count">共{{dataList.length}}门课程</div>
            <div class="goods-list">
                <ul class="list-box">
                    <li v-for="(item,index) in dataList" :key="item.id">
                        <div class="author">{{item.providerName}}</div>
                        <div class="list-main">
                            <div class="list-main-box">
                                <span class="check" :class="{active:item.status}" @click="chengeStatus(index)">
                                    <input class="checkbox" type="checkbox">
                                </span>
                                <div class="goods">
                                    <img :src="item.largePictureUrl" alt="">
                                    <div class="goods-text">
                                        <h3>{{item.name}}</h3>
                                        <p class="m-time">永久有效</p>
                                        <p class="m-price">￥{{item.discountPrice||item.price}}.00</p>
                                    </div>
                                </div>
                                <div class="delete" @click="changeDelete(index)">删除</div>
                            </div>
                        </div>
                        <div class="subtotal">
                            该机构小计：
                            <span>￥{{item.status ? (item.discountPrice||item.price) : 0}}.00</span>
                        </div>
                        <div class="blank"></div>
                    </li>
                </ul>
            </div>
            <div class="goods-some">
                <div class="some-box">
                    <span class="check " :class="{active:!allStatus}">
                        <input class="checkbox"   type="checkbox" @click="changeAllStatus">
                    </span>
                    <div class="some-main">
                        <p class="some-price">合计：<span>￥{{total}}.00</span></p>
                        <p class="some-text">若有优惠, 将在订单结算页面减扣</p>
                    </div>
                    <div class="some-button " :class="{active:total}">去结算</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Empty from './Empty'
import Bscroll from 'better-scroll'
export default {
    data() {
        return {
            dataList:[],
        }
    },
    components:{
        Empty
    },
    created() {
        this.dataList = this.$store.state.cart.goodsList
    },
    mounted() {
       const bscroll = new Bscroll('.goods-list',{
           click:true
       })
    },
    methods: {
        changeDelete(index){
            this.$store.dispatch('cart/changeDelete',index)
        },
        chengeStatus(index){
            this.$store.dispatch('cart/chnageStatus',index)
        },
        changeAllStatus(){
            this.$store.dispatch('cart/changeAllStatus',this.allStatus)
        }
    },
    computed: {
        total(){
            let total = this.dataList.reduce((prev,next)=>{
                if(next.status){
                    return prev + (next.discountPrice || next.price)
                }else{
                    return prev + 0
                }
            },0)
           return total
        },
        allStatus(){
           let flag = this.dataList.some((item,index)=>{
               return item.status === false
           })
           return flag
        }
    },
}
</script>
<style lang="stylus" scoped>
@import '~styles/One_boder.styl'
.blank
    background-color #EDEFF2
    height .08rem
.subtotal
    padding .15rem .1rem
    text-align right
    color #70788C
    font-size .12rem
    line-height 1em
    span 
        color #FF4400
        font-size .14rem
.some-main
    flex 1
    text-align right 
    padding .07rem .1rem 0 0
    font-size .12rem
    color #3C4A55
    .some-price
        span 
            color #FF4400


.some-box
    display flex
    justify-content space-between

.some-button
    width .9rem
    height .5rem
    background #CED1DA
    border1px(1px)
    color #ffffff
    font-size .14rem
    line-height .5rem
    text-align center
    &.active
        background #FF632A

span.check 
    position relative
    vertical-align top
    width .15rem
    .checkbox
        width .15rem
        height .15rem
        opacity 0
        position relative
    &::before
        content ''
        width .15rem
        height .15rem
        position absolute
        opacity 1
        left 0
        top 0
        background url(https://yktcdn.stu.126.net/so/res/images/wap/page/cart/cartSprite.png?93fa87641d32944ea1cefb79bfc8951a) no-repeat
        background-size 145px 76px
        background-position -39px -36px
    &.active
        &::before
            background-position: -12px -36px;
.goods
    display flex !important
    flex 1 !important
    width 70%

.list-main-box
    width 100%
    display flex
    padding-bottom .2rem
    border1px(0 0 1px 0)
.profile-container
    width 100%
    height 100%
    .profile-main
        width 100%
        height 100%
        background-color #fff
        display flex
        flex-direction column
        .goods-count
            height .34rem
            padding-left .1rem
            font-size .12rem
            color #3C4A55
            line-height .34rem
        .goods-list
            flex 1
            overflow hidden
            .list-box
                width 100%
                li
                    .author
                        padding .1rem
                        background-color #F7F9FC
                        font-size .12rem
                        line-height 1em
                    .list-main
                        padding  .12rem .1rem 0 .1rem
                        .goods
                            padding-left .12rem
                            display inline-block
                            flex 1
                            img 
                                width .97rem
                                height .54rem
                                vertical-align top
                            .goods-text
                                padding-left .08rem
                                flex 1
                                h3
                                    font-size .14rem
                                    font-weight normal
                                    white-space nowrap
                                    color #3C4A55
                                    line-height 1em
                                    overflow hidden
                                    width 100%
                                    text-overflow ellipsis
                                .m-time
                                    margin .06rem 0
                                    color #8891A7
                                    font-size .12rem
                                .m-price
                                    font-size .12rem
                                    color #3C4A55
                        .delete
                            font-size .12rem
                            color #99A4BF
                            display inline-block
                            line-height .54rem
                            width max-content
                            flex-shrink 0
                            width .24rem
        .goods-some
            height .48rem
            background-color #fafafa
            padding-left .1rem 
            color #3C4A55
</style>