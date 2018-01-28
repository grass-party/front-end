<template>
  <section id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </section>
</template>

<script>
  import AppHeader from './components/AppHeader';
  import AppFooter from './components/AppFooter';
  import {ACTION} from './store/config'

  export default {
    name: 'app',
    mounted() {
      this.$store.dispatch(ACTION.FETCH_AGENDA_LIST)
    },
    components: {AppHeader, AppFooter}
  }
</script>

<style lang="scss">
  @import url(http://api.mobilis.co.kr/webfonts/css/?fontface=NanumGothicWeb);
  @import "~bulma/sass/utilities/_all";

  // Set your colors
  $primary: #999;
  $primary-invert: findColorInvert($primary);
  $twitter: #4099FF;
  $twitter-invert: findColorInvert($twitter);

  // Setup $colors to use as bulma classes (e.g. 'is-twitter')
  $colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert),
    "twitter": ($twitter, $twitter-invert)
  );

  // Links
  $link: $primary;
  $link-invert: $primary-invert;
  $link-focus-border: $primary;

  // Import Bulma and Buefy styles
  @import "~bulma";
  @import "~buefy/src/scss/buefy";

  body {
    font-family: 'NanumGothic', '나눔고딕', 'NanumGothicWeb', '맑은 고딕', 'Malgun Gothic', Dotum;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #111;
    color: #fff;
  }

  .title,
  .subtitle,
  .navbar-item, .navbar-link {
    color: #fff;
    font-weight: 800;
  }

  a.navbar-item:hover, a.navbar-item.is-active, a.navbar-link:hover, a.navbar-link.is-active {
    background-color: transparent;
  }

</style>
