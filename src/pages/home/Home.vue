<template>
    <div class="home-container">
        <div v-if="dataList!==[]">
            <Headers></Headers>
            <van-swipe class="swiper" :autoplay="3000">
                <van-swipe-item v-for="item in dataList.focusDtoList" :key="item.name">
                    <img :src="item.photoUrl" alt="">
                </van-swipe-item>
            </van-swipe>
            <nav>
                <ul class="nav-container">
                    <li class="nav-item" v-for="(navItem,index) in dataList.iconDtoList" :key="navItem.name" @click="toCategory(navItem,index)">
                        <div class="nav-img">
                            <img :src="navItem.photoUrl" alt="">
                        </div>
                        <span>{{navItem.name}}</span>
                    </li>
                </ul>
            </nav>
            <Product :products="dataList"></Product>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import { Icon, Swipe, SwipeItem } from 'vant';


Vue.use(Swipe).use(SwipeItem);
Vue.use(Icon);
import Http from 'utils/Http'
import { constants } from 'crypto'
import Product from '../../components/product_list/Products'
import Headers from '../../components/header/Hearde'
import BScroll from 'better-scroll'
export default {
    data() {
        return {
            dataList : [],
        }
    },
    async created(){
       let data = await Http.post({
           url:'/api?url=/j/operation/homepage.json'
           })
      this.dataList = data.data.result
    },
    components:{
        Product,
        Headers
    },
    mounted() {
        this.bScroll = new BScroll('.home-container',{
            click : true,
            probeType:3
        })
        this.bScroll.on('touchEnd',({y})=>{
            this.$store.dispatch('changePosition',{
                position : y,
                type     : 'home'
            })
        })
    },
    updated() {
        this.$nextTick(()=>{
            this.bScroll.scrollTo(0,this.$store.state.position.home,0)
        })
    },
    methods: {
        toCategory(item,index){
            if(index !== 0 && index !== 7){
                this.$router.push("/category/"+item.categoryVo.id)
            }
        }
    },
}
</script>
<style lang="stylus" scoped>
    .home-container
        font-family "微软雅黑", Helvetica Neue,Helvetica,Arial,Sans-serif
        height 100%
        .swiper
            height 1.73rem
            img 
                width 100%
        nav
            .nav-container
                height 1.865rem
                padding  0 .15rem .2rem .15rem
                display  flex
                justify-content space-around
                flex-wrap wrap
                background-color #fff
                overflow hidden
                .nav-item
                    width .8rem
                    height .6rem
                    display flex
                    flex-direction column
                    justify-content center
                    align-items center
                    margin-top .2rem
                    .nav-img
                        width .38rem
                        height .38rem
                        img 
                            width 100%
                            height 100%
                    span 
                        padding-top .08rem
                        line-height 1em
                            

>>>.van-swipe__indicators
    height .08rem
    .van-swipe__indicator
        width .08rem
        height .08rem
        margin-left .08rem
        margin-right 0 
        background-color rgba(255, 255, 255, 0.6)
        &.van-swipe__indicator--active
            background-color #fff

>>>.van-loading
    width 100%
    height 100%
    display flex
    justify-content center
    align-items center


</style>