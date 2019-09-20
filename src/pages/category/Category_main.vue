<template>
   <div class="animate-item" ref="ani-item">
        <van-swipe class="swiper" v-if="swiperList.length" :autoplay="3000">
            <van-swipe-item v-for="item in swiperList" :key="item.name">
                <img :src="item.photoUrl | imgFilter" alt="">
            </van-swipe-item>
        </van-swipe>
        <div class="hot-keyword">
            <ul>
                <li class="keyword-item" v-for="item in  dataList.iconDtoList" :key="item.id" >{{item.name}}</li>
            </ul>
        </div>
        <Products :products="dataList"></Products>
    </div>
</template>
<script>
import Products from '../../components/product_list/Products'
import Http from '../../Utils/Http'

import Vue from 'vue';
import { Icon, Swipe, SwipeItem } from 'vant';
import _ from 'lodash'

Vue.use(Swipe).use(SwipeItem);
export default {
    props:['prodouctList','swiperLists'],
    data() {
        return {
            dataList:{
                sectionDtoList:{}
            },
            swiperList:[],
            posHeight : ''
        }
    },
    async created() {
        if(!this.$props.prodouctList){
            let res = await Http.post({
                url:'/api/?url=/j/operation/category.json&frontCategoryId=' + this.$route.params.id,
            })
            this.dataList = res.data.result
            this.dataList.iconDtoList= _.shuffle(res.data.result.iconDtoList)
            this.swiperList = this.dataList.focusDtoList
        }else{
            this.dataList = this.$props.prodouctList
            this.swiperList = this.$props.swiperLists
        }
    },
    components:{
        Products
    },
    filters:{
        imgFilter(value){
            return value + '&type=webp' 
        }
    },
    mounted() {
        this.posHeight = this.$refs['ani-item'].offsetHeight
    },
    updated() {
        this.posHeight = this.$refs['ani-item'].offsetHeight
    },
    watch: {
        posHeight(){
             this.$emit('changeHeight',this.$refs['ani-item'].offsetHeight)
        }
    },
    
}
</script>
<style lang="stylus" scoped>
.hot-keyword
        padding .22rem  0 .1rem .15rem
        background-color #fff
        .keyword-item
            padding .09rem .12rem
            margin 0 .12rem .14rem 0
            display inline-block
            color #8891a7
            border 1px solid  #E6EAF2
            border-radius .17rem
            font-size .14rem
            line-height 1em
.swiper
    height 1.73rem
    img 
        width 100%
.animate-item 
    position absolute
    display grid
</style>