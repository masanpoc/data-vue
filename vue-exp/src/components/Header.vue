<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/data">Data Visualization</router-link>
    <router-link to="/dom">DOM Manipulation</router-link>
    <router-link to="/form">Form Validation</router-link>
    <router-link to="/media">Media & Animations</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

#nav {
  background: lightyellow;
  display: flex;
  justify-content: flex-end;
  gap: 30px;
  padding: 30px 30px 30px 0;
  font-size: 0.8rem;
  box-shadow: 0px 0px 5px 0px rgba(182, 182, 182, 0.75);
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: hsl(32, 81%, 37%);
    }
  }
}
</style>