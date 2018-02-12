<template>
    <router-link :to="'/agendas/' + agenda.id" tag="div">
        {{ agenda.title }}
    </router-link>
</template>
<script>
  export default {
      props: ['agenda'],
  }
</script>
<style>
</style>
