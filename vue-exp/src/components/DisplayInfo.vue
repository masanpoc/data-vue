<template>
  <div class="info">
    
    <button @click="toggleClass" >{{hide ? 'Show list' : 'Hide list'}}</button>
    <template v-if="!hide">
      <input type="text" v-model="newItem" placeholder="insert new str" />
      <button @click="addStr">Add</button>
      <h1 v-for="string in infoList" :key="string">{{ string }}</h1>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "DisplayInfo",
  props: {
    info: {
      type: Array as PropType<Array<string>>,
      required: true
    },
  },
  data() {
    return {
      hide: true,
      infoList: this.info,
      newItem: ''
    }
  },
  methods: {
    toggleClass() {
      this.hide = !this.hide
    },
    addStr() {
      this.infoList.push(this.newItem);
      this.newItem='';
    }
  }, 
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
