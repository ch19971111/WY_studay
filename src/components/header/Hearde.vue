<template>
     <div class="home-top">
           <a href="javascript:void(0)" @click="goHome" class="logo"></a>
           <div class="app">App查看</div>
           <div class="search">
               <router-link to="/search">
                    <van-icon name="search"/>
               </router-link>
           </div>
       </div>
</template>
<script>
export default {
    methods: {
        goHome(){
            this.$router.push('/index/home')
        }
    },
}
</script>
<style lang="stylus" scoped>
@import '~styles/One_boder.styl'
        .home-top
            height .5rem
            background #fff
            padding 0 .1rem 0 .15rem
            display flex
            align-items center
            border1px(0 0 1px 0) 
            .logo
                background url('https://nos.netease.com/edu-image/a9333338-6b0e-4e56-a34a-77b2a2268b4a.png?imageView&quality=100') no-repeat center
                background-size contain
                width 1.15rem
                display  inline-block
                height .24rem
                margin-right .08rem
            .app
                height .2rem
                width  .62rem
                display inline-block
                line-height  .2rem
                font-size .12rem
                color #2CC17B
                border 1px solid #2CC17B
                border-radius .2rem
                text-align center
            .search
                padding-right .2rem
                flex 1
                text-align right 
                font-size .16rem

</style>