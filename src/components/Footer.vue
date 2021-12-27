<template>
  <div class="footer">
    <h2 class="heading">Links to Docs</h2>
    <ul class="list"> 
        <li><a href="https://v3.vuejs.org/" target="_blank" rel="noopener" >Vue 3</a></li>
        <li><a href="https://www.chartjs.org/" target="_blank" rel="noopener" >ChartsJS</a></li>
        <li><a href="https://axios-http.com/docs/intro" target="_blank" rel="noopener" >Axios</a></li>
        <li><a href="https://next.vue-test-utils.vuejs.org/guide/" target="_blank" rel="noopener" >Vue Test Utils</a></li>
        <li><a href="https://www.cypress.io/blog/2021/04/06/getting-start-with-cypress-component-testing-vue-2-3/" target="_blank" rel="noopener" >Cypress</a></li>
        <li><a href="https://vuelidate-next.netlify.app/" target="_blank" rel="noopener" >Vuelidate</a></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
  
  
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer {
    background: lightyellow;
    box-shadow: 0px 0px 5px 0px rgba(182, 182, 182, 0.75);
    display: flex;
    flex-direction: column;
    padding: 40px 0 50px 0;
    .heading {
        width: max-content;
        margin-left: 5%;
    }
    .list {
        padding: 2.5% 0;
        width: 50%;
        margin: 0 5%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 15px 5px;
        justify-items: start;
        & > * {
            list-style: none;
        }
    }
}
</style>