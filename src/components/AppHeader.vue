<template>
<header class="navbar header is-transparent">
    <div class="container">
        <div class="navbar-brand">
            <router-link to="/" class="navbar-item">
                <strong>Grass party</strong>
            </router-link>
            <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
            <span></span>
            <span></span>
            <span></span>
            </div>
        </div>
        <div id="navbarExampleTransparentExample" class="navbar-menu">
            <div class="navbar-start">
            <router-link class="navbar-item" to="/">
                Home
            </router-link>
            <router-link class="navbar-item" to="/agenda">
                Agenda
            </router-link>
            <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link" href="/">
                Etc
                </a>
                <div class="navbar-dropdown is-boxed">
                <a class="navbar-item" href="/documentation/overview/start/">
                    Overview
                </a>
                <a class="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
                    Modifiers
                </a>
                <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                    Columns
                </a>
                <a class="navbar-item" href="https://bulma.io/documentation/layout/container/">
                    Layout
                </a>
                <a class="navbar-item" href="https://bulma.io/documentation/form/general/">
                    Form
                </a>
                <hr class="navbar-divider">
                <a class="navbar-item" href="https://bulma.io/documentation/elements/box/">
                    Elements
                </a>
                <a class="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
                    Components
                </a>
                </div>
            </div>
            </div>

            <div class="navbar-end"> 
            <div class="navbar-item">
                <div class="field is-grouped">
                <p class="control">
                    <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://localhost:4000" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=http://localhost:4000&amp;via=jgthms">
                    <span class="icon">
                        <i class="fa fa-google"></i>
                    </span>
                    <span>
                        Signin
                    </span>
                    </a>
                </p>
                <p class="control">
                    <router-link class="button is-success" to="/create">
                    <span>New</span>
                    </router-link>
                </p>
                </div>
            </div>
        </div>
    </div>
  </div>
</header>
</template>
<script>

</script>
<style>

</style>