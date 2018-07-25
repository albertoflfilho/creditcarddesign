<template>
  <div class="creditCardDesign">
    <Header/>
    <CarouselCard/>
    <CardDetails/>
  </div>
</template>

<script>
import Header from './Header.vue';
import CardDetails from './CardDetails.vue';
import CarouselCard from './CarouselCard.vue';

export default {
  name: 'CreditCardDesign',
  components: {
    Header,
    CardDetails,
    CarouselCard
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.creditCardDesign {
    max-width: 100%;
}

</style>
