<template>
  <div>
    <div>google id로 로그인</div>
    <button class="el-col-2" @click="signedIn">로그인</button>
  </div>
</template>
<script>
  import {mapActions} from 'vuex'

  export default {
    data() {
      return {}
    },
    methods: {
      ...mapActions [{}],
      onGoogleSignIn(googleUser) {
        console.log(googleUser)
        const profile = googleUser.getBasicProfile() // etc etc
        const user = {
          id: profile.getId(),
          name: profile.getName(),
          email: profile.getEmail(),
          token: googleUser.getAuthResponse().id_token,
          provider: 'google'
        };
        console.log(user);
        this.$store.commit('setUser', user)
      },
      signedIn() {
        let googleAuth = gapi.auth2.getAuthInstance();
        console.log(googleAuth)
        googleAuth.signIn().then(() => {
          this.onGoogleSignIn(googleAuth.currentUser.get())
        });
      }
    }
  }
</script>
<style>

</style>
