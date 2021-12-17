<template>
  <div v-show="!hide" class="info">
      <div id="input-wrapper">
        <input type="text" v-model="newItem" placeholder="insert short str"  @keyup.enter="addStr" />
        <button @click="addStr"  >Add</button>
      </div>
      
      <div id="wrapper" class="column">
        <div id="string-block" class="row" v-for="(string) of infoList" :key="string">
            <div id="string-list">
              <h1 class="animated" :id="string">{{ string }}</h1>
            </div>
            <div id="buttons" class="column">
              <button @click="underline(string)" >Add/Remove Underline</button>
              <button @click="colorize(string)" >Change colors of all strings</button>
              <button @click="abbreviate(string)" >Abbreviate</button>
              <button @click="copy(string)" >Make a copy</button>
              <button @click="removeLast(string)" >Remove last copy</button>
              <button @click="removeCopies(string)" >Remove all copies</button>
              <button @click="removeParentNode(string)" >Remove All</button>
              <button @click="addRemoveClass(string)" >Add/Remove .red class</button>
              <button @click="startAnimation(string)" >Stop/Restart CSS Animation</button>
            </div>
        </div>
      </div>
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
    hide: {
      type: Boolean
    }
  },
  data() {
    return {
      infoList: this.info,
      newItem: '' as string,
      numStrs: {'str1':0} as Record<string, number>
    }
  },
  methods: {
    addStr() {
      if(this.newItem){
        this.infoList.push(this.newItem);
        this.numStrs = Object.assign(this.numStrs, {[this.newItem]: 0});
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
      node.parentNode!.appendChild(copy); 
      
      // set height of buttons list to be responsive (flex grow set in items, but we need to update our height 
      // as it is not possible to set the height based on the height of the container parent (auto))
      const parent = node.parentElement;
      const collectionNodes = parent!.getElementsByTagName('h1');
      
      if(collectionNodes.length>15){
        const buttonList = parent!.nextElementSibling as HTMLElement;
        // we change height when we add first elemnt to new row, counter starts at 0
        this.numStrs[el]=this.numStrs[el]+1;
        if(this.numStrs[el]==1){ 
          buttonList!.style.height=buttonList!.clientHeight+40+'px';
        }
        if(this.numStrs[el]==3){
          this.numStrs[el]=0;
        }
      } 
    },
    removeLast(el:string) {
      const node = document.getElementById(el)!;
      const parent = node.parentElement;
      const collectionNodes = parent!.getElementsByTagName('h1');

      // logic to update height
      if(collectionNodes.length>15){
        const buttonList = parent!.nextElementSibling as HTMLElement;
        if(this.numStrs[el]==1){ 
          buttonList!.style.height=buttonList!.clientHeight-40+'px';
        }
        this.numStrs[el]=this.numStrs[el]-1;
        if(this.numStrs[el]==-1){
          this.numStrs[el]=2;
        }
      } 

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

      // logic to update height
      const buttonList = parent!.nextElementSibling as HTMLElement;
      buttonList!.style.height='200px';
    },
    removeParentNode(el:string) {
      const node = document.getElementById(el)!;
      if(node){
        node.parentElement!.parentElement!.remove();
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
      if(!node.classList.contains('animated')){
          node.classList.add('animated');
      }
      else {
          node.classList.remove('animated');
      }
       
    }
  }, 
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@mixin centered {
  display: flex;
  justify-content: center;
  align-items: center;
}



.info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;


  #input-wrapper {
    display: flex;
    margin-bottom: 40px;
  }

  #wrapper {
    & > * {
      border: 1px solid black;
      margin-bottom: 40px;
    }
    :last-child {
      margin-bottom: 0;
    }
    #string-block {
      #string-list {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
      }

      #buttons {
            height: 200px;
            border: 1px solid red;
            & > * {
              width: 100%;
              flex-grow: 1;
            }
      }
    }
    
  }
}

/* general classes */
  .red{
    background: red;
  }
 .animated {
    width: 100px;
    position: relative;
    animation-duration: 3s;
    animation-name: moving;
    animation-iteration-count: infinite;
  }
  @keyframes moving {
    0% {
      left: 0;
    }
    33% {
      left: 5px;
    }
    66% {
      left: 2.5px;
    }
    100% {
      left: 0;
    }
  }
  .row {
    @include centered;
    flex-direction: row;
    
  }
  .column {
      @include centered();
      flex-direction: column;
    }

 
</style>
