<template>
<!-- adding stop event modifier to prevent event propagation to onclick handler in parent of parent -->
    <span @click.stop="$emit('close', $event)"
     class="styled-visible-span" ></span>
                <button @click.stop="$emit('close', $event)" class="styled-visible-button" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                  </svg>
                </button>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
    emits: ['close']
})
</script>

<style lang="scss" scoped>
    
        .styled-visible-span {
          display: block;
          z-index: -1;
          position: absolute;
          top: -1000%;
          left: -1000%;
          width: 2000vw;
          height: 2000vh;
          opacity: 0.7;
          background: black;
        }

        .styled-visible-button {
          display: block;
          position: absolute;
          top: 0;
          right: 0;
          width: 50px;
          height: 50px;
          color: black;
          z-index: 2;
          cursor: pointer;
          
        }
</style>