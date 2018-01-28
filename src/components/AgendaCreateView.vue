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
        <b-input v-model="title"
                 placeholder="안건제목을 입력해주세요."
                 requried
                 checkHtml5Validity="true">
        </b-input>
      </b-field>

      <b-field label="안건 내용" type="is-info">
        <b-input type="textarea"
                 v-model="description"
                 minlength="10"
                 maxlength="1024"
                 rows="10"
                 placeholder="안건내용을 작성해주세요."
                 required>
        </b-input>
      </b-field>

      <b-field label="키워드" type="is-info">
        <b-input v-model="tag"
                 placeholder="연관 키워드를 입력해 주세요."
                 requried
                 checkHtml5Validity="true">
        </b-input>
      </b-field>

      <b-field>
        <b-upload v-model="files">
          <a class="button is-primary">
            <b-icon icon="upload" pack="fa"></b-icon>
            <span>사진 삽입</span>
          </a>
        </b-upload>
        <div v-if="files && files.length">
                <span class="file-name">
                    {{ files[0].name }}
                </span>
        </div>
      </b-field>
      <b-field class="choices" label="투표 항목" type="is-info">
        <input v-for="(choice, i) in choices" :key="i" v-model.trim="choice.title"
               class="input is-info"
               v-focus
               :placeholder="(i + 1) + '번 문항을 입력해주세요'"
               @keyup.tab.stop.prevent
               @keyup.enter="addChoice(choice.content)">
      </b-field>
      <button type="button" class="button is-info is-medium" @click="createAgenda">
        등록하기
      </button>
    </form>
  </main>
</template>
<script>
  import {mapActions} from 'vuex'
  import {ACTION} from '../store/config'

  export default {
    data() {
      return {
        title: '',
        description: '',
        tag: '',
        files: [],
        choices: [{
          title: '',
          order: 1
        }]
      }
    },
    methods: {
      addChoice(content) {
        if (this.choices.filter((c) => !c.title).length === 0) {
          this.choices.push({
            title: '',
            order: this.choices.length + 1
          });
          console.log(this.$el)
          // this.$el.find('.choices input:last-child').focus();
        }
      },
      createAgenda() {
        if (!this._checkValid()) {
          return;
        }
        this.$store.dispatch(ACTION.CREATE_AGENDA, {
          title: this.title,
          description: this.description,
          tag: this.tag,
          files: this.files,
          choices: this.choices
        }).then(() => {
          this.$toast.open({
            message: 'Create Agenda Success',
            type: 'is-success'
          })
          this.$router.push('/agendas')
        }, (errCode) => {
          this.$toast.open({
            message: errCode,
            type: 'is-danger'
          })
        });
        console.log(this, this._data)
      },
      _checkValid() {
        return true;
      }
    },
    directives: {
      focus: {
        inserted: function (el) {
          el.focus()
        }
      }
    }
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
