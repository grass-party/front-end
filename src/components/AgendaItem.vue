<template>
    <router-link to="/agenda" tag="div">
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
