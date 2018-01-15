<template>
<div id="navbarExampleTransparentExample" class="navbar-menu">
    <div>{{agendaList}}</div>
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
  