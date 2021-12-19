<template>
  <div id="homeBlock">
    <h2>Home with router links and small description</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {
    
  },
});
</script>

<style lang="scss" scoped>
  #homeBlock {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: max-content;
    margin: 100px auto 200px auto;
  }
</style>
