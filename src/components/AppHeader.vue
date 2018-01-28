<template>
  <header class="navbar header is-transparent">
    <div class="container">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <strong>Grass party</strong>
        </router-link>
        <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/">
            Home
          </router-link>
          <router-link class="navbar-item" to="/agenda">
            Agenda
          </router-link>
          <router-link class="navbar-item" to="/generateKey">
            Generate Key
          </router-link>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" href="/">
              Etc
            </a>
            <div class="navbar-dropdown is-boxed">
              <router-link class="button navbar-item" to="/create">
                <span>New</span>
              </router-link>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            {{user.name}}
            <div class="field is-grouped">
              <p class="control" v-if="!isSigned">
                <router-link class="button" to="/signin">
                  <span>Signin</span>
                </router-link>
              </p>
              <p class="control" v-if="isSigned">
                <button class="button" @click="signOut">
                  <span>Signout</span>
                </button>
              </p>
              <p class="control">
                <router-link class="button is-success" to="/create">
                  <span>New</span>
                </router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
  import {mapState, mapActions, mapGetters} from 'vuex'

  export default {
    computed: {
      ...mapState(['user']),
      ...mapGetters([
        'isSigned'
      ])
    },
    methods: {
      ...mapActions(['signOut'])
    }
  }

</script>
<style>

</style>
