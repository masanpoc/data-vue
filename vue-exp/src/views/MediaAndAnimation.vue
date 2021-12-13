<template>
  <div class="contact">
    <h1>Gallery</h1>
    <counter :count="counter" @increment="increment" @decrement="decrement" />
    <image-list :numImages="counter"  />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ImageList from "@/components/Contact/ImageList.vue";
import Counter from "@/components/Contact/Counter.vue";

export default defineComponent({
  name: "MediaAndAnimation",
  components: {
    ImageList,
    Counter
  }, 
  data() {
    return {
      trArr: ['str1'],
      counter: 1 
    };
  },
  methods: {
    increment() {
      this.counter++
    },
    decrement() {
      this.counter--
    }
  },
  updated() {
    console.log(this.counter);
  }
});
</script>
