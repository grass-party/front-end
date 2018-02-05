<template>
  <main>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            안건목록
          </h1>
          <agenda-item v-for="agenda in agendaList" :key="agenda.id" :agenda="agenda"></agenda-item>    
        </div>
      </div>
    </section>
  </main>
</template>
<script>
  import {mapState} from 'vuex'
  import {ACTION} from '../store/config'
  import agendaItem from './AgendaItem'
  export default {
    components: {agendaItem},
    computed: mapState([
      'agendaList'
    ])
  }
</script>
<style>
</style>
