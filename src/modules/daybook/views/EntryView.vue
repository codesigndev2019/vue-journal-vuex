<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
      <span class="text-success fd-3 fw-bold">15</span>
      <span class="mx-1 fs-3">July</span>
      <span class="mx-2 fs-4 fw-ligth"> 2021, Thursday</span>
    </div>
    <div>
      <button class="btn btn-danger">
        Delete
        <i class="fa fa-trash-alt"></i>
      </button>
      <div class="btn btn-primary">
        Upload photo
        <i class="fa fa-upload"></i>
      </div>
    </div>
  </div>
  <hr>
  <div class="d-flex flex-column px-3 h-75">
    <textarea placeholder="What happened today? "></textarea>
  </div>
  <Fab icon="fa-save" />
  <img src="https://purepng.com/public/uploads/large/landscape-prf.png" alt="entrypic">
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  name: "Entry-View",
  components:{
    Fab: defineAsyncComponent(()=> import('../components/Fab.vue'))
  }
};
</script>

<style lang="scss" scoped>
textarea{
    font-size: 20px;
    border: none;
    height: 100%;
    &:focus{
        outline: none;
    }
}

img{
    width: 200px;
    position: fixed;
    bottom:150px; 
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color:#000000, $alpha:0.2);
}
</style>
