<template>
  <div id="app">
    <Navbar />
    <main>
      <Carousel />
      <Games />
      <Download />
      <Careers />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/NavBar.vue';
import Carousel from '@/components/Carousel.vue';
import Games from '@/components/Games.vue';
import Download from '@/components/Download.vue';
import Careers from '@/components/Careers.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Carousel,
    Games,
    Download,
    Careers,
    Footer,
  },
};
</script>

<style lang="scss">
</style>
