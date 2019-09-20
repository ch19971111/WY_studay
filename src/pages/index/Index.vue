<template>
    <div class="container">
        <main>
            <router-view></router-view>
        </main>
        <footer>
            <van-tabbar 
            v-model="active" 
            active-color="#07c160"
            inactive-color="#000"
            route>
                <!-- <i class="my-home">&#xf0175;</i> -->
                <van-tabbar-item to="/index/home" name="home">
                    <span class="my-home">&#xf0175;</span>
                    <div>首页</div>
                </van-tabbar-item>
                <van-tabbar-item to="/index/profile" name="profile" @click="cleanPosition">
                    <span class="my-home">&#xe718;</span>
                    <div>我的学习</div>
                </van-tabbar-item>
                <van-tabbar-item to="/index/account" name="account">
                    <span class="my-home">&#xe660;</span>
                    <div>账号</div>
                </van-tabbar-item>
            </van-tabbar>
        </footer>
    </div>
</template>
<script>
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';

Vue.use(Tabbar).use(TabbarItem);
export default {
    data() {
        return {
            active:'home',
        }
    },
    methods: {
        cleanPosition(){
            this.$store.dispatch('changePosition',{
                type:'home',
                position:0
            })
        }
    },
}
</script>
<style lang="stylus">
    @import '../../assets/font/iconfont.css'
    .container
        height 100%
        display flex
        flex-direction column
        main
            flex 1
        footer
            height .49rem
    main
        overflow-y  scroll
    .van-tabbar-item
        color #3C4A55
        font-size .12rem
        display flex
        flex-direction column
        justify-content center
        align-items center
        .van-tabbar-item__text
            display flex
            flex-direction column
            justify-content center
            align-items center
            >span
                font-size .21rem
                margin-bottom .04rem 
</style>