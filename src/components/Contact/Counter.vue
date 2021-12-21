<template>
  <div class="info">
    <button @click="$emit('decrement')" >Decrement</button>
      {{count}}
    <button @click="$emit('increment')" >Increment</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Counter",
  props: {
    count: {
      type: Number,
      required: true
    },
  },
  
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.info {
    .img {
        width: 50%;
        height: auto;
    }
}
</style>