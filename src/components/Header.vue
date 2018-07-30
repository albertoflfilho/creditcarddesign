<template>
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
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
    .row {
        color: white;
        margin-right: 0px;
        margin-left: 0px;
        padding-top: 15px;
        background-color: #839CE6;
        text-align: center;
    }
    h1 {
        margin-top: 0;
        letter-spacing: 1px;
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: 1.6rem;
        font-weight: 600;
    }
    .fa-arrow-left {
        top: 15px;
        margin-right: -30px;
        width: 10%;
        font-size: 1.5rem;
        float: left;
        left: 0px;
    }
    .fa-plus {
        width: 10%;
        font-size: 1.5rem;
        margin-top: -28px;
        float: right;
    }
</style>
