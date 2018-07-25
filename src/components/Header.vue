<template>
    <div class="container">
        <div class="row">
            <div class=".col-xs-6 .col-sm-4">
                <i class="fas fa-arrow-left"></i>
            </div>
            <div class=".col-xs-6 .col-sm-4">
                <h1>{{ "Card Checkout" }}</h1>
            </div>
            <div class=".col-xs-6 .col-sm-4">
                <i class="fas fa-plus"></i>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
  name: 'Header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .container {
        color: white;
        background-color: #839CE6;
        height: 10vh;
        max-width: 100%;
    }
    .row {
        /* width: 100%; */
        padding-top: 15px;
        text-align: center;
    }
    h1 {
        margin-top: 0;
        letter-spacing: 1px;
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: 1.6rem;
        font-weight: 600;
        /* text-align: center; */
        /* width: 70%; */
    }
    .fa-arrow-left {
        top: 15px;
        position: absolute;
        width: 10%;
        font-size: 1.5rem;
        /* float: left; */
        left: 0px;
    }
    .fa-plus {
        position: absolute;
        width: 10%;
        font-size: 1.5rem;
        right: 0px;
        top: 15px;
        /* float: right; */
    }
</style>
