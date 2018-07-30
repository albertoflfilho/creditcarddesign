<template>
        <div>
        <div class="row cardDetails">
            <div class="col-md-7">
                <label>{{ 'CARD DETAILS ' }}</label>
            </div>
        </div>
        <form @submit.prevent="onSubmit">
        <div class="row">
            <div class="col-md-9">
                <label for="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="credit_card_holder"
                    v-model="Card.holder"
                    v-validate="{required : true, alpha : true}"
                    placeholder="Vladyslav Tyzun"/>
            </div>
            <div class="col-md-3">
                <i class="far fa-user"></i>
            </div>
        </div>
        <hr/>
        <div class="row">
            <div class="col-md-9">
                <label for="number">Card number</label>
                <input
                    type="text"
                    id="number"
                    name="credit_card_number"
                    v-validate="{required: true, credit_card : true}"
                    v-model="Card.number"
                    placeholder="0072 5420 2145 9760"/>
            </div>
            <div class="col-md-3">
                <i class="far fa-credit-card"></i>
            </div>
        </div>
        <hr/>
        <div class="row">
            <div class="col-md-5 expDate">
                <label for="date">Expiration date</label>
                <input
                    type="text"
                    id="date"
                    name="credit_cart_month"
                    v-model="Card.expiration_month"
                    v-validate="{required : true, decimal : true, max_value : '12', min_value : '1' }"
                    placeholder="11"/>
                    <span>/</span>
                <input
                    type="text"
                    id="year"
                    name="credit_card_year"
                    v-validate="{required: true, decimal : true, min_value : '18'}"
                    v-model="Card.expiration_year"
                    placeholder="19"/>

            </div>
            <div class="col-md-5 cvv">
                <input type="text"
                    id="cvv"
                    name="credit_card_cvv"
                    v-model="Card.cvv"
                    v-validate="{required : true, digits: '3'}"
                    placeholder="CVV"/>
            </div>
            <div class="col-md-2">
                <i class="fas fa-question-circle"></i>
            </div>
        </div>
        </form>
        <hr/>
        <div class="row rowProceed">
            <button type="submit" @click="onSubmit" class="btnProceed">Proceed to Checkout</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CardDetails',
  data () {
    return {
      Card: {
        holder: 'AlayaCare',
        number: '',
        expiration_month: '',
        expiration_year: '',
        cvv: ''
      }
    }
  },
  methods: {
    onSubmit () {
      this.$validator.validate().then((result) => {
        if (!result) {
          this.$swal({
            type: 'error',
            title: 'There was an error!',
            html: `   <p v-if="this.errors.first('credit_card_holder') !== underfined">${this.errors.first('credit_card_holder')}</p>
                      <p>${this.errors.first('credit_card_number')}</p>
                      <p>${this.errors.first('credit_cart_month')}</p>
                      <p>${this.errors.first('credit_card_year')}</p>
                    `,
            footer: '<a href="https://www.linkedin.com/in/albertoflfilho/">Alberto Lacerda | Test for AlayaCare | Click to LinkedIn Profile</a>'
          })
        } else {
          this.$swal({
            type: 'info',
            title: 'HI !',
            text: 'This is a test for AlayaCare',
            footer: '<a href="https://www.linkedin.com/in/albertoflfilho/">Alberto Lacerda | Test for AlayaCare | Click to LinkedIn Profile</a>'
          })
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

$gray1: #a9b5d5;
$blueLayout: #4a5fa7;

::placeholder {
  padding: 0;
  color: $gray1;
  font-weight: 500;
  letter-spacing: 1px;
  font-size: 1.5rem;
}
.row {
  display: flex;
  margin: 0;
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
.col-md-7,
.errorMsg {
  width: 180px;
}

label {
  margin-top: 15px;
  margin-bottom: 0px;
  padding-bottom: 0;
  padding-left: 17px;
  font-size: 1.3rem;
  color: $gray1;
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
  color: $blueLayout;
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
.col-md-9,
.col-md-6,
.col-md-4,
.col-md-3,
.col-md-2,
.col-md-5 {
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
  color: $blueLayout;
  font-size: 1.5rem;
  width: 95%;
  background-color: white;
  border: none;
}
.col-md-5 input {
  padding-bottom: 0px;
  padding-left: 0px;
  height: 30px;
  margin-left: 18px;
  font-size: 1.5rem;
  color: $blueLayout;
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
  color: $blueLayout;
  width: 55px;
  background-color: white;
  border: none;
}
#cvv::-webkit-input-placeholder {
  color: $gray1;
  font-weight: 500;
}
.fas,
.far {
  font-size: 2rem;
  padding-top: 20px;
  padding-right: 20px;
  float: right;
  color: #e5e7f5;
  background-color: white;
}
.col-md-2 {
  padding: 0;
}
.fas {
  padding-right: 36px;
  color: #87a0e8;
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
