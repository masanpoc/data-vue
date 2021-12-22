<template>
  <div id="imageList" class="info">
    <template v-if="numImages > 0 && loaded">
      <img src="@/assets/Contact/office.jpg" class="img" key="office" />
      <!-- <img :src="image.url" class="img" v-for="(image) of loadedImages" :key="image.url" /> -->
      <img src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODI4NDR8MHwxfHNlYXJjaHwxMXx8b2ZmaWNlfGVufDB8fHx8MTY0MDE2Nzg0MQ&ixlib=rb-1.2.1&q=80&w=1080" class="img" />
      <img src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODI4NDR8MHwxfHNlYXJjaHwxMnx8b2ZmaWNlfGVufDB8fHx8MTY0MDE2Nzg0MQ&ixlib=rb-1.2.1&q=80&w=1080" class="img" />
      <button class="styled-button" @click="getNextImage">Show More</button>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from 'axios';

interface Response {
  urls: {
    regular: string;
  }
}

interface Result {
  url: string;
}

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
      loadedImages: [] as Result[],
      loaded: true,
      page: 1
    }
  },
  methods: {
    async getImages() {
      try {
        this.loaded=false;
        const response = await axios.get(`https://api.unsplash.com/search/photos?page=${this.page}&query=office&client_id=${process.env.VUE_APP_UNSPLASH_ACCESS_KEY}`);
        let nestedResultsArr = response.data.results;
        let extractedResultsArr = nestedResultsArr.map((el:Response)=>{
          return {
            url: el.urls.regular
          }
        });
        extractedResultsArr.forEach((el:Result)=>{this.loadedImages.push(el)});
        this.loaded=true;
      } catch (error) {
        console.error(error);
      }
    },
    getNextImage() {
      this.page+=1;
      this.getImages();
    }
  },
  mounted() {
    // this.getImages();
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

#imageList {
    width: 50vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    .img {
        width: 100%;
        height: auto;
    }
    .styled-button {
      padding: 10px 20px;
      border: none;
      box-shadow: 0 0 1px 0px rgb(0, 0, 0);
      border-radius: 5px;
      cursor: pointer;
      background: #ffffe0;
      width: max-content;
      height: max-content;
      margin: auto;
    }
}
</style>