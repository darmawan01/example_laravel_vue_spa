<template>
    <div>
        <div class="form-group">
            <input v-model="product.name" class="input-group" type="text" placeholder="Name of produuct"/>
        </div>
        <div class="form-group">
            <input v-model="product.price" class="input-group" type="number" placeholder="Price of produuct"/>
        </div>
        <div class="form-group">
            <textarea v-model="product.describ" class="input-group" placeholder="Describ of produuct"></textarea>
        </div>
        <div class="form-group">
            <button v-show="product.name && product.price && product.describ" @click="create">Create</button>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        name: "",
        price: 0,
        describ: ""
      }
    };
  },

  methods: {
    create() {
      this.$http.post("api/products", this.product)
      .then(response => {
        this.$router.push('/feed')
      });
    }
  }
};
</script>

<style scoped>

</style>