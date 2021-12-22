<template>
  <div id="mediaBlock">
    <h1 id="heading"><u>Gallery</u></h1>
    <!-- <counter :count="counter" @increment="increment" @decrement="decrement" /> -->
    <image-list :numImages="counter"  />
  </div>
</template>

<script lang="ts"> 
import { defineComponent } from "vue";
import ImageList from "@/components/Contact/ImageList.vue";
// import Counter from "@/components/Contact/Counter.vue";

export default defineComponent({
  name: "MediaAndAnimation",
  components: {
    ImageList,
    // Counter
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

<style lang="scss" scoped>
  #mediaBlock {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: max-content;
    margin: 100px auto 200px auto;
    #heading {
      margin-bottom: 60px;
    }
  }
</style>
