<template>
  <div class="info">
    <template v-if="numImages > 0 && loaded">
      <img src="@/assets/Contact/office.jpg" class="img" key="office" />
      <img :src="loadedImages[item-1].urls.regular" class="img" v-for="(item) in numImages" :key="item" />
      <!-- {{loadedImages}} -->
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from 'axios';

export default defineComponent({
  name: "ImageList",
  props: {
    numImages: {
      type: Number,
      required: true
    },
  },
  data() {
    return {
      loadedImages: [{urls: {regular: ''}}] as any,
      loaded: false
    }
  },
  methods: {
    async getUser() {
      try {
        const response = await axios.get(`https://api.unsplash.com/search/photos?page=1&query=office&client_id=${process.env.VUE_APP_UNSPLASH_ACCESS_KEY}`);
        this.loadedImages=response.data.results;
        this.loaded=true;
      } catch (error) {
        console.error(error);
      }
    }
  },
  mounted() {
    this.getUser();
  }
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