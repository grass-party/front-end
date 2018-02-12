<template>
  <main>
    <section class="hero is-info">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            안건 발제하기
          </h1>
        </div>
      </div>
    </section>
    <form>
      <div class="notification">
        Grass party에서는 사상과 표현의 다양성을 존중합니다.
        하지만 타인의 권리를 침해하거나 명예를 훼손하는 내용은 제한합니다.
        <ul>
          <li>안건은 다른 사용자 x인의 리뷰 및 동의를 얻은 이후 최종적으로 발제됩니다. </li>
          <li>15일 이내에 동의가 완료되지 못한 안건은 발제되지 않습니다</li>
          <li>동의되어 발제되는 안건은 수정 및 삭제를 할 수 없습니다. </li>
          <li>최초 리뷰 결과와 다른 내용으로 변경되는 것을 방지하고 안건에 참여한 사용자의 의견을 보호하기 위함입니다.</li>
        </ul>
      </div>
      <b-field label="안건 제목" type="is-info">
        <b-input v-model="agenda.title"
                 placeholder="안건제목을 입력해주세요."
                 requried
                 checkHtml5Validity="true">
        </b-input>
      </b-field>

      <b-field label="안건 내용" type="is-info">
        <b-input type="textarea"
            v-model="agenda.description"
            minlength="10"
            maxlength="1024"
            rows="10"
            placeholder="안건내용을 작성해주세요."
            required>
        </b-input>
      </b-field>
      <b-field class="choices" label="투표 항목" type="is-info">
        <template v-for="(choice, i) in agenda.choices">
            <input v-model.trim="choice.title"
                class="input is-info"
                :placeholder="(i + 1) + '번 문항을 입력해주세요'">
            <button type="button" class="button is-info is-medium" @click="vote">
                투표하기
            </button>    
        </template>
      </b-field>
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
