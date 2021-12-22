<template>
  <form id="form">
    
      <div id="personal">
        <h2>Personal Info</h2>
        <div id='personalList' >
          
          <div class="row" id="nameInfo">
            <div >
              <label>First Name</label>
              <input v-model="firstName" @blur="v$.firstName.$touch" :style="{width: '120px'}" :class="{'red-border': v$.firstName.$error}">
              <h4 v-if="v$.firstName.$error" :style="{width: '140px', 'fontSize': '0.7em', 'textAlign': 'left', color: 'red'}" >
                Please enter a valid input
                <template v-for="error of v$.firstName.$errors" :key="error.$uid">
                 {{error.$message}}
                </template>
              </h4>
            </div>

            <div>
              <label>Last Name</label>
              <input v-model="lastName" @blur="v$.lastName.$touch" :style="{width: '180px'}" :class="{'red-border': v$.lastName.$error}" >
              <h4 v-if="v$.lastName.$error" :style="{width: '200px', 'fontSize': '0.7em', 'textAlign': 'left', color: 'red'}" >
                Please enter a valid input.
                <template v-for="error of v$.lastName.$errors" :key="error.$uid">
                 {{error.$message}}.
                </template>
              </h4>
            </div>
          </div>

          <div>
            <label>Email</label>
            <input v-model="email" @blur="v$.email.$touch" :style="{width: '180px'}" :class="{'red-border': v$.email.$error}" >
            <h4 v-if="v$.email.$error" :style="{width: '200px', 'fontSize': '0.7em', 'textAlign': 'left', color: 'red'}" >
                Please enter a valid input.
                <template v-for="error of v$.email.$errors" :key="error.$uid">
                 {{error.$message}}.
                </template>
              </h4>
          </div>

          <div>
            <label>Confirm your email</label>
            <input v-model="confirmEmail" @blur="v$.confirmEmail.$touch" :style="{width: '180px'}" :class="{'red-border': v$.confirmEmail.$error}" >
            <h4 v-if="v$.confirmEmail.$error" :style="{width: '200px', 'fontSize': '0.7em', 'textAlign': 'left', color: 'red'}" >
                Please enter a valid input.
                <template v-for="error of v$.confirmEmail.$errors" :key="error.$uid">
                 {{error.$message}}.
                </template>
              </h4>
          </div>
        
          <div>
            <label>Phone number</label>
            <input v-model="phoneNumber" @blur="v$.phoneNumber.$touch" :style="{width: '180px'}" :class="{'red-border': v$.phoneNumber.$error}" >
            <h4 v-if="v$.phoneNumber.$error" :style="{width: '200px', 'fontSize': '0.7em', 'textAlign': 'left', color: 'red'}" >
                Please enter a valid input.
                <template v-for="error of v$.phoneNumber.$errors" :key="error.$uid">
                 {{error.$message}}.
                </template>
              </h4>
          </div>
        
        </div>
      </div>

      <hr />

      <div id="shipping">
        <h2>Shipping</h2>
        <div id="shippingList">

          <div>
            <label>Address</label>
            <input v-model="address" @blur="v$.address.$touch" :style="{width: '250px'}" :class="{'red-border': v$.address.$error}" >
            <h4 v-if="v$.address.$error" :style="{width: '270px', 'fontSize': '0.7em', 'textAlign': 'left', color: 'red'}" >
                Please enter a valid input.
                <template v-for="error of v$.address.$errors" :key="error.$uid">
                 {{error.$message}}.
                </template>
            </h4>
          </div>

          <div id="locationInfo" class="row">
            <div>
              <label>City</label>
              <input v-model="city" @blur="v$.city.$touch" :style="{width: '100px'}" :class="{'red-border': v$.city.$error}">
              <h4 v-if="v$.city.$error" :style="{width: '120px', 'fontSize': '0.7em', 'textAlign': 'left', color: 'red'}" >
                Please enter a valid input.
                <template v-for="error of v$.city.$errors" :key="error.$uid">
                 {{error.$message}}.
                </template>
              </h4>
            </div>

            <div>
              <label>Zip code</label>
              <input v-model="zipCode" @blur="v$.zipCode.$touch" :style="{width: '70px'}" :class="{'red-border': v$.zipCode.$error}" >
              <h4 v-if="v$.zipCode.$error" :style="{width: '90px', 'fontSize': '0.7em', 'textAlign': 'left', color: 'red'}" >
                Please enter a valid input.
                <template v-for="error of v$.zipCode.$errors" :key="error.$uid">
                 {{error.$message}}.
                </template>
              </h4>
            </div>
          </div>

          <div>
            <label>Country</label>
            <input v-model="country" @blur="v$.country.$touch" :style="{width: '100px'}" :class="{'red-border': v$.country.$error}" >
            <h4 v-if="v$.country.$error" :style="{width: '120px', 'fontSize': '0.7em', 'textAlign': 'left', color: 'red'}" >
                Please enter a valid input.
                <template v-for="error of v$.country.$errors" :key="error.$uid">
                 {{error.$message}}.
                </template>
              </h4>
          </div>

        </div>
      </div>

      <hr />

      <div id="payment">
        <h2>Payment Method</h2>
        <div id="paymentList">
          <div>
            <label>Name on card</label>
            <input v-model="cardName" @blur="v$.cardName.$touch" :style="{width: '250px'}" :class="{'red-border': v$.cardName.$error}" >
            <h4 v-if="v$.cardName.$error" :style="{width: '270px', 'fontSize': '0.7em', 'textAlign': 'left', color: 'red'}" >
                Please enter a valid input.
                <template v-for="error of v$.cardName.$errors" :key="error.$uid">
                 {{error.$message}}.
                </template>
              </h4>
          </div>

          <div>
            <label>Card number</label>
            <input v-model="cardNumber" @blur="v$.cardNumber.$touch" :style="{width: '250px'}" :class="{'red-border': v$.cardNumber.$error}" >
            <h4 v-if="v$.cardNumber.$error" :style="{width: '270px', 'fontSize': '0.7em', 'textAlign': 'left', color: 'red'}" >
                Please enter a valid input.
                <template v-for="error of v$.cardNumber.$errors" :key="error.$uid">
                 {{error.$message}}.
                </template>
              </h4>
          </div>

          <div id="securityInfo" class="row">
            <div>
              <label>Expiration date</label>
              <input v-model="cardExpiration" @blur="v$.cardExpiration.$touch" :style="{width: '100px'}" :class="{'red-border': v$.cardExpiration.$error}" >
              <h4 v-if="v$.cardExpiration.$error" :style="{width: '120px', 'fontSize': '0.7em', 'textAlign': 'left', color: 'red'}" >
                Please enter a valid input.
                <template v-for="error of v$.cardExpiration.$errors" :key="error.$uid">
                 {{error.$message}}.
                </template>
              </h4>
            </div>

            <div>
              <label>Security code</label>
              <input v-model="cardCode" @blur="v$.cardCode.$touch" :style="{width: '50px'}" :class="{'red-border': v$.cardCode.$error}" >
              <h4 v-if="v$.cardCode.$error" :style="{width: '70px', 'fontSize': '0.7em', 'textAlign': 'left', color: 'red'}" >
                Please enter a valid input.
                <template v-for="error of v$.cardCode.$errors" :key="error.$uid">
                 {{error.$message}}.
                </template>
              </h4>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div id="buttonsList">
        <button type="submit" class="styled-button">Complete Order</button>
        <button type="button" class="styled-button" >Cancel</button>
      </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useVuelidate from '@vuelidate/core'
import { required, email, sameAs, numeric, alpha, alphaNum, minLength } from '@vuelidate/validators'

const isPhoneNumber = (value:string) => value.length==9;
const isZipCode = (value:string) => value.length==5;
const isCardNumber = (value:string) => value.length==16;
const isCardExpiration = (value:string) => value.length==5;
const isCardCode = (value:string) => value.length==3;


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
      lastName: '',
      email: '',
      confirmEmail: '',
      phoneNumber: '',
      address: '',
      city: '',
      zipCode: '',
      country: '',
      cardNumber: '',
      cardName: '',
      cardExpiration: '',
      cardCode: ''
    };
  },
  validations() {
    return {
      firstName: {
        required, 
        minLength: minLength(2)
      },
      lastName: {
        required,
        minLength: minLength(2)
      },
      email: {
        required, 
        email
      },
      confirmEmail: {
        sameAs: sameAs(this.email)
      },
      phoneNumber: {
        required, 
        numeric,
        isPhoneNumber
      },
      address: {
        required, 
      },
      city: {
        required, 
      },
      zipCode: {
        required, 
        numeric,
        isZipCode
      },
      country: {
        required, 
      },
      cardNumber: {
        required,
        numeric,
        isCardNumber
      },
      cardName: {
        required,
      },
      cardExpiration: {
        required, 
        isCardExpiration
      },
      cardCode: {
        required, 
        numeric,
        isCardCode
      }
    }
  },
  
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @mixin flexcol {
    display: flex;
    flex-direction: column;
    align-items: flex-start
  }
  input {
    border: 1px solid #b1adad;
    border-radius: 4px;
    padding: 5px 10px;
  }
  /* add tick class to toggle ok/error */

  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus, 
  input:-webkit-autofill:active{
      -webkit-box-shadow: 0 0 0 30px white inset !important;
  }

  .red-border {
    border-color: red;
  }
  
  #form {
      border: 1px solid rgba(0, 0, 0, 0.212);
      background: white;
      padding: 70px 70px 100px 70px;
      #personal {
        @include flexcol();
        & > :first-child {
          margin-bottom: 30px;
        }
        /* border: 2px solid black; */
        #personalList {
          @include flexcol();
          & > div:not(#nameInfo) {
            @include flexcol();
            margin: 0 0 25px 0;
            gap: 7.5px;
          }
          #nameInfo {
                display: flex;
                & > div {
                  @include flexcol();
                  margin: 0 0 25px 0;
                  gap: 7.5px;
                }
                & > :first-child {
                  margin-right: 50px
                }
          }
        }
      }
      #shipping {
        @include flexcol();
        /* border: 2px solid black; */
        & > :first-child {
          margin-bottom: 30px;
        }
        #shippingList {
          @include flexcol();
          
          & > div:not(#locationInfo) {
            @include flexcol();
            margin: 0 0 25px 0;
            gap: 7.5px;
          }
          #locationInfo {
                display: flex;
                & > div {
                  @include flexcol();
                  margin: 0 0 25px 0;
                  gap: 7.5px;
                }
                & > :first-child {
                  margin-right: 50px
                }
          }
        }
      }
      #payment {
        @include flexcol();
        /* border: 2px solid black; */
        & > :first-child {
          margin-bottom: 30px;
        }
        #paymentList {
          @include flexcol();
          & > div:not(#securityInfo) {
            @include flexcol();
            margin: 0 0 25px 0;
            gap: 7.5px;
          }
          #securityInfo {
                display: flex;
                & > div {
                  @include flexcol();
                  margin: 0 0 25px 0;
                  gap: 7.5px;
                }
                & > :first-child {
                  margin-right: 50px
                }
          }
        }
      }
      #buttonsList {
        display: flex;
        justify-content: flex-start;
        margin-top: 50px;
        .styled-button {
          padding: 10px 20px;
          border: none;
          box-shadow: 0 0 1px 0px rgb(0, 0, 0);
          border-radius: 5px;
          cursor: pointer;
        }
        & > :first-child {
          margin-right: 20px;
          background: #00B000;
          color: rgb(255, 255, 255);
        }
        & :last-child {
          background: rgb(228, 228, 228);
        }
      }
      hr {
        margin: 50px 0;
      }
  }
  

  .row {
    display: flex;
  }
</style>