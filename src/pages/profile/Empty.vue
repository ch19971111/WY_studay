<template>
    <div class="empty" @click="toHome">
        <p class="empty-img"></p>
        <p class="empty-text">好好学习，天天向上，看到喜欢的课程，点击【加入购物车】，在这里合并购买,点击返回首页</p>
    </div>
</template>
<script>
export default {
    created() {
        this.$store.dispatch('changePosition',{
            type:'home',
            position: 0
        })
    },
    methods: {
        toHome(){
            this.$router.push('/index/home')    
        }
    },
}
</script>
<style lang="stylus" scoped>
.empty
    height 100%
    width  100%
    display flex
    flex-direction column
    justify-content center
    align-items center
    background-color #fff
    .empty-img
        width 1rem
        height .7rem
        background url(https://swap.stu.126.net/res/images/wap/common/blank.png?171e09d6592b4b00ede2d30738189295) 0 0 no-repeat
        background-size 1rem .7rem
    .empty-text
        width 3rem
        margin-top .2rem
        font-size .14rem
        text-align center
</style>