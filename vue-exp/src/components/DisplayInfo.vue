<template>
  <div class="info">
    
    <button @click="toggleClass" >{{hide ? 'Show list' : 'Hide list'}}</button>
    <template v-if="!hide">
      <input type="text" v-model="newItem" placeholder="insert new str"  @keyup.enter="addStr" />
      <button @click="addStr"  >Add</button>
      <div v-for="(string) in infoList" :key="string">
          <h1 :id="string">{{ string }}</h1>
          <button @click="underline(string)" >Add/Remove Underline</button>
          <button @click="colorize(string)" >Change colors of all strings</button>
          <button @click="abbreviate(string)" >Abbreviate</button>
          <button @click="copy(string)" >Make a copy</button>
          <button @click="removeLast(string)" >Remove last copy</button>
          <button @click="removeCopies(string)" >Remove all copies</button>
          <button @click="removeParentNode(string)" >Remove All</button>
          <button @click="addRemoveClass(string)" >Add/Remove .red class</button>
          <button @click="startAnimation(string)" >Start CSS Animation</button>
      </div>
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
      if(this.newItem){
        this.infoList.push(this.newItem);
        this.newItem='';
      }
    },
    underline(el:string) {
      const node = document.getElementById(el)!;
      
      if(node.style.textDecoration.includes('underline')){
        node.style.textDecoration='';
      } else {
        node.style.textDecoration='underline';
      }
    },
    colorize(el:string) {
      const node = document.getElementById(el)!;
      const parent = node.parentElement;
      const collectionNodes = parent!.getElementsByTagName('h1');
      for(let i=0; i<collectionNodes.length; i++){
        collectionNodes[i].style.color='blue'
      }
    },
    abbreviate(el:string) {
      const node = document.getElementById(el)!;
      const parent = node.parentElement;
      const collectionNodes = parent!.getElementsByTagName('h1');
      for(let i=0; i<collectionNodes.length; i++){
        collectionNodes[i].innerHTML=collectionNodes[i].innerHTML.slice(0,3)
      }
    },
    copy(el:string) {
      const node = document.getElementById(el)!;
      const copy = document.createElement("H1");   // Create a <h1> element
      copy.innerHTML = node.innerHTML;
      copy.style.color=node.style.color;
      node.parentNode!.insertBefore(copy, node.nextSibling);  
    },
    removeLast(el:string) {
      const node = document.getElementById(el)!;
      const parent = node.parentElement;
      const collectionNodes = parent!.getElementsByTagName('h1');
      const nodeRemoving = collectionNodes[collectionNodes.length-1];
      if(!nodeRemoving.id){
        nodeRemoving.remove();
      }
    },
    removeCopies(el:string) {
      const node = document.getElementById(el)!;
      const parent = node.parentElement;
      const collectionNodes = parent!.getElementsByTagName('h1');
      while(collectionNodes.length>1){
        const nodeRemoving = collectionNodes[1];
        nodeRemoving.remove();
      }
    },
    removeParentNode(el:string) {
      const node = document.getElementById(el)!;
      if(node){
        node.parentElement!.remove();
      }
    },
    addRemoveClass(el:string) {
      const node = document.getElementById(el)!;
      if(!node.classList.contains('red')){
        node.classList.add('red');
      }
      else {
        node.classList.remove('red');
      }
    },
    startAnimation(el:string){
      const node = document.getElementById(el)!;
    }
  }, 
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.red{
  background: red;
}
</style>
