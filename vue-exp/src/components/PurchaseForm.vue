<template>
  <form id="form">
    
      <div id="personal">
        <h2>Personal Info</h2>
        <div id='personalList' >
          
          <div class="row" id="nameInfo">
            <div >
              <label>First Name</label>
              <input v-model="firstName" @blur="v$.firstName.$touch">
              <div v-if="v$.firstName.$error" >
                <p v-for="error of v$.firstName.$errors" :key="error.$uid">
                  {{error.$validator}} on property {{error.$property}}
                  says: {{error.$message}}
                </p>
              </div>
            </div>

            <div>
              <label>Second Name</label>
              <input v-model="secondName" @blur="v$.secondName.$touch" >
            </div>
          </div>

          <div>
            <label>Email</label>
            <input v-model="email" @blur="v$.email.$touch" >
          </div>

          <div>
            <label>Confirm your email</label>
            <input v-model="confirmEmail" @blur="v$.confirmEmail.$touch" >
          </div>
        
          <div>
            <label>Phone number</label>
            <input v-model="phoneNumber" @blur="v$.phoneNumber.$touch" >
          </div>
        
        </div>
      </div>

      <div id="shipping">
        <h2>Shipping</h2>
        <div id="shippingList">

          <div>
            <label>Address</label>
            <input v-model="address" @blur="v$.address.$touch" >
          </div>

          <div id="locationInfo" class="row">
            <div>
              <label>City</label>
              <input v-model="city" @blur="v$.city.$touch" >
            </div>

            <div>
              <label>Zip code</label>
              <input v-model="zipCode" @blur="v$.zipCode.$touch" >
            </div>
          </div>

          <div>
            <label>Country</label>
            <input v-model="country" @blur="v$.country.$touch" >
          </div>

        </div>
      </div>

      <div id="payment">
        <h2>Payment Method</h2>
        <div id="paymentList">

          <div>
            <label>Card number</label>
            <input v-model="cardNumber" @blur="v$.cardNumber.$touch" >
          </div>

          <div>
            <label>Name on card</label>
            <input v-model="cardName" @blur="v$.cardName.$touch" >
          </div>

          <div id="securityInfo" class="row">
            <div>
              <label>Expiration date</label>
              <input v-model="cardExpiration" @blur="v$.cardExpiration.$touch" >
            </div>

            <div>
              <label>Security code</label>
              <input v-model="cardCode" @blur="v$.cardCode.$touch" >
            </div>
          </div>
        </div>
      </div>

      <div>
        <button type="submit">Complete Order</button>
        <button type="button" >Cancel</button>
      </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

export default defineComponent({
  name: "PurchaseForm",
  setup() {
    return {
      v$: useVuelidate()
    }
  },
  data() {
    return {
      firstName: '',
      secondName: '',
      email: '',
      confirmEmail: '',
      phoneNumber: 0,
      address: '',
      city: '',
      zipCode: 0,
      country: '',
      cardNumber: 0,
      cardName: '',
      cardExpiration: '',
      cardCode: 0
    };
  },
  validations() {
    return {
      firstName: {
        required, 

      }
    }
  }
  
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @mixin flexcol {
    display: flex;
    flex-direction: column;
    align-items: flex-start
  }

  
  #form {
      #personal {
        @include flexcol();
        border: 2px solid black;
        #personalList {
          @include flexcol();
          & > div:not(#nameInfo) {
            @include flexcol();
          }
          #nameInfo {
                display: flex;
                & > div {
                  @include flexcol();
                }
          }
        }
      }
      #shipping {
        @include flexcol();
        border: 2px solid black;
        #shippingList {
          @include flexcol();
          & > div:not(#locationInfo) {
            @include flexcol();
          }
          #locationInfo {
                display: flex;
                & > div {
                  @include flexcol();
                }
          }
        }
      }
      #payment {
        @include flexcol();
        border: 2px solid black;
        #paymentList {
          @include flexcol();
          & > div:not(#securityInfo) {
            @include flexcol();
          }
          #securityInfo {
                display: flex;
                & > div {
                  @include flexcol();
                }
          }
        }
      }
  }
  

  .row {
    display: flex;
  }
</style>