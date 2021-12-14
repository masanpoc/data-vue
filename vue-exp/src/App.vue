<template>
  <my-header />
  <div id="content">  
    <router-view />
  </div>
  <my-footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default defineComponent({
  name: "App",
  components: {
    myHeader: Header,
    myFooter: Footer
  }
  
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}

#content {
  background: rgb(253, 253, 253);
  min-height: 100vh;
}

</style>
