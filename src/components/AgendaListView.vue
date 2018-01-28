<template>
  <div>
    <div v-for="agenda in agendaList" :key="agenda.id">{{agenda.title}}</div>
  </div>
</template>
<script>

  import {mapState} from 'vuex'
  import {ACTION} from '../store/config'

  export default {
    computed: mapState([
      'agendaList'
    ])
  }
</script>
<style>
</style>
