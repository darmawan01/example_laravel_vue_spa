<template>
    <div>
      <div class="container">
         <div class="card-deck mb-4 text-center">
            <div class="card mb-4 box-shadow">
              <div class="card-header">
                <h4 class="my-0 font-weight-normal">{{product.name}}</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title">$ {{product.price}} <small class="text-muted">/@1 </small></h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <p>{{product.describ}}</p>
                </ul>
              </div>
                <div class="card-footer">
                  <button type="button" class="btn btn-lg btn-block btn-outline-primary">Buy</button>
                  <router-link class="btn btn-lg btn-block btn-outline-success" :to="'/product/'+product.id+'/update'">
                      Update
                  </router-link>
                  <button class="btn btn-lg btn-block btn-outline-danger" v-if="product.id == authenticatedUser.id"
                            @click="deleteProduct">Delete</button>
                </div>
            </div>
          </div>       
      </div>       
    </div>
</template>

<script>
import swal from "sweetalert";
export default {
  props: ["product", "authenticatedUser"],

  methods: {
    deleteProduct() {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this Product!",
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          this.$http.delete("api/products/" + this.product.id).then(response => {
              console.log(response);
              
            swal("Poof! Your Product has been deleted!", {
              icon: "success"
            });
          });
        } else {
          swal("Your Product is safe!");
        }
      });
    }
  }
};
</script>