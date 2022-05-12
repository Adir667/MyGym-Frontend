<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <div class="container-fluid">
      <ul class="navbar-nav me-auto mb-2 mb-md-0">
        <li>
          <img
            alt="MyGym"
            src="https://cdn-icons-png.flaticon.com/512/1000/1000008.png"
            width="40"
            height="40"
          />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </li>
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active"
            >Home</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/exercises" class="nav-link" active-class="active"
            >Exercises</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link" active-class="active"
            >Log in</router-link
          >
        </li>
        <li class="nav-item">
          <button type="button" @click="signout()" class="btn btn-dark">Sign out</button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  methods: {
    signout() {
      localStorage.setItem("token", "");
          this.$router.push('/');
    },
  },
};
</script>

<style>
</style>