<template>
  <TPage/>
</template>

<script>
import TPage from './components/TPage.vue'

export default {
  name: 'App',
  components: {
    TPage
  },
  mounted() {
    this.handleResize()
  },
  methods: {
    handleResize() {
      setTimeout(() => {
        const vh = window.innerHeight * 0.01
        document.documentElement.style.setProperty("--vh", `${vh}px`)
        document.documentElement.style.webkitUserSelect = "none"
      }, 500)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
}
</style>
