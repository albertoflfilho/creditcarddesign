<template>
    <div class="container">
        <swiper :options="swiperOption" class="swiper-box">
            <swiper-slide class="swiper-item" >
                <div class="yellowCard" id="yellowCard">
                    <h1>{{"Yellow Card"}}</h1>
                </div>
            </swiper-slide>
            <swiper-slide class="swiper-item">
                <div class="visa">
                    <img src="../assets/visa.png"/>
                    <div class="row">
                      <div class="col-md-12"><h1><span>•••• •••• ••••</span> 9760</h1></div>
                    </div>
                    <div class="row">
                      <div class="col-md-9">
                        <h2>Name</h2>
                        <br/>
                        <!-- <p>{{ CardDetails.Card.holder }}</p> -->
                        <p>VLADYSLAV TYZUN</p>
                      </div>
                      <div class="col-md-3">
                        <h2>Expiration date</h2>
                        <p>11 / 19</p>
                      </div>
                    </div>
                </div></swiper-slide>
            <swiper-slide class="swiper-item">
              <div class="pinkCard" id="pinkCard">
                    <h1>{{"Pick Card"}}</h1>
                </div></swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
import CardDetails from './CardDetails.vue'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  data () {
    return {
      swiperOption: {
        direction: 'horizontal',
        slidesPerView: 1,
        initialSlide: 1,
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
    CardDetails,
    swiper,
    swiperSlide
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.container {
  padding: 0.5px;
  height: 240px;
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
  background: #aabcfa;
}
.swiper-pagination-bullet-active {
  background: #fcfbff;
  width: 9px;
  height: 9px;
}
.swiper-container-horizontal
  > .swiper-pagination-bullets
  .swiper-pagination-bullet {
  margin: 0 6px;
}
.visa {
  background: url(../assets/visaWorld.png);
  background-size: 100%;
  background-repeat: no-repeat;
  border-radius: 10px;
  height: 175px;
  width: 307px;
  background-color: #5163c1;
  margin-bottom: 30px;
  img {
    margin-top: 15px;
    margin-right: 15px;
    float: right;
    width: 60px;
  }
  .col-md-12 h1 {
    margin: 80px auto 2px 16px;
    float: left;
    letter-spacing: 1px;
    font-size: 1.5rem;
    font-weight: bold;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    color: #a9b5d5;
  }
  @media (min-width: 992px) {
    .col-md-12 h1 {
      margin: 55px auto 2px 16px;
    }
  }

  span {
    letter-spacing: 2px;
    font-size: 2.4rem;
  }
  .col-md-9 h2 {
    margin: 0;
    margin-left: 16px;
    margin-top: 13px;
    float: left;
    font-size: 1.1rem;
    font-weight: 600;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    color: #a9b5d5;
  }
  .col-md-9 p {
    margin: 0;
    margin-left: 16px;
    font-weight: 500;
    float: left;
    letter-spacing: 1px;
    font-size: 1.2rem;
    color: #a9b5d5;
  }
  .col-md-3 h2 {
    margin: 0;
    margin-left: 66px;
    margin-top: -10px;
    float: left;
    font-size: 1.1rem;
    font-weight: 600;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    color: #a9b5d5;
  }

  .col-md-3 p {
    margin: 0;
    margin-left: 66px;
    font-weight: 500;
    margin-top: -1px;
    float: left;
    letter-spacing: 1px;
    font-size: 1.2rem;
    color: #a9b5d5;
  }
  @media (min-width: 992px) {
    .col-md-3 h2 {
      margin: 0;
      margin-left: -25px;
      margin-top: 13px;
    }
    .col-md-3 p {
      margin: 0;
      margin-left: -25px;
    }
  }
}
.pinkCard {
  border-radius: 10px;
  height: 175px;
  width: 307px;
  background-color: #fb95b8;
  margin-bottom: 30px;
}
#pinkCard {
  height: 149px;
  margin-right: 518px;
  z-index: 10;
  padding-left: 0;
  h1 {
    color: #fb95b8;
  }
}
.yellowCard {
  border-radius: 10px;
  height: 175px;
  width: 307px;
  background-color: #ebcc63;
  margin-bottom: 30px;
}
#yellowCard {
  height: 149px;
  margin-left: 495px;
  z-index: 13;
  padding-right: 0;
  h1 {
    color: #ebcc63;
  }
  div.swiper-item.swiper-slide.swiper-slide-prev.yellowCard {
    z-index: 11;
  }
}
</style>
