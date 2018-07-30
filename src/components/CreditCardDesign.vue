<template>
  <div class="container">
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

.container {
    padding: 0;
    margin: auto;
    max-width: 375px;
}

</style>
