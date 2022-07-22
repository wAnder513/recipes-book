<template>
  <nav>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  </nav>
  <router-view />
</template>

<script>
import { mapActions } from 'vuex'

export default {
  created () {
    this.getRecipes()
  },
  methods: {
    ...mapActions(['getRecipes'])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
