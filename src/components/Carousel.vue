<template>
  <swiper
    ref="mySwiper"
    :options="swiperOption"
  >
    <swiper-slide
      v-for="(item, index) in myArray"
      :key="index"
    >
      <div
        class="carousel-bg flex flex-col items-center md:items-start justify-end p-3 md:p-10"
        :style="`background-image:url(${item.img})`"
      >
        <img

          src="https://images.blz-contentstack.com/v3/assets/blte0bbc3c063f45866/bltddfa818a27d89318/60d51154ad189d64efcca0b8/BLIZ_BNetSummer_Logo_768x336_BS_zhTW.webp?format=png"
          alt="Battle.net 夏日特賣。最高 33 折優惠至 7 月 12 日止"
          class="swiper-banner"
        >
        <h2 class="swiper-title font-bold my-4">
          {{ item.title }}
        </h2>
        <button class="bg-primary border-2 border-blue-400 text-white px-10 py-2 text-xl mb-8 hover:bg-opacity-80">
          立即購買
        </button>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>

// eslint-disable-next-line import/no-extraneous-dependencies
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

export default {
  name: 'Carousel',
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      myArray: [
        {
          img: 'https://images.blz-contentstack.com/v3/assets/blte0bbc3c063f45866/bltccedcb04186b9ebe/60cd086567d3385db9b8029c/OW_BNetSummer_BlizzardHomepage-Desktop_2500x514_BS.webp?auto=webp&format=pjpg',
          title: '別錯過熱賣商品',
        },
      ],
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        direction: 'horizontal',
        //  顯示分頁
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        // 箭頭
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
};
</script>
<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  .carousel-bg {
    height: 514px;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
.swiper-wrapper {
  position: relative;
}
.swiper-banner {
  width:230px;
  height: auto;
}
@media screen and (max-width: 767px) {
  .swiper-container {
    .carousel-bg {
      height: 480px;
    }
  }
}
</style>
