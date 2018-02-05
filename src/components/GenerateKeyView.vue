<template>
  <main>
    <section class="hero is-info">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            키 발급
          </h1>
        </div>
      </div>
    </section>
    <form>
      <div class="notification">
        <ul>
          <li>Grassparty에서 안건을 등록하거나 투표를 하기 위해서는 키 발급이 필요합니다.</li>
          <li>발급된 private key를 안전한 장소에 백업하고, 안건 등록 및 투표시에 제출하십시오.</li>
          <li>자세한 설명은 xxxxx를 참고하세요.</li>
        </ul>
      </div>
      <button type="button" class="button is-info is-medium" @click="publishKey">
        key 생성
      </button>
      <button type="button" class="button is-info is-medium" @click="sendPublickey">
        Publickey 전송하기
      </button>
    </form>
    <b-loading :active.sync="isLoading"></b-loading>
  </main>
</template>
<script>
  import {mapActions} from 'vuex'
  import {ACTION} from '../store/config'
  import openpgp from 'openpgp'
  import FileSaver from 'file-saver'

  export default {
    data() {
      return {
        publickey: '',
        privatekey: '',
        isLoading: false,
      }
    },
    methods: {
      publishKey() {
        this.isLoading = true
        let options = {
          userIds: [{name: 'Jon Smith', email: 'jon@example.com'}],
          numBits: 4096,

        };
        var $vm = this
        openpgp.generateKey(options).then((key) => {
          $vm.privatekey = key.privateKeyArmored
          $vm.publickey = key.publicKeyArmored
          console.log($vm.publickey)
          $vm.isLoading = false
          alert('키 생성이 완료되었습니다')
          var file = new File([this.privatekey], "private_key.txt", {type: "text/plain;charset=utf-8"});
          FileSaver.saveAs(file);
        });
      },
      sendPublickey() {
        if (!this.publickey) {
          alert("키 생성을 먼저 해야 합니다")
          return
        }
        this.$store.dispatch(ACTION.GENERATE_PUBLICKEY, {
          pubkey: this.publickey
        })
      },
      loadPrivatekey() {

      },
    }
  }
</script>
<style>
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
