<template>
  <main class="agenda-list-view container">
    <b-tabs size="is-medium" v-model="activeTab">
      <b-tab-item label="인기">
        <agenda-item v-for="agenda in agendaList" :key="agenda.id" :agenda="agenda"></agenda-item>
      </b-tab-item>

      <b-tab-item label="최근">
        <agenda-item v-for="agenda in agendaList" :key="agenda.id" :agenda="agenda"></agenda-item>
      </b-tab-item>

      <b-tab-item label="득표 많이한 순">
        <agenda-item v-for="agenda in agendaList" :key="agenda.id" :agenda="agenda"></agenda-item>
      </b-tab-item>
    </b-tabs>
  </main>
</template>
<script>
  import {mapState} from 'vuex'
  import {ACTION} from '../store/config'
  import agendaItem from './AgendaItem'
  export default {
    data() {
      return {
        activeTab: 0
      }
    },
    components: {agendaItem},
    computed: mapState([
      'agendaList'
    ])
  }
</script>
<style lang="scss">

  .agenda-list-view {
    padding: 20px 0;

    .tabs ul {
      border: 0;
    }

    .tabs li.is-active a {
      border-bottom: 3px solid #3C4356;
      color: #3C4356;
      font-weight: bold;
    }

    .tabs li a {
      color: #ccc;
      padding-bottom: 1rem;
      padding-right: 2rem;
    }

    .tabs:not(:last-child) {
      margin-bottom: 0.2rem;
    }
  }



</style>
