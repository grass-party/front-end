<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
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

#app {
  font-family: '나눔고딕', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
