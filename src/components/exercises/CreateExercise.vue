<template>
  <section>
    <div class="container">
      <form ref="form">
        <h2 class="mt-3 mt-lg-5">Create an exercise</h2>
        <h5 class="mb-4"></h5>

        <div class="input-group mb-3">
          <span class="input-group-text">Name</span>
          <input type="text" class="form-control" id="exerciseName" />
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text">Description</span>
          <textarea class="form-control" id="exerciseDescription"></textarea>
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text">Category</span>
          <select class="form-select" id="exerciseCategory">
            <option
              v-for="category in categories" :key="category.id" :value="category.id"
            >
              {{ category.name }}
            </option>
            />
          </select>
        </div>

        <div class="input-group mt-4">
          <button
            type="button"
            @click="createExercise()"
            class="btn btn-primary"
          >
            Create exercise
          </button> &nbsp;&nbsp;&nbsp;&nbsp;
          <button
            type="button"
            class="btn btn-danger"
            @click="this.$router.push('/exercises')"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import axios from "../../axios-auth";
export default {
  name: "CreateExercise",
  data() {
    return {
      exercise: {
        name: "",
        description: "",
        category_id: 1,
      },
      categories: [],
    };
  },
  mounted() {
    this.update();
  },
  methods: {
    update() {
      axios
        .get("http://localhost/categories")
        .then((res) => {
          this.categories = res.data;
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    createExercise() {
      if (
        document.getElementById("exerciseName").value == "" ||
        document.getElementById("exerciseDescription").value == ""
      ) {
        alert("Please fill in all fields");
        return;
      }
      axios
        .post("http://localhost/exercises", {
          name: document.getElementById("exerciseName").value,
          description: document.getElementById("exerciseDescription").value,
          category_id: document.getElementById("exerciseCategory").value,
        })
        .then(() => {
          console.log(document.getElementById("exerciseCategory").value);
          this.$router.replace("/exercises");
        })
        .finally (() => {
          document.getElementById("exerciseName").value == "";
          document.getElementById("exerciseDescription").value == "";
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
</style>