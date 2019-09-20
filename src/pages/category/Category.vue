<template>
    <div class="category ">
        <div class="category-main ">
            <Headers></Headers>
            <NavList @changeData="changeData"></NavList>
            <div class="animates" ref="animates">
                <transition 
                    :enter-active-class="slideIn"
                    :leave-active-class="slideOut"
                >   
                    <CategoryMain 
                        :prodouctList="dataList" 
                        :swiperLists="swiperList" 
                        :key="time" 
                        @changeHeight="changeHeight"
                    ></CategoryMain>
                </transition>
            </div>
        </div>
    </div>
</template>
<script>
import Headers from '../../components/header/Hearde'
import Http from '../../Utils/Http'
import NavList from '../../components/header/NavList'
import CategoryMain from './Category_main'
import BScroll from 'better-scroll'

import _ from 'lodash'

import Vue from 'vue';
import { Icon, Swipe, SwipeItem } from 'vant';


Vue.use(Swipe).use(SwipeItem);
export default {
    data() {
        return {
            dataList:0,
            swiperList:[],
            time : new Date().getTime(),
            slideIn:'',
            slideOut:''
        }
    },
    components:{
        Headers,
        NavList,
        CategoryMain
    },
    created() {
        this.index = 0
    },
    mounted() {
         this.bscroll = new BScroll('.category',{
            scrollX : false,
            scrollY : true,
            click   : true
        })
        this.bscroll.on('touchEnd',({y})=>{
            this.$store.dispatch('changePosition',{
                type : 'category',
                position : y
            })
        })
        this.ele =  this.$refs['animates']
    //    console.log(document.querySelector('.animate-item').offsetHeight)
        
    },
    updated() {
        this.$nextTick(()=>{
            this.ele.style.height  = this.ele.children.offsetHeight + 'px'
            this.bscroll.scrollTo(0,this.$store.state.position.category,0)
        })
    },
    methods: {
         async changeData({id,index}){
            let result = await Http.post({
                url:'/api/?url=/j/operation/category.json&frontCategoryId=' + id,
            })
            this.dataList = result.data.result
            this.dataList.iconDtoList= _.shuffle(result.data.result.iconDtoList)
            this.swiperList = result.data.result.focusDtoList
            if(this.index < index){
                this.slideIn = 'animated slideInRight'
                this.slideOut = 'animated slideOutLeft'
                this.index = index 
            }else{
                this.slideIn = 'animated slideInLeft'
                this.slideOut = 'animated slideOutRight'
                this.index = index 
            }
            this.time = new Date().getTime()
        },
        changeHeight(height){
            this.$refs['animates'].style.height = height + 'px'
        }
    },
    
}
</script>
<style lang="stylus" scoped>

.category
    height 100%
    overflow hidden
    position relative
.animates
    position  relative
    height max-content
.category-main
    height max-content

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
        
</style>