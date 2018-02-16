<template>
    <div>
        <div class="body">
            <div class="form-group">
                <input v-model="email" type="email" placeholder="Your Email" />
            </div>
            <div class="form-group">
                <input v-model="password" type="password" placeholder="Your Password"/>
            </div>
            <div class="form-group">
                <button @click="login" type="submit">Login</button>
            </div>
        </div>

        <pre>
            {{$data}}
        </pre>
    </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },

  methods: {
    login() {
      var data = {
          client_id:2,
          client_secret: 'OgubyHvmoPfJdC6gvtdfLg7jlmnxi3rdLwhoA8cC',
          grant_type: 'password',
          username: this.email,
          password: this.password
      };

      this.$http.post("oauth/token",data)
        .then(response => {
            this.$auth.setToken(response.body.access_token, response.body.expires_in + Date.now())

            this.$router.push("/feed")
        });
    }
  }
};
</script>

<style >

</style>