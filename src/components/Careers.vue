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
        class="
          carousel-bg

        "
        :style="`background-image:url(${item})`"
      >
        <div
          class="grad-bg flex flex-col
          items-center
          md:items-start
          md:justify-center
          justify-end
          p-3
          md:p-10"
        >
          <h2>創造奇幻世界</h2>
          <h3 class="text-white text-lg md:text-2xl mt-3">
            聊解暴雪的工作機會
          </h3>
          <button
            class="
              bg-primary
              text-xl text-white
              px-6
              py-2
              my-3
              hover:bg-opacity-80
              w-full
              sm:w-auto
            "
          >
            探索職涯
          </button>
        </div>
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
        'https://images.blz-contentstack.com/v3/assets/blte0bbc3c063f45866/blt019a41fb250fc116/5f2dd6b64eebe153cbb0921b/careers-3.webp?auto=webp&format=pjpg',
        'https://images.blz-contentstack.com/v3/assets/blte0bbc3c063f45866/blt619face5f4b56262/5f2dd6b68ea4aa55f2329d4f/careers-2.webp?auto=webp&format=pjpg',
        'https://images.blz-contentstack.com/v3/assets/blte0bbc3c063f45866/bltd71afaa448dc225a/5f2dd6b6b7dcf5546ea924da/careers-1.webp?auto=webp&format=pjpg',
        'https://images.blz-contentstack.com/v3/assets/blte0bbc3c063f45866/blt0e136100d434095e/5f2dd6b7bb238f5556376fb0/careers-4.webp?auto=webp&format=pjpg',
        'https://images.blz-contentstack.com/v3/assets/blte0bbc3c063f45866/blt69459fd45cf9dde4/5f2dd6b88ea4aa55f2329d53/careers-5.webp?auto=webp&format=pjpg',
      ],
      swiperOption: {
        loop: true,
        speed: 2000,
        autoplay: {
          delay: 3000,

          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        effect: 'fade',
        fadeEffect: {
          crossFade: true,
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
    height: 350px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
}
.grad-bg {
  background-image: linear-gradient(
    to top,
    rgb(29, 22, 14) 0%,
    transparent 100%
  );
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

</style>
