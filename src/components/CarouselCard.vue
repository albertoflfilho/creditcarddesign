<template>
    <div class="carousel">
        <swiper :options="swiperOption" class="swiper-box">
            <swiper-slide class="swiper-item">
                <div class="yellowCard">
                    <h1>{{"Yellow Card"}}</h1>
                </div>
            </swiper-slide>
            <swiper-slide class="swiper-item">                
                <div class="visa">
                    <img src="../assets/visa.png"/>
                    <h1><span>•••• •••• ••••</span> 9760</h1>
                </div></swiper-slide>
            <swiper-slide class="swiper-item">                
              <div class="pickCard">
                    <h1>{{"Pick Card"}}</h1>
                </div></swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  data() {
      return {
        swiperOption: {
          direction: "horizontal",
          slidesPerView: 1,
          initialSlide: 1,
          // spaceBetween: 100,
          mousewheel: true,
          spaceBetween: 100,
          centeredSlides: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }
      }
    },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.carousel {
  height: 30vh;
  background-color: #839ce6;
}
.swiper-box {
  width: 100%;
  height: 100%;
  // margin: 0;
  background-color: #839ce6;
}
.swiper-item {
  height: 100%;
  text-align: center;
  font-size: 18px;
  background: #fff;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  background-color: #839ce6;
  // margin-right: -100px;
}
.swiper-pagination-bullet {
    background: #AABCFA;
}
.swiper-pagination-bullet-active {
    background: #FCFBFF;
    width: 9px;
    height: 9px;
}
.swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 0 6px;
}
.visa {
  // background: linear-gradient(to right, #6678D6, #4F60BE);
  background: url(../assets/visaWorld.png);
  background-size: 100%;
  background-repeat: no-repeat;
  border-radius: 10px;
  height: 22vh;
  width: 75%;
  background-color: #5163c1;
  margin-bottom: 30px;
  img {
    margin-top: 15px;
    margin-right: 15px;
    float: right;
    width: 60px;
  }
  h1 {
    margin-top: 60px;
    // margin-bottom: 4px;
    margin-left: -100px;
    letter-spacing: 1px;
    font-size: 1.5rem;
    font-weight: bold;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: #a9b5d5;
  }
  span {
    font-size: 2.3rem;
  }
}
.pickCard {
  // margin-left: -320px;
  border-radius: 10px;
  height: 22vh;
  width: 75%;
  background-color: #FB95B8;
  margin-bottom: 30px;
}
.yellowCard {
  // margin-right: -350px;
  border-radius: 10px;
  height: 22vh;
  width: 75%;
  background-color: #EBCC63;
  margin-bottom: 30px;
}
</style>
