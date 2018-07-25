<template>
    <div class="container">
        <div class="row cardDetails">
            <div class="col-md-7">
                <label>{{ 'CARD DETAILS ' }}</label>
            </div>
            <div class="errorMsg">
                <p v-if="$v.name.$error"> #This field must not be empty.</p>
                <p v-if="!$v.number.minLen"> #Number must be min 16 numbers.</p>
                <p v-if="!$v.number.maxLen"> #Number must be max 16 numbers.</p>
                <p v-if="!$v.date.unique.val == 0"> #Enter a valid date.</p>
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
                    placeholder="11 / 19"/>
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
        <div class="row">
            <button type="submit" class="btnProceed">Proceed to Checkout</button>
        </div>
        <div>{{ $v }}</div>
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
            if (val === '') return true
            return new Promise((resolve) => {
                setTimeout(() => {
                    val = val.substring((val.length-2), val.length)
                    resolve(val < 18)
                    return val
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
        height: 50px;
        background-color: #e8ebf6;
    }
    .cardDetails h1 {
        font-size: 1.2rem;
        letter-spacing: .5px;
        padding-top: 10px;
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
        margin-top: 5px;
        margin-bottom: 4px;
        padding-left: 22px;
        font-size: 1.3rem;
        color: #a9b5d5;
    }

    .col-md-9.invalid input {
        border: 1px solid red;
        background-color: #f7f7f7;
    }

    /* .col-md-12, .col-md-4, .col-md-9, .col-md-5, h1 {
        margin-top: 5px;
        margin-bottom: 4px;
        padding-left: 22px;
        font-size: 1.3rem;
        color: #a9b5d5;
    } */
    /* .col-md-4 .col-md-5 h1{
        padding-top: 5px;
        font-size: 1.6rem;
        font-weight: bold;
        margin-bottom: 2px;
    } */
    .col-md-3 {
        width: 10%;
    }
    .expDate {
        max-width: 182px;
    }
    .cvv {
        margin: 0;
        border-left: 1px solid #e8ebf6;
    }
    .col-md-9, .col-md-6, .col-md-4, .col-md-3, .col-md-2, .col-md-5{
        max-height: 70px;
        background-color: white;
        width: 100%;
    }
    .col-md-3 {
        width: 60%;
    }
    .col-md-9 input {
        margin-left: 20px;
        padding-left: 3px;
        margin-bottom: 2px;
        height: 30px;
        color: #4A5FA7;
        font-size: 1.7rem;
        width: 95%;
        background-color: white;
        border: none;
    }
    .col-md-5 input {
        margin-bottom: 2px;
        padding-left: 3px;
        height: 30px;
        margin-left: 22px;
        font-size: 1.7rem;
        color: #4A5FA7;
        background-color: white;
        border: none;
        width: 100px;
    }

    .cvv input {
        margin-bottom: 2px;
        padding-left: 0;
        margin-left: 0;
        margin-top: 22px;
        font-size: 1.7rem;
        color: #4A5FA7;
        width: 55px;
        background-color: white;
        border: none;
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
    .btnProceed {
        margin-top: 15px;
        width: 100%;
        border: none;
        color: white;
        font-size: 2rem;
        background-color: #67d48b;
        max-height: 60px;
        height: 70px;
    }

</style>