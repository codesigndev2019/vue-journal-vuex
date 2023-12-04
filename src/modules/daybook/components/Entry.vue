<template>
  <div class="entry-container mb-3 pointer p-2" @click="$router.push({name:'entry', params: {id:10}})">
    <div class="entry-title d-flex">
      <span class="text-success fd-5 fw-bold">15</span>
      <span class="mx-1 fs-3">July</span>
      <span class="mx-2 fw-ligth"> 2021, Thursday</span>
    </div>
    <div class="entry-description">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium quia
      et animi rerum perferendis! Unde corrupti velit nulla neque. Vitae
      possimus corporis dignissimos, laboriosam odio rerum suscipit accusamus
      error nemo.
    </div>
  </div>
</template>

<script>
export default {
  name: "Entry-component",
};
</script>

<style scoped lang="scss">
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;

  &:hover {
    background-color: lighten($color: grey, $amount: 45);
    transition: 0.2 all ease-in;
  }
  .entry-description {
    font-size: 12px;
  }
}
</style>
