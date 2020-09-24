<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/cats">Cats</router-link> |
      <router-link to="/dogs">Dogs</router-link> |
      <button @click="redirect">Pets</button>
    </div>
    <b-container>
      <router-view/>
    </b-container>
  </div>
</template>
<script>
export default {
  methods: {
    redirect () {
      this.$router.push({
        name: 'Pets',
        params: {
          names: localStorage.selected + ',' + localStorage.selectedDog
        }
      }).catch(err => console.log(err.message))
    }
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
button{
  padding: 0;
  outline: none !important;
  border: none;
  font-weight: bold;
  color: #2c3e50;
}
button:active,
button:focus {
  color: #42b983;
}
button:hover{
  text-decoration: underline
}
</style>
