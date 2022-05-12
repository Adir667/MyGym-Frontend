<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h1>Log in to MyGym</h1>
          <form>
            <div class="mb-3">
              <label for="inputUsername" class="form-label">Username</label>
              <input
                id="inputUsername"
                type="text"
                class="form-control"
                v-model="username"
              />
            </div>
            <div class="mb-3">
              <label for="inputPassword" class="form-label">Password</label>
              <input
                type="password"
                class="form-control"
                id="inputPassword"
                v-model="password"
              />
            </div>
            <button type='button' @click="login()" class="btn btn-warning">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
 
<script>
 
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        username: this.username,
        password: this.password
      })
      .then(() => {
        this.$router.replace("/exercises");
      })
      .catch((error) => {
        this.errorMessage = error;
      })
    }
  }
};
</script>
 
<style>
</style>