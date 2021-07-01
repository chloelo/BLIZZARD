<template>
  <footer class="text-white flex flex-col items-center px-2 pt-10 pb-20 text-center">
    <a class="flex items-center justify-center mb-3">
      <span class="material-icons"> public </span><sapn>繁體中文</sapn><span class="material-icons"> unfold_more </span>
    </a>
    <a
      href="https://www.blizzard.com/"
    ><img
      src="@/assets/images/logo.png"
    ></a>
    <ul class="my-5">
      <li><a href="https://careers.blizzard.com/">工作機會</a></li>
      <li><a href="https://www.blizzard.com/company/about/">關於</a></li>
      <li><a href="https://support.blizzard.com/">客服支援</a></li>
      <li>
        <a href="http://tw.blizzard.com/company/about/contact.html">聯繫我們</a>
      </li>
      <li><a href="https://blizzard.gamespress.com/">媒體報導</a></li>
      <li><a href="https://develop.battle.net/">API</a></li>
      <li><a href="https://www.blizzard.com/site-map">網站地圖</a></li>
    </ul>
    <p>
      一個程式連結所有遊戲：<a
        class="text-primary"
        href="https://www.blizzard.com/apps/battle.net/desktop"
      ><img
        class="inline-block"
        src="@/assets/images/icon-battle.png"
      >
        Battle.net 桌面應用程式</a>
    </p>
    <p class="text-xs mt-5">
      ©2021 美商暴雪娛樂股份有限公司（BLIZZARD ENTERTAINMENT, INC.）版權所有。
    </p>
    <p class="text-xs">
      在此提及的所有<a
        href="https://www.blizzard.com/legal/b04001c4-dc81-480d-a475-5e276e241e4f/"
      >商標</a>是其各自所有人的財產。
    </p>
    <ul class="text-xs mt-2">
      <li>
        <a
          href="https://www.blizzard.com/zh-tw/legal/5228219c-6411-4f2f-a45b-9399069538ea/"
        >隱私</a>
      </li>
      <li><a href="https://www.blizzard.com/zh-tw/legal">法律聲明</a></li>
      <li>
        <a
          href="https://www.blizzard.com/zh-tw/legal/326d5f1a-f235-4a8c-91e9-d396f31dd7fa/"
        >條款</a>
      </li>
      <li><a href="https://www.blizzard.com/cookies">COOKIE 政策</a></li>
      <li>
        <a href="https://www.blizzard.com/cookies#settings">COOKIE 設定</a>
      </li>
    </ul>
  </footer>
</template>
<style lang="scss" scoped>
footer {
  background-color: #002650;
  a {
    cursor: pointer;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }
  li{
    display: inline-block;
  }
  li + li {
    &:before {
      content: "";
      display: inline-block;
      height: 10px;
      width: 1px;
      background-color: rgba(255, 255, 255, 0.3);
      margin: 0 15px;
      pointer-events: none;
    }
  }
}
</style>
