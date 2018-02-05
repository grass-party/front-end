<template>
  <header class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <router-link class="navbar-item site-title" to="/">
            Grass Party
          </router-link>
          <span class="navbar-burger burger" data-target="navbarMenuHeroB">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroB" class="navbar-menu">
          <div class="navbar-end">
            <router-link class="navbar-item" to="/agendas">
              안건목록
            </router-link>
            <router-link class="navbar-item" to="/create">
              안건등록
            </router-link>
            <router-link class="navbar-item" to="/generateKey">
              Generate Key
            </router-link>
            <span class="navbar-item">
              <p class="control" v-if="!isSigned">
                <router-link class="button" to="/signin">
                  <span>Sign in</span>
                </router-link>
              </p>
              <p class="control" v-if="isSigned">
                <button class="button" @click="signOut">
                  <span>Sign out</span>
                </button>
              </p>
            </span>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
  import {mapState, mapActions, mapGetters} from 'vuex'

  export default {
    computed: {
      ...mapState(['user']),
      ...mapGetters(['isSigned'])
    },
    methods: {
      ...mapActions(['signOut'])
    }
  }

</script>
<style scoped>
  header {
    position: sticky;
    background: #000;
    opacity: 0.7;
    top: 0;
    z-index: 1;
  }

  .site-title {
    font-size: 22px;
    font-weight: 800;
  }

  .navbar {
    background: #000;
  }

</style>
