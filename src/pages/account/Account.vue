<template>
    <div class="account-container">
        <div class="account-header">
            <img src="https://edu-image.nosdn.127.net/7c5a8d29-ce20-4f97-a3a6-49872772667d.png?imageView&quality=100&thumbnail=100y100" alt="">
            <span>登录/注册</span>
        </div>
        <div class="account-main">
            <ul class="account-list">
                <li>
                    <i class="my-home">&#xe62b;</i>
                    <div class="borders">
                        <span>我的订单</span>
                        <i class="my-home">&#xe620;</i>
                    </div>
                </li>
                <li>
                    <i class="my-home">&#xe69b;</i>
                    <div class="borders">
                        <span>我的优惠券</span>
                        <i class="my-home">&#xe620;</i>
                    </div>
                </li>
                <li @click="changeToCart">
                    <i class="my-home">&#xe665;</i>
                    <div class="borders">
                        <span>我的购物车</span>
                        <i class="my-home">&#xe620;</i>
                    </div>
                </li>
                <li>
                    <i class="my-home">&#xe527;</i>
                    <div>
                        <span>我的学习卡</span>
                        <i class="my-home">&#xe620;</i>
                    </div>
                </li>
            </ul>
        </div>
        <div class="account-footer">
            <ul class="account-list">
                <li>
                    <i class="my-home">&#xe61a;</i>
                    <div class="borders">
                        <span>分享赚学费</span>
                        <i class="my-home">&#xe620;</i>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        changeToCart(){
            this.$router.push('/index/profile')
            // console.log(this.$router.push(''))
        }
    },
}
</script>

<style lang="stylus" scoped>
@import '~styles/One_boder.styl'
@import '../../assets/font/iconfont.css'
.account-footer
    margin-top .08rem
    background-color #fff


.account-main
    width 100%
    background-color #fff
.account-list
    li
        width 100% 
        display flex
        height .5rem
        justify-content center
        align-items center
        color #999
        i
            width .425rem
            height .5rem
            display inline-block
            text-align center
            line-height .5rem
            font-size .18rem
        div
            flex 1
            color #333
            font-size .15rem
            display flex
            justify-content space-between
            align-items center
            >i 
                color #999
            &.borders
                border1px(0 0 1px 0)

.account-header
    height .78rem
    background-color #fff 
    padding .14rem 0 .14rem .12rem
    border1px(0 0 1px 0)
    img     
        width .5rem
        height .5rem
        vertical-align: baseline
        margin-right  .12rem
    span 
        font-size .16rem 
        color #333740
        vertical-align text-bottom
        display inline
        line-height .5rem
.account-container
    width 100%
    height 100%
    background-color #f4f4f4
</style>