<template>
  <section class="downloadZone px-4 py-10 md:p-14 flex flex-col xl:flex-row relative items-center xl:justify-center">
    <div
      class="svg-bg-wrap hidden xl:block"
      aria-hidden="true"
    >
      <div class="svg-bg">
        <svg
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 600 580.4"
        >
          <path
            d="M473.5 197.6c-75.9-35.1-185.1-57.4-287.8-49.1 5.1-34 17.9-57.7 38.7-62.7 28.7-6.9 60 12 89.8 46.3 19.5 2.5 42.7 7 58.9 10.7C318.7 40.5 245.7-16.8 190.2 4.4 148 20.5 126.4 78.6 129 156.7c-55 11.7-97.9 32.5-125.4 62.4-1.4 1.6-4.5 5.7-3.4 7.6.9 1.5 3.6-.2 4.9-1 31.8-22.3 72.6-34.3 125.7-41.9 7.6 83.3 42.8 189 101.4 273.8-32 12.6-58.9 13.4-73.6-2.2-20.3-21.4-19.6-58-4.8-101-7.6-18.2-15.3-40.5-20.1-56.3-61.6 98.3-74.8 190.2-28.7 227.7 35.1 28.5 96.2 18.2 162.5-23.1 37.6 41.8 77.1 68.5 116.7 77.3 2.1.4 7.2 1.1 8.3-.8.9-1.5-2-3.1-3.3-3.7-35.2-16.4-66-45.7-99.1-87.9 68.4-48.2 142.3-131.6 186.4-224.7 26.9 21.5 41 44.3 34.9 64.9-8.4 28.3-40.4 46-85.1 54.6-12 15.7-27.4 33.5-38.7 45.6 115.8 4 202-30.5 211.4-89.1 7.2-44.6-32.4-92.4-101.3-129.2 17.4-53.5 20.8-101 8.6-139.7-.7-2-2.6-6.8-4.9-6.8-1.7 0-1.7 3.3-1.6 4.7 3.6 38.6-6.3 80-26.3 129.7zM260.2 444.3c-49-78.6-77.2-171.2-77.1-264.8 92.6-3.1 186.9 18.7 267.9 65.7-43.6 81.7-109.6 152.5-190.8 199.1z"
          />
        </svg>
      </div>
    </div>
    <div class="flex-1 text-white">
      <h2 class="mb-5">
        下載 Battle.net
      </h2>
      <ul class="text-xl lg:text-3xl">
        <li class="flex items-center mb-3">
          <span class="material-icons"> apps </span>
          <span class="ml-2">把你的遊戲整合在一起</span>
        </li>
        <li class="flex items-center mb-3">
          <span class="material-icons"> groups </span>
          <span class="ml-2">和好友保持聯繫</span>
        </li>
        <li class="flex items-center mb-3">
          <span class="material-icons"> card_giftcard </span>
          <span class="ml-2">購買數位遊戲和商品</span>
        </li>
      </ul>
      <div class="my-5 hidden xl:flex">
        <button class="bg-primary text-xl text-white px-6 py-2 flex items-center hover:bg-opacity-80">
          <span class="mr-2 ">下載 windows 版本</span>
          <svg
            class="svg-windows"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
          >
            <path
              d="M30.423 51.603l24.533 3.442V33.677H30.423zM54.956 30.65V8.955l-24.533 3.662V30.65zM9.044 33.677v14.927l18.352 2.575V33.677zM27.396 13.069l-18.352 2.74V30.65h18.352z"
            />
          </svg>
        </button>
        <button class="btn-outline ml-3 px-6 py-2 text-xl hover:bg-primary hover:text-white">
          了解詳情
        </button>
      </div>
      <p class="text-xl hidden xl:block">
        也有 <a
          class="text-primary underline hover:text-white"
          href="https://www.blizzard.com/apps/battle.net/mobile"
        >行動應用程式</a>
      </p>
    </div>
    <img
      class="download-banner flex-1 my-5"
      src="https://images.blz-contentstack.com/v3/assets/blte0bbc3c063f45866/blt8958fc8c2e804f39/605b79277d31670cde6a103d/zhtw.webp?auto=webp&format=pjpg"
    >
    <div class="xl:hidden text-center">
      <button class="bg-primary text-xl text-white px-6 py-2 my-3 hover:bg-opacity-80">
        了解詳情
      </button>
      <p class="text-white text-xl">
        也有 <a
          class="text-primary underline hover:text-white"
          href="https://www.blizzard.com/apps/battle.net/mobile"
        >行動應用程式</a>
      </p>
    </div>
  </section>
</template>
<style lang="scss">
.downloadZone {
  background-image: url("https://images.blz-contentstack.com/v3/assets/blte0bbc3c063f45866/bltc2ad99dbedeb258e/5fb7ee280100b746db953f4e/DesktopBG_Image.webp?auto=webp&format=pjpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  svg {
    display: inline-block;
    fill: currentColor;
    pointer-events: none;
  }
  .svg-windows {
    height: 1.5em;
    width: 1.5em;
  }
  .svg-bg-wrap {
    position: absolute;
    top: 50%;
    right: 380px;
    transform: translate(-50%, -50%);
    color: #148eff;
    // font-size: 5rem;
    opacity: 0.3;
  }
  .svg-bg {

    height: 18em;
    width: 18em;
  }
  .material-icons {
    color: #009ae4;
  }
  .btn-outline {
    border: 1px solid #009ae4;
    color: #009ae4;
  }
}
.download-banner {
  max-width: 590px;
  width: 100%;
  position: relative;
  z-index: 1;
}
</style>
