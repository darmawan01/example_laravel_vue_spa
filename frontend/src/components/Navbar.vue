<template>
    <div>
        <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
            <h5 class="my-0 mr-md-auto font-weight-normal">
                <img src="../assets/logo.png" width="30" height="30" alt=""> Laravel Vue SPA
            </h5>
            <nav class="my-2 my-md-0 mr-md-3">
                <ul>
                    <router-link class="p-2 text-dark" to="/login" v-if="!isAuth">
                        <a>Login</a>
                    </router-link>
                        
                    <router-link class="p-2 text-dark" to="/register" v-if="!isAuth">
                        <a>Register</a>
                    </router-link>

                    <router-link class="p-2 text-dark" to="/feed" v-if="isAuth">
                        <a>Feed</a>
                    </router-link>

                    <router-link class="p-2 text-dark" to="/product/create" v-if="isAuth">
                        <a>Add Feed</a>
                    </router-link>
                        
                    <router-link class="p-2 text-dark" to="/Logout" v-if="isAuth">
                        <a>Logout</a>
                    </router-link>
                </ul>
            </nav>
        </div>
        <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h1 class="display-4">Simple Project</h1>
            <hr style="width:400px; height:3px; background-color:blue;">
            <p class="lead">Name: Darmawan Zulkifli</p>
            <p class="lead">Email: darmawan.zulkifli@gmail.com</p>
            <hr style="height:3px; background-color:blue;">
        </div>

    </div>
</template>

<script>
export default {
  data() {
      return{
          isAuth: null
      }
  },

  created() {
    this.isAuth = this.$auth.isAuthenticated();

    this.isAuthenticatedUser()
  },

  methods:{
      isAuthenticatedUser(){
          this.$http.get('api/user')
                .then(response =>{
                    this.$auth.setAuthenticatedUser(response.body)
                    console.log(this.$auth.getAuthenticatedUser());
                    
                })
      }
  }
};
</script>
