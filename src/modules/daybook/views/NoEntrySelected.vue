<template>
  <div class="d-flex justify-content-center">
    <h1 class="align-self-center">No Journal selected</h1>
  </div>
  <FabBtn />
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  name:'no-entry', 
  components:{
    FabBtn: defineAsyncComponent(()=> import('../components/Fab.vue'))
  }
};
</script>

<style lang="scss" scoped>
div {
  height: 100%;
}
</style>
