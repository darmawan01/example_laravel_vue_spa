<template>
    <div>
        <header>
            <nav>
                <ul>
                    <router-link tag="li" to="/login" v-if="!isAuth">
                        <a>Login</a>
                    </router-link>
                    
                    <router-link tag="li" to="/register" v-if="!isAuth">
                        <a>Register</a>
                    </router-link>

                    <router-link tag="li" to="/Feed" v-if="isAuth">
                        <a>Feed</a>
                    </router-link>

                    <router-link tag="li" to="/product/create" v-if="isAuth">
                        <a>Add Feed</a>
                    </router-link>
                    
                    <router-link tag="li" to="/Logout" v-if="isAuth">
                        <a>Logout</a>
                    </router-link>
                </ul>
            </nav>
        </header>
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
