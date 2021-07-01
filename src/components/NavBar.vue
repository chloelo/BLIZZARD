<template>
  <div>
    <div
      ref="sidebar"
      class="sidenav w-0 md:hidden bg-primary-dark"
    >
      <a
        href="javascript:void(0)"
        class="closebtn"
        @click.prevent="toggleNav(0)"
      >&times;</a>
      <!-- <div class="logo text-primary text-4xl text-center mb-4">
        BLIZZARD
      </div> -->
      <a
        class="logo-sidebar justify-center mb-4"
        href="https://www.blizzard.com/"
      ><img
        src="@/assets/images/logo-sidebar.png"
      ></a>
      <div class="mainNav mb-6">
        <a>首頁</a>
        <a
          @click="isOpen1 = !isOpen1"
        ><span>遊戲</span>
          <span
            v-if="isOpen1"
            class="material-icons"
          > expand_less </span><span
            v-else
            class="material-icons"
          > keyboard_arrow_down </span></a>
        <a>商店</a>
        <a>最新消息</a>
        <a
          @click="isOpen2 = !isOpen2"
        >電子競技
          <span
            v-if="isOpen2"
            class="material-icons"
          > expand_less </span><span
            v-else
            class="material-icons"
          > keyboard_arrow_down </span></a>
      </div>
      <a>客服支援</a>
      <a>帳號</a>
      <a>我的禮物</a>
      <a>工作機會</a>
      <a>公司介紹</a>
    </div>
    <div
      ref="overlay"
      class="overlay"
    />
    <header
      class="
        relative
        bg-black
        px-5
        py-2
        flex
        justify-between
        md:justify-start
        items-center
      "
    >
      <span
        class="ham md:hidden text-2xl cursor-pointer text-primary"
        @click.prevent="toggleNav(1)"
      >&#9776;</span>
      <!-- <a class="logo text-primary text-xl inline-block mx-auto md:mx-2">
        BLIZZARD
      </a> -->
      <a
        class="logo-nav inline-block mx-auto md:mx-2"
        href="https://www.blizzard.com/"
      ><img
        src="@/assets/images/logo-nav.png"
      ></a>
      <nav class="hidden md:flex text-gray-300 ml-3">
        <a
          @click="isOpen1 = !isOpen1"
        ><span>遊戲</span>
          <span
            v-if="isOpen1"
            class="material-icons"
          > expand_less </span><span
            v-else
            class="material-icons"
          > keyboard_arrow_down </span></a>
        <a>商店</a>
        <a>最新消息</a>
        <a
          @click="isOpen2 = !isOpen2"
        >電子競技
          <span
            v-if="isOpen2"
            class="material-icons"
          > expand_less </span><span
            v-else
            class="material-icons"
          > keyboard_arrow_down </span></a>
      </nav>
      <nav class="hidden md:flex ml-auto">
        <a>客服支援</a>
        <a
          @click="isOpen3 = !isOpen3"
        >我的帳號
          <span
            v-if="isOpen3"
            class="material-icons"
          > expand_less </span><span
            v-else
            class="material-icons"
          > keyboard_arrow_down </span></a>
      </nav>
      <a
        class="md:hidden text-primary"
      ><span class="material-icons"> person </span></a>
    </header>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isOpen1: false,
      isOpen2: false,
      isOpen3: false,
    };
  },
  mounted() {
    this.$refs.overlay.style.display = 'none';
  },
  methods: {
    toggleNav(el) {
      this.$refs.sidebar.style.width = el === 0 ? '0' : '320px';
      this.$refs.overlay.style.display = el === 0 ? 'none' : '';
      if (el === 1) {
        document.documentElement.style.overflow = 'hidden';
      } else {
        document.documentElement.style.overflow = '';
      }
    },
  },
};
</script>
<style lang="scss">
.sidenav {
  height: 100vh;
  width: 320px;
  overflow-y: hidden;
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;

  overflow-x: hidden;
  transition: width 0.3s cubic-bezier(0.2, 0.4, 0.1, 0.1);
  padding-top: 60px;
  .mainNav {
    a {
      border-top: 1px solid rgb(58, 58, 58);
      &:last-child {
        border-bottom: 1px solid rgb(58, 58, 58);
      }
    }
  }
}

.sidenav a,
header a {
  cursor: pointer;

  text-decoration: none;

  color: #818181;
  display: flex;
  transition: 0.3s;
  align-items: center;
}
.sidenav a {
  padding: 8px 8px 8px 24px;
  font-size: 18px;
}
header a {
  padding: 5px;
}
.sidenav a:hover,
header a:hover {
  color: #f1f1f1;
}
.sidenav .logo-sidebar{
  padding: 0;
}
.sidenav .closebtn {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 30px;
  padding: 0px 14px;
}
// .ham {
//   left: 10px;
//   top: 50%;
//   transform: translateY(-50%);
// }
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 2;
}

@media screen and (max-width: 767px){
  .logo-nav{
    img{
      width: 80%;
    }
  }
}
@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
</style>
