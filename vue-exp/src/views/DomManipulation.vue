<template>
  <div id="domBlock">
    <div class="row" >
      <h1 :style="{'text-decoration': 'underline'}">List</h1>
      <button @click="toggleClass" >{{hide ? 'Show list' : 'Hide list'}}</button>
    </div>
    <display-info :info="trArr" :hide="hide" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DisplayInfo from "@/components/DisplayInfo.vue"; // @ is an alias to /src

export default defineComponent({
  name: "DomManipulation",
  components: {
    DisplayInfo,
  }, 
  data() {
    return {
      trArr: ['str1'],
      hide: false,
    };
  },
  methods: {
    toggleClass() {
      this.hide = !this.hide
    },
  }
});
</script>

<style lang="scss" scoped>
  #domBlock {
    margin: 100px auto 200px auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: max-content;
  }
  .row {
    width: 500px;
    display: flex;
    margin-bottom: 60px;
    & > :first-child {
      margin-right: 50px;
    }
  }
</style>