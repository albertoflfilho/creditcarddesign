<template>
  <div id="app">
    <Test class="test" msg="creditCardDesign Test from AlayaCare"/>
    <CreditCardDesign />
  </div>
</template>

<script>
import Test from './components/Test.vue';
import CreditCardDesign from './components/CreditCardDesign.vue';

export default {
  name: 'app',
  components: {
    Test,
    CreditCardDesign
  }
}
</script>

<style>
body {
  background: url('./assets/bg.png');
  background-repeat: none;
}
#app {
  color: #2c3e50;
  margin: 0 auto;
}

@media (max-width: 500px) {
  .test {
    display: none;
  }
}
</style>
