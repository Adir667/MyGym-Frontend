<template>
  <section>
    <div class="container">
      <h2 class="mt-3 mt-lg-5">Welcome to MyGym</h2> <br />
    </div>
  </section>
  <div class="b-example-divider"></div>

  <div class="bg-dark text-secondary px-4 py-5 text-center">
    <div class="py-5">
      <h1 class="display-5 fw-bold text-white">Plan your workout</h1>
      <div class="col-lg-6 mx-auto">
        <p class="fs-5 mb-4">"MyGym" provides professional information about exercises and health habits. In order to view
          our content, you have to be logged in.
          Our app also allows you to create you own exercise (in case we missed something...), modify the exsisting workouts
          to add notes and comments, and remove the workout you don't find so appealing.
          
        </p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" @click="this.$router.push('/login')" class="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Log in</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
</style>