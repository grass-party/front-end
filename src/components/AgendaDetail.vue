<template>
  <main>
    <section class="hero is-info">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{ agenda.title }}
          </h1>
        </div>
      </div>
    </section>

    <form>
      <div class="notification">
        <div class="content">
            <h3>
                {{ agenda.title }}
            </h3>
            <p>
                {{ agenda.description }}
            </p>
        </div>
      </div>
      
      <template v-for="(choice, i) in agenda.choices">
        <div class="field is-grouped">
          <h1 class="control is-expanded">
            {{ choice.title }}
          </h1>
          <p class="control">
            <a class="button is-info" @click="vote">
              투표하기
            </a>
          </p>
        </div>
      </template>
    </form>
  </main>
</template>
<script>
  import {mapState} from 'vuex'
  import {mapActions} from 'vuex'
  import {ACTION} from '../store/config'

  export default {
    data() {
      return {
          agenda: {
              title:"",
          }
      }
    },
    computed: mapState([
      'currentAgenda'
    ]),
    created(){
      this.fetchData()
    },
    methods: {
      fetchData () {
        this.$store.dispatch(ACTION.FETCH_AGENDA, {
           id: this.$route.params.id,
        }).then((response) => {
          this.agenda = response.data
        }, (errCode) => {
          this.$toast.open({
            message: errCode,
            type: 'is-danger'
          })
        });
      },
      vote () {

      }
    },
  }
</script>
<style lang="scss" scoped>
  form {
    margin: 30px 1.5rem;
  }

  .choices {
    input {
      margin: 5px 0;
    }
  }

  @media screen and (min-width: 1024px) {
    form {
      max-width: 960px;
      width: 960px;
      margin: 30px auto;
    }
  }
</style>
