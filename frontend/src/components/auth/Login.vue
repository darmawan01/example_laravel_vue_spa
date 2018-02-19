<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-7">
                    <form class="form-signin" @submit.prevent="register">
                        <div class="text-center mb-4">
                            <!-- <img class="mb-4" src="../assets/logo.png" alt="" width="72" height="72"> -->
                            <h1 class="h3 mb-3 font-weight-normal">Register</h1>
                            <p>Register For Login And Try The SPA Vue Js With Backend Laravel</p>
                        </div>

                        <div class="form-group">
                            <input type="email" v-model="rname" class="form-control" placeholder="Email address" >
                            
                        </div>

                        <div class="form-group">
                            <input type="email" v-model="remail" class="form-control" placeholder="Email address" >
                            
                        </div>

                        <div class="form-group">
                            <input type="password" v-model="rpassword"  class="form-control" placeholder="Password" required>
                            
                        </div>

                        <input class="btn btn-lg btn-primary btn-block" type="submit" value="Login">
                    </form>
                </div>
                <div class="col-md-5">
                    <form class="form-signin" @submit.prevent="login">
                        <div class="text-center mb-4">
                            <!-- <img class="mb-4" src="../assets/logo.png" alt="" width="72" height="72"> -->
                            <h1 class="h3 mb-3 font-weight-normal">Login</h1>
                            <p>Login For Try The SPA Vue Js With Backend Laravel</p>
                        </div>

                        <div class="form-group">
                            <input type="email" v-model="email" class="form-control" placeholder="Email address" >
                            
                        </div>

                        <div class="form-group">
                            <input type="password" v-model="password"  class="form-control" placeholder="Password" required>
                            
                        </div>

                        <div class="checkbox mb-3">
                            <label>
                            <input type="checkbox" value="remember-me"> Remember me
                            </label>
                        </div>
                        <input class="btn btn-lg btn-primary btn-block" type="submit" value="Login">
                        
                    </form>
                </div>            
            </div>
            <hr>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      remail: "",
      rpassword: "",
      rname: ""
    };
  },

  methods: {
    login() {
      var data = {
        client_id: 2,
        client_secret: "OgubyHvmoPfJdC6gvtdfLg7jlmnxi3rdLwhoA8cC",
        grant_type: "password",
        username: this.email,
        password: this.password
      };

      this.$http.post("oauth/token", data).then(response => {
        this.$auth.setToken(
          response.body.access_token,
          response.body.expires_in + Date.now()
        );

        this.$router.push("/feed");
      });
    },

    register() {}
  }
};
</script>

<style >

</style>