<template>
    <div>
        <h1>Feed Product</h1>
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