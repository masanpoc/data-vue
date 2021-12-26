<template>
    <div id="imageList" class="info" v-if="numImages > 0 && loaded">
          <template v-for="set of loadedImages">
            <div :id="image.url" class="styled-img-container hovered-container" v-for="(image, index) of set" 
              :key="image.url" @click="zoomIn" 
            >
              <img  :src="image.url" class="styled-img  animated"
                :style="{animationDelay: ((index+set*10)*0.15)+'s'}" 
              
              />
              <!-- fullImg els will be appended when image is clicked -->
              <template v-if="urlFullImage==image.url">
                <full-image-els  @close="zoomOut" />   
              </template>           
            </div>
          </template>
          <button class="styled-button" @click="getNextImage">Show More</button>

    </div>
</template>

<script lang="ts">
import axios from 'axios';
import FullImageEls from './FullImageEls.vue';
import { defineComponent } from "vue";


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
  components: {
    FullImageEls
  },
  data() {
    return {
      loadedImages: [[]] as Result[][],
      loaded: false,
      page: 1,
      urlFullImage: '',
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
        this.loadedImages.push(extractedResultsArr);
        this.loaded=true;
      } catch (error) {
        console.error(error);
      }
    },
    getNextImage() {
      this.page+=1;
      this.getImages();
    },
    zoomIn(event:any) {
      // select clicked div
      console.log('zoomed in')
      const imgContainer = document.getElementById(event.currentTarget.id)!;
      // target is img, currentTarget is div
      // transform it to scale up on top of all images
      const left = imgContainer.offsetLeft;
      const top = imgContainer.offsetTop;
      
      // we need the offset of the container to set the positioned absolute div to that value when starting animation
      imgContainer.style.position='absolute';
      imgContainer.style.left=`${left}px`;
      imgContainer.style.top=`${top}px`;

      // removing hovered behaviour (try with computed to check if it's easier)
      imgContainer.classList.remove('hovered-container');
      imgContainer.classList.add('full-image');

      // remove cursor pointer from img
      const img = event.target;
      img.style.cursor='auto';

      // add shade to container (span)
      // add close button to container (button)
      // v-if is true==> add shade and button to container
      const clickedImgUrl = event.currentTarget.id;
      setTimeout(()=> {
        this.urlFullImage=clickedImgUrl;
      }, 500);

      // overflow hidden = scrolling locked
      document.body.style.overflow='hidden';
      document.body.scrollIntoView({behavior: "smooth"});

      

    },
    // pending logic
    zoomOut(event:any) {
      console.log('zoom out')
      
      const imgContainer = document.getElementsByClassName('full-image')[0] as HTMLElement;
      

      imgContainer.style.position='static';
      imgContainer.style.left='';
      imgContainer.style.top='';

      this.urlFullImage='';
      imgContainer.classList.add('hovered-container');
      imgContainer.classList.remove('full-image');


      const img = imgContainer.childNodes[0] as HTMLElement;
      img.style.cursor='pointer';

      document.body.style.overflow='auto';
      
    }
  },
  mounted() {
    this.getImages();

  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@keyframes fullImage {
  0% {
    width: 24.5*1.2 * 1vw;
    z-index: 3;
  }
  100% {
    z-index: 3;
     width: 40vw;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

#imageList {
    width: 50vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1vw;

    .hovered-container {
      &:hover {
              transform: scale(1.1);
              z-index: 2;
      }
    }

    .styled-img-container {
        transition: all 1s;
        .styled-img {
            width: 100%;
            height: auto;
            opacity: 0;
            cursor: pointer;
            display: inline-block;
            transition: all 0.2s;
            display: block;
            position: relative;
            z-index: 1;
            

        }
        
        .animated {
          animation: fadeIn 1s;
          animation-fill-mode: forwards;
        }


    }
    
    .full-image {
      animation: fullImage 0.5s;
      animation-timing-function: ease-out;
      z-index:3;
      animation-fill-mode: forwards;
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

.box {
  width: 50px;
  height: 50px;
  background: blue;
}
</style>