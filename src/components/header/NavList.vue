<template>
    <nav class="swiper-container">
        <ul class="my-swiper-wrapper">
            <li class="my-swiper-slide "  
            :class="{active:indexs==index}"  
            v-for="(item,index) in navList.frontCategoryDtoList"  
            :key="item.id" 
            @click="changeRouter(item.id,index)">{{item.name}}</li>
        </ul>
    </nav>
</template>
<script>
import Http from 'utils/Http'
import Bscroll from 'better-scroll'


export default {
    props:['changeData'],
    data() {
        return {
            navList : '',
            indexs:'',
            positionX: 0,
            bscroll:'',
            flag : false
        }
    },
    async created(){
        let res = await Http.post({
            url:'/api/?url=/j/operation/allcategory.json&type=1'
        })
        this.navList = res.data.result
        this.navList.frontCategoryDtoList.forEach((item,index)=>{
            if(item.id == this.$route.params.id){
                this.indexs = index
            }
        })
    },
    mounted() {
        const bscroll = new Bscroll('.swiper-container',{
            scrollX:true,
            scrollY:false,
            click:true
        })
        this.bscroll = bscroll
    },
    beforeUpdate() {
        this.$nextTick(()=>{
            this.positionX = -document.querySelector('.active').offsetLeft + 15
        })
       
    },
    updated() {
        this.$nextTick(()=>{
         this.bscroll.refresh()
         this.bscroll.scrollTo(this.positionX, 0,0)
        })
    },
    methods: {
        changeRouter(id,index){
            if(!this.flag){
                this.flag = true
                this.indexs = index
                this.$emit('changeData',{id,index})
                setTimeout(()=>{
                    this.flag = false
                },300)
            }
        }
    },
}
</script>
<style lang="stylus">
.swiper-container
    height .45rem
    background-color #fff
    .my-swiper-wrapper
        height 100%
        display flex
        flex-wrap nowrap
        position relative
        width max-content
        .my-swiper-slide
            margin 0 .14rem  
            font-size .15rem
            color #3c4a55
            flex-shrink 0
            line-height .45rem
            position relative
            &.active::after
                content ""
                width 100%
                height .03rem
                background-color #2cc17b
                position absolute
                left 0
                bottom .1rem

</style>