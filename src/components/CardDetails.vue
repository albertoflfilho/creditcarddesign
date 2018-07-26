<template>
    <div class="container">
        <div class="row cardDetails">
            <div class="col-md-7">
                <label>{{ 'CARD DETAILS ' }}</label>
            </div>
            <div class="errorMsg">
                
                <p v-if="$v.name.$error"> #This field must not be empty.</p> <!-- AFLF: Message error validations of Name empty -->
                <p v-if="!$v.number.minLen"> #Number must be min 16 numbers.</p>
                <p v-if="!$v.number.maxLen"> #Number must be max 16 numbers.</p>
                <p v-if="!$v.date.unique"> #Enter a valid month date.</p>
                <p v-if="!$v.year.unique"> #Enter a valid year date.</p>
                <!-- <p>{{ $v.year.unique }}</p> -->
            </div>
        </div>
        <form @submit.prevent="onSubmit">
        <div class="row">
            <div class="col-md-9" :class="{invalid: $v.name.$error}">
                <label for="name">Name</label>
                <input 
                    type="text" 
                    id="name" 
                    v-model="name" 
                    @blur="$v.name.$touch()"
                    placeholder="Vladyslav Tyzun"/>
            </div>
            <div class="col-md-3">
                <i class="far fa-user"></i>
            </div>
        </div>
        <hr/>
        <div class="row">
            <div class="col-md-9" :class="{invalid: $v.number.$error}">
                <label for="number">Card number</label>
                <input 
                    type="number" 
                    id="number" 
                    @blur="$v.number.$touch()"
                    v-model.number="number"  
                    placeholder="0072 5420 2145 9760"/>
            </div>
            <div class="col-md-3">
                <i class="far fa-credit-card"></i>
            </div>
        </div>
        <hr/>
        <div class="row">
            <div class="col-md-5 expDate" :class="{invalid: $v.date.$error}">
                <label for="date">Expiration date</label>
                <input 
                    type="number" 
                    id="date"
                    @blur="$v.date.$touch()" 
                    v-model.number="date"
                    placeholder="11"/><span>/</span><input 

                    type="number" 
                    id="year"
                    @blur="$v.year.$touch()" 
                    v-model.number="year"
                    placeholder="19"/>

            </div>
            <div class="col-md-5 cvv">
                <input type="number" id="cvv" v-model.number="cvv"  placeholder="CVV"/>
            </div>
            <div class="col-md-2">
                <i class="fas fa-question-circle"></i>
            </div>
        </div>
        </form>
        <hr/>
        <div class="row rowProceed">
            <button type="submit" class="btnProceed">Proceed to Checkout</button>
        </div>
        <!-- <div>{{ $v }}</div> -->
    </div>   
</template>

<script>
import { required, numeric, minLength, maxLength } from 'vuelidate/lib/validators'
export default {
  name: "CardDetails",
  data () {
    return {
        name: '',
        number: null,
        date: '',
        year: '',
        cvv: null
    }
  },
  validations: {
      name: {
          required
      },
      number: {
          numeric,
          minLen: minLength(16),
          maxLen: maxLength(16)

      },
      date: {
        unique: val => {
            // if (val === '') return true
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(val <= 12 && val > 0 || val == '')
                    return false  
                }, 1000)
            })
        }
      },
      year: {
        unique: val => {
            // if (val === '') return true
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(val >= 18 || val == '')
                    return false  
                }, 1000)
            })
        }
      }

  },
  onSubmit () {
      const formData = {
          name: this.name,
          number: this.number,
          date: this.date,
          year: this.year,
          cvv: this.cvv
      }
    //   console.log(formData)
      this.$store.dispatch('signup', formData)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    ::placeholder {
        padding:0;
        /* color: #4A5FA7; */
        color: #a9b5d5;
        font-weight: 500;
        letter-spacing: 1px;
        font-size: 1.5rem;
    }
    .row {
        display: flex;
        margin: 0;
    }
    .container {
        padding: 0;
        background-color: white;
    }
    .cardDetails {
        height: 54px;
        background-color: #e8ebf6;
    }
    .cardDetails label {
        font-size: 1.2rem;
        letter-spacing: 1px;
        padding-top: 5px;
        margin-left: 17px;
        padding-left: 0;
    }
    .col-md-7 label {
        margin-top: 15px;
    }
    .errorMsg p {
        margin: 0;
        margin-top: 1px;
        font-size: 1.1rem;
        font-weight: 400;
        color: red;
    }
    .col-md-7, .errorMsg{
        width: 180px;
    }

    label {
        margin-top: 15px;
        margin-bottom: 0px;
        padding-bottom: 0;
        padding-left: 17px;
        font-size: 1.3rem;
        color: #a9b5d5;
    }

    .col-md-9.invalid input {
        border: 1px solid red;
        background-color: #f7f7f7;
    }
    .col-md-3 {
        width: 10%;
    }
    
    .expDate {
        max-width: 170px;
        min-width: 170px;
    }
    .expDate input {
        margin-top: -5px;
        max-width: 30px;
    }
    .expDate span {
        color: #4A5FA7;
        font-size: 1.5rem;
    }
    #year {
        padding: 0;
        margin-top: -6px;
    }


    .cvv {
        margin: 0;
        border-left: 1px solid #e8ebf6;
    }
    .col-md-9, .col-md-6, .col-md-4, .col-md-3, .col-md-2, .col-md-5{
        max-height: 64px;
        height: 64px;
        background-color: white;
        width: 100%;
    }
    .col-md-3 {
        width: 60%;
    }
    .col-md-9 input {
        margin-left: 18px;
        padding-top: 0;
        padding-left: 0px;
        margin-bottom: 2px;
        height: 30px;
        color: #4A5FA7;
        font-size: 1.5rem;
        width: 95%;
        background-color: white;
        border: none;
    }
    .col-md-5 input {
        /* margin-bottom: 2px; */
        padding-bottom: 0px;
        padding-left: 0px;
        height: 30px;
        margin-left: 18px;
        /* margin-right: 25px; */
        font-size: 1.5rem;
        color: #4A5FA7;
        background-color: white;
        border: none;
        width: 100px;
    }

    .cvv input {
        margin-bottom: 2px;
        padding-left: 0;
        margin-left: 20px;
        margin-top: 22px;
        font-size: 1.5rem;
        color: #4A5FA7;
        width: 55px;
        background-color: white;
        border: none;
    }
    #cvv::-webkit-input-placeholder{
        color: #a9b5d5;
        font-weight: 500;
    }
    .fas, .far {
        font-size: 2rem;
        padding-top: 20px;
        padding-right: 20px;
        float: right;
        color: #E5E7F5;
        background-color:  white;
    }
    .col-md-2 {
        padding: 0;
    }
    .fas {
        padding-right: 36px;
        color: #87A0E8;
    }
    hr {
        margin: 0;

    }
    .rowProceed {
        width: 100%;
        background-color: white;
    }
    .btnProceed {
        margin-top: 15px;
        width: 100%;
        border: none;
        color: white;
        font-size: 2rem;
        background-color: #67d48b;
        max-height: 72px;
        height: 72px;
    }

</style>