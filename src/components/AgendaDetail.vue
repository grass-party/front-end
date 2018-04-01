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
      <ul class="field">
        <li class="choice" v-for="(choice, i) in agenda.choices">
          <b-radio v-model="agenda.choice"
                      size="is-medium"
                      :native-value="choice.order">
            <span>{{choice.order}}</span>.&nbsp;
            <span class="choice-title">{{ choice.title }}</span>
          </b-radio>
        </li>
      </ul>
      <a class="button is-info" :disabled="!agenda.choice" @click="vote({id: agenda.id, choice: agenda.choice})">
        투표하기
      </a>
    </form>
  </main>
</template>
<script>
  import {mapState, mapActions} from 'vuex'
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
      vote (payload) {
        this.$store.dispatch(ACTION.VOTE, payload).then(() => {
          this.$toast.open({
            message: '투표완료',
            type: 'is-success'
          });
          this.$router.push('/agendas')
        }, (errCode) => {
          this.$toast.open({
            message: errCode,
            type: 'is-danger'
          })
        });
      }
    },
  }
</script>
<style scoped>
  form {
    margin: 30px 1.5rem;
  }

  .choice {
    margin: 10px 0;
  }

  @media screen and (min-width: 1024px) {
    form {
      max-width: 960px;
      width: 960px;
      margin: 30px auto;
    }
  }

  .b-radio {
    align-items: flex-start;
  }

  .b-radio.radio >>> .check {
    flex: none;
  }
</style>
