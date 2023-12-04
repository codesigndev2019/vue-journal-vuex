<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <h1>Hola</h1>

    <button class="btn btn-primary" @click="goDaybook" >1</button>
    <button class="btn btn-secondary" >2</button>
    <button class="btn btn-success" >3</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
  methods:{
    goDaybook(){
      this.$router.push({name:'no-entry'})
    }
  }
};
</script>
