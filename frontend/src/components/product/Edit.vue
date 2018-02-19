<template>
    <div>
      <div class="container">
        <form @submit.prevent="update">
          <div class="card-deck mb-4 text-center">
              <div class="card mb-4 box-shadow">
                <div class="card-header">
                  <h4 class="my-0 font-weight-normal">Update Product {{product.name}}</h4>
                </div>
                <div class="card-body">
                  <div class="form-group">
                      <input v-model="product.name" name="name" v-validate="'required'"
                            class="form-control" 
                            type="text" placeholder="Name of produuct"/>
                      
                      <p class="help-block" v-show="errors.has('name')">
                          {{ errors.first('name') }}
                      </p>
                  </div>
                  <div class="form-group">
                      <input v-model="product.price" name="price" v-validate="'required|min_value:5'" class="form-control" type="number" placeholder="Price of produuct"/>
                        
                        <p class="help-block" v-show="errors.has('price')">
                          {{ errors.first('price') }}
                      </p>
                  </div>
                  <div class="form-group">
                      <textarea v-model="product.describ" class="form-control" v-validate="'required'" name="describ" placeholder="Describ of produuct"></textarea>
                      <p class="help-block" v-show="errors.has('describ')">
                          {{ errors.first('describ') }}
                      </p>
                  </div>
                  <!-- <div class="form-group">
                      button akan tampil kalo semua terisi
                      <button v-show="product.name && product.price && product.describ" @click="create">Create</button>

                  </div> -->
                </div>
                <div class="card-footer">
                      <input type="submit" value="Update" class="btn btn-lg btn-block btn-outline-success">
                      <router-link class="btn btn-lg btn-block btn-outline-danger" :to="'/feed'">
                          Clear
                      </router-link>
                  </div>
              </div>
            </div>       
        </form>
      </div>  
    </div>
</template>

<script>
import swall from 'sweetalert'
export default {
  data() {
    return {
      product: {}
    };
  },

  created(){
      this.getProduct()
  },

  methods: {
    getProduct() {
      this.$http
        .get("api/products/" + this.$route.params.product)
        .then(response => {
          this.product = response.body;
        })
        // penangan response error local, secara global ada di main.js
        // .catch(response =>{
        //     console.log(response);
            
        //     swall(response.status.toString(), response.body.error, "error")
        // })
    },
    update() {
      this.$validator.validateAll().then(() => {
        this.$http.put("api/products/" + this.$route.params.product, this.product).then(response => {
          swall("Updated!", "Product has been updated", "success")
          this.$router.push('/feed')
        });
      })
    }
  }
};
</script>

<style scoped>

</style>