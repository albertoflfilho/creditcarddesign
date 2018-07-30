<template>
  <div id="app">
    <CreditCardDesign />
  </div>
</template>

<script>
import CreditCardDesign from './components/CreditCardDesign.vue'

export default {
  name: 'app',
  components: {
    CreditCardDesign
  }
}
</script>

<style lang="scss">
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
