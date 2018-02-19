<template>
    <div>
        <div class="text-center">
            <h1>Product</h1>
            <hr>
        </div>
        <products></products>
    </div>
</template>

<script>

import Products from './product/Products.vue'

export default {
  components:{
      'products': Products
  }  
  
};
</script>

<style>

</style>