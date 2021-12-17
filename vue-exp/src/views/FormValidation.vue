<template>
  <div id="formBlock">
    <h1>Form</h1>
    <div class="row">
      <purchase-form></purchase-form>
      <div>Basket Summary here</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PurchaseForm from '@/components/PurchaseForm.vue';


export default defineComponent({
  name: "FormValidation",
  components: {
    PurchaseForm
  }, 
  
  
});
</script>


<style lang="scss" scoped>
  .row {
    display: flex;
  }
  #formBlock {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    #basketImg {
      height: auto;
      width: 30%;
    }
  }

</style>