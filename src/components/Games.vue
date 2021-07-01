<template>
  <section class="gamesZone">
    <div class="container py-10 mx-auto">
      <div class="flex justify-between items-center px-6 sm:px-18 md:px-36 mb-4">
        <h2>
          遊戲
        </h2>
        <a
          href="http://shop.battle.net/"
          class="text-primary hover:text-white"
        >瀏覽並購買遊戲</a>
      </div>
      <div class="cards flex flex-wrap justify-center">
        <div
          v-for="(card, idx) in cards"
          :key="idx"
          class="card"
        >
          <a :href="card.link"><img
            class="card-img"
            :src="card.img"
          ></a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      cards: [
        {
          img: 'https://images.blz-contentstack.com/v3/assets/blte0bbc3c063f45866/bltba6467bcebcc23c1/6022e122c6713d4e7a4d4419/fenway-game-card.webp?auto=webp&format=pjpg',
          link: 'https://diablo2.blizzard.com/zh-tw/',
        },
        {
          img: 'https://images.blz-contentstack.com/v3/assets/blte0bbc3c063f45866/bltcdaa7ff86edaacf0/5fb3dfef21b96a46dc51a7fb/game-card_overwatch2_enUS.webp?auto=webp&format=pjpg',
          link: 'https://blizzcon.playoverwatch.com/',
        },
        {
          img: 'https://images.blz-contentstack.com/v3/assets/blte0bbc3c063f45866/blt2435b34144b98c1e/5fb41dec8acca34834e6456e/game-card_overwatch_zhTW.webp?auto=webp&format=pjpg',
          link: 'https://playoverwatch.com/',
        },
        {
          img: 'https://images.blz-contentstack.com/v3/assets/blte0bbc3c063f45866/blte2169fc067e972ce/5fb41da7ae5aee579612946b/game-card_wow_zhTW.webp?auto=webp&format=pjpg',
          link: 'https://worldofwarcraft.com/',
        },
        {
          img: 'https://images.blz-contentstack.com/v3/assets/blte0bbc3c063f45866/blt5cbc4a216e5340dc/5fb41dde21b96a46dc51a841/game-card_hearthstone_zhTW.webp?auto=webp&format=pjpg',
          link: 'https://playhearthstone.com/',
        },
        {
          img: 'https://images.blz-contentstack.com/v3/assets/blte0bbc3c063f45866/bltdbbe344f14498626/5fb41e0d0100b746db953e4b/game-card_heroes_zhTW.webp?auto=webp&format=pjpg',
          link: 'https://heroesofthestorm.com/',
        },
        {
          img: 'https://images.blz-contentstack.com/v3/assets/blte0bbc3c063f45866/blt8fbbfcefb9297ac8/5f2344680ac6ce5468ceae4e/game-card-wc3-zh-tw.webp?auto=webp&format=pjpg',
          link: 'https://playwarcraft3.com/',
        },
        {
          img: 'https://images.blz-contentstack.com/v3/assets/blte0bbc3c063f45866/blt0822535a98171e01/5fb41d8eae5aee5796129469/game-card_diablo4_enUS.webp?auto=webp&format=pjpg',
          link: 'https://diablo4.blizzard.com/',
        },
        {
          img: 'https://images.blz-contentstack.com/v3/assets/blte0bbc3c063f45866/blte54a1a9d8bfb9b41/5fb43d4d46cf5a5635c5d2a9/game-card_diabloimmortal_zhTW.webp?auto=webp&format=pjpg',
          link: 'https://diabloimmortal.com/',
        },
        {
          img: 'https://images.blz-contentstack.com/v3/assets/blte0bbc3c063f45866/blt203b852e13281f46/5f234468bb238f5556376a69/game-card-d3-zh-tw.webp?auto=webp&format=pjpg',
          link: 'https://diablo3.com/',
        },
        {
          img: 'https://images.blz-contentstack.com/v3/assets/blte0bbc3c063f45866/blt581bc95967aaa605/5fb41db30100b746db953e49/game-card_starcraft2_zhTW.webp?auto=webp&format=pjpg',
          link: 'https://starcraft2.com/',
        },
        {
          img: 'https://images.blz-contentstack.com/v3/assets/blte0bbc3c063f45866/blt48a4845ea43e7c5b/5fb41dd021b96a46dc51a83f/game-card_starcraft_zhTW.webp?auto=webp&format=pjpg',
          link: 'https://starcraft.com/',
        },
        {
          img: 'https://images.blz-contentstack.com/v3/assets/blte0bbc3c063f45866/bltaa82a64a6629e7c6/6022e122c484333be943d8dd/rtro-game-card.webp?auto=webp&format=pjpg',
          link: 'https://news.blizzard.com/blizzard/23617535/',
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.gamesZone {
  background-image: url("https://d9me64que7cqs.cloudfront.net/images/common/background-generic-landscape-short.31b43a7823e13c6383e5e613b04b5b58.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 60% 50%;
}
.card {
  &-img {
    width: 240px;
    height: 320px;
    margin: 12px;
    border: 1px solid transparent;
    object-fit: cover;
    transition: transform 0.3s, border 0.4s;
    &:hover {
      transform: scale(1.03);
      border: 1px solid #009ae4;
    }
  }
}
@media screen and (max-width: 1024px) {
  .card {
    &-img {
      width: 210px;
      height: 280px;
    }
  }
}
@media screen and (max-width: 767px) {
  .card {
    &-img {
      width: 180px;
      height: 240px;
    }
  }
}
</style>
