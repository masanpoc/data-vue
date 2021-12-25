<template>
    <div id="imageList" class="info" v-if="numImages > 0 && loaded">
        
          <!-- <img src="@/assets/Contact/office.jpg" class="img" :class="mountedImg && 'animated'" key="office" /> -->
          <template v-for="set of loadedImages">
            <div :id="index" class="styled-img-container hovered-container" v-for="(image, index) of set" 
              :key="image.url" @click="zoomIn" 
            >
              <img  :src="image.url" class="styled-img  animated"
                :style="{animationDelay: (index*0.15)+'s'}" 
              
              />
              <span :id="'span-'+index" class="styled-hidden-span" ></span>
            </div>
          </template>
          <button class="styled-button" @click="getNextImage">Show More</button>

    </div>
</template>

<script lang="ts">
import axios from 'axios';
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
   
  },
  data() {
    return {
      loadedImages: [[
        {url: 'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODI4NDR8MHwxfHNlYXJjaHwxMXx8b2ZmaWNlfGVufDB8fHx8MTY0MDE2Nzg0MQ&ixlib=rb-1.2.1&q=80&w=1080'}, 
      {url: 'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODI4NDR8MHwxfHNlYXJjaHwxMXx8b2ZmaWNlfGVufDB8fHx8MTY0MDE2Nzg0MQ&ixlib=rb-1.2.1&q=80&w=1080'}, 
      {url: 'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODI4NDR8MHwxfHNlYXJjaHwxMXx8b2ZmaWNlfGVufDB8fHx8MTY0MDE2Nzg0MQ&ixlib=rb-1.2.1&q=80&w=1080'}, 
      {url: 'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODI4NDR8MHwxfHNlYXJjaHwxMXx8b2ZmaWNlfGVufDB8fHx8MTY0MDE2Nzg0MQ&ixlib=rb-1.2.1&q=80&w=1080'}, 
      {url: 'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODI4NDR8MHwxfHNlYXJjaHwxMXx8b2ZmaWNlfGVufDB8fHx8MTY0MDE2Nzg0MQ&ixlib=rb-1.2.1&q=80&w=1080'}, 
      ]] as Result[][],
      loaded: true,
      page: 1,
    }
  },
  methods: {
    // async getImages() {
    //   try {
    //     this.loaded=false;
    //     const response = await axios.get(`https://api.unsplash.com/search/photos?page=${this.page}&query=office&client_id=${process.env.VUE_APP_UNSPLASH_ACCESS_KEY}`);
    //     let nestedResultsArr = response.data.results;
    //     let extractedResultsArr = nestedResultsArr.map((el:Response)=>{
    //       return {
    //         url: el.urls.regular
    //       }
    //     });
    //     extractedResultsArr.forEach((el:Result)=>{this.loadedImages.push(el)});
    //     this.loaded=true;
    //   } catch (error) {
    //     console.error(error);
    //   }
    // },
    getNextImage() {
      // this.page+=1;
      // this.getImages();
      let newArr = [];
      newArr.push({url: 'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODI4NDR8MHwxfHNlYXJjaHwxMnx8b2ZmaWNlfGVufDB8fHx8MTY0MDE2Nzg0MQ&ixlib=rb-1.2.1&q=80&w=1080'})
      newArr.push({url: 'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODI4NDR8MHwxfHNlYXJjaHwxMnx8b2ZmaWNlfGVufDB8fHx8MTY0MDE2Nzg0MQ&ixlib=rb-1.2.1&q=80&w=1080'})
      newArr.push({url: 'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODI4NDR8MHwxfHNlYXJjaHwxMnx8b2ZmaWNlfGVufDB8fHx8MTY0MDE2Nzg0MQ&ixlib=rb-1.2.1&q=80&w=1080'})
      newArr.push({url: 'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODI4NDR8MHwxfHNlYXJjaHwxMnx8b2ZmaWNlfGVufDB8fHx8MTY0MDE2Nzg0MQ&ixlib=rb-1.2.1&q=80&w=1080'})
      this.loadedImages.push(newArr);
    },
    zoomIn(event:any) {
      // select clicked div
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


      // add shade to container (span)
      const shade = document.getElementById('span-'+event.currentTarget.id)!;
      setTimeout(function addClass() {
        shade.classList.add('styled-visible-span')
      }, 500);

      // overflow hidden = scrolling locked
      document.body.style.overflow='hidden';
      document.body.scrollIntoView({behavior: "smooth"});

      // add close button to container (span) --pending

    },
    // pending logic
    zoomOut(event:any) {
      const node = document.getElementById(event.target.id)!;
      node.style.transform=''
      node.style.zIndex='1';
      // remove in style of container:_ position, top, left
      // remove in classList of container: full-image
      // remove in classList of span: styled-visible-span
    }
  },
  mounted() {
    // this.getImages();

  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@keyframes fullImage {
  0% {
    width: 24.5*1.2 * 1vw;
  }
  100% {
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
              /* border: 1.5px solid black;
              background: black;
              border-radius: 6px; */
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

        .hovered-img {
          &:hover {
              /* transform: scale(1.2);
              border: 3px solid black;
              background: black; */
              /* border-radius: 6px; */
              /* z-index: 2; */
            }
        }
        
      
        .animated {
          animation: fadeIn 1s;
          animation-fill-mode: forwards;
        }

        .styled-hidden-span {
          display: none;
          position: absolute;
          width: 50px;
          height: 50px;
          background: grey;
          z-index: 2;
        }

        .styled-visible-span {
          display: block;
          z-index: -1;
          position: absolute;
          top: -100%;
          left: -100%;
          width: 200vw;
          height: 200vh;
          opacity: 0.7;
          background: black;
        }
    }
    
    .full-image {
      animation: fullImage 0.5s;
      animation-timing-function: ease-out;
      z-index: 3;
      animation-fill-mode: forwards;
      /* position: absolute; */
      
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