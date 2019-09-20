<template>
  <div class="product-container">
      <section v-for="pro in products.sectionDtoList" :key="pro.sectionName">
        <div v-if="pro.sectionTemplate === 'BB_BB_BB' || pro.sectionTemplate === 'BB_BB'">
          <h3>{{pro.sectionName}} 
            <span v-if="pro.wordLinkDto">{{pro.wordLinkDto.name}}</span>
          </h3>
          <ul class="product-box">
            <li  v-for="item in pro.elementDtoList" :key="item.name" @click="toDetails(item.targetTo)">
              <div class="product-item">
                <a href="javascript:void(0)">
                  <div class="img-box">
                    <img
                      :src="item.photoUrl"
                    />
                  </div>
                  <div class="pro-title">{{item.name}}</div>
                  <div class="pro-price" v-if="item.courseCardVo && pro.priceVisible">
                    <span>￥{{item.courseCardVo.yktCourseCardv.commonDiscountPrice || item.courseCardVo.yktCourseCardv.price }}</span>
                    <span class="pro-old-price" v-if="item.courseCardVo.yktCourseCardv.commonDiscountPrice">￥ {{item.courseCardVo.yktCourseCardv.price}}</span>
                  </div>
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div v-if="pro.sectionTemplate === 'A_A_A'">
          <h3>{{pro.sectionName}}</h3>
          <div class="special" v-for="item in pro.elementDtoList" :key="item.name">
            <img
              :src="item.photoUrl"
              alt
            />
          </div>
          <div class="block"></div>
        </div>
        <div v-if="pro.sectionTemplate === 'A_BB_BB'">
          <h3>{{pro.sectionName}}</h3>
          <ul class="product-box">
            <li v-for="item in pro.elementDtoList" :key="item.name" @click="toDetails(item.targetTo)" >
              <div class="product-item pro-card" v-if="!item.photoStyle">
                <div class="card-img">
                  <img
                    :src="item.photoUrl"
                  />
                </div>
                <div class="card-title">{{item.name}}</div>
                <div class="card-price" v-if="item.courseCardVo">
                  <span>￥{{item.courseCardVo.yktCourseCardv.price}}</span>
                </div>
              </div>
              <div class="product-item" v-if="item.photoStyle">
                <a href="javascript:void(0)">
                  <div class="img-box">
                    <img
                      :src="item.photoUrl"
                      alt
                    />
                  </div>
                  <div class="pro-title">{{item.name}}</div>
                  <div class="pro-price" v-if="item.courseCardVo && pro.priceVisible">
                    <span>￥{{item.courseCardVo.yktCourseCardv.price}}</span>
                    <!-- <span class="pro-old-price">￥199</span> -->
                  </div>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
</template>

<script>
import { constants } from 'crypto';
export default {
  props:['products'],
  methods: {
    toDetails(value,flag){
      let id 
      if(value.indexOf('?') !== -1 && value.indexOf('share') == -1){
        id = value.split('=')[1]
        this.$router.push('/details/' + id)
      }else if(value.indexOf('?') !== -1 && value.indexOf('htm') !== -1){
         let res = value.split('/') 
          id = (res[res.length-1]).split('.')[0]
          this.$router.push('/details/' + id)
      }else if(value.indexOf('.htm') !== -1){
        let res = value.split('/') 
        id = (res[res.length-1]).split('.')[0]
        this.$router.push('/details/' + id)
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
    .product-container
      width 100%
      >section 
          width 100%
          margin-top .12rem 
          background-color #fff
          padding 0 .15rem
          h3
              width 100%
              font-size .17rem
              line-height .21rem
              padding .2rem 0 .15rem 0
              color #3c4a55
              display flex
              justify-content space-between
              span 
                font-size .13rem
                padding-right .12rem
                background url(https://edu-image.nosdn.127.net/018482ce-2bfd-435a-ad30-907d6c225fa2.png?imageView&quality=100) top right no-repeat
                background-size .08rem .22rem 
                color #2cc17b
                font-weight normal


          .special
              width 100%
              margin-bottom .11rem
              >img 
                  width 100%
                  height 1.36rem
          .block
              height .14rem
          .product-box
              width 100%
              display flex
              flex-wrap wrap
              justify-content space-between
              .product-item
                  width 1.68rem
                  &.pro-card
                    width 100%
                    padding-bottom .225rem
                    .card-img
                        img 
                            width 100%
                            height 1.48rem
                    .card-title
                        font-size .16rem
                        color #3c4a55
                        line-height .22rem
                        margin-top .02rem
                    .card-price
                        color #ff632a
                        font-size .16rem
                  padding-bottom .225rem
                  >a
                      display flex
                      flex-direction  column
                      font-size .16rem
                      color #3c4a55
                      .img-box
                          width 100%
                          height .95rem
                          img 
                              width 100%
                              height 100%
                      .pro-title
                          padding-top .075rem
                      .pro-price
                          color #ff632a
                          .pro-old-price
                              text-decoration  line-through
                              font-size 14px
                              color #999   

</style>