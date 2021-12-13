<template>
  <div class="contact">
    <h1>List</h1>
    <display-info :info="trArr" />
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
    };
  }
});
</script>
