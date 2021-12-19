<template>
  <div id="formBlock">
    <h1 id="heading"><u>Form</u></h1>
    <purchase-form></purchase-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PurchaseForm from '@/components/PurchaseForm.vue';


export default defineComponent({
  name: "FormValidation",
  components: {
    PurchaseForm,
  }, 
  
  
});
</script>


<style lang="scss" scoped>
  
  #formBlock {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: max-content;
    margin: 100px auto 200px auto;
    #heading {
      margin-bottom: 60px;
    }
  }

</style>