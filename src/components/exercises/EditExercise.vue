<template>
  <section>
    <div class="container">
      <form ref="form">
        <h2 class="mt-3 mt-lg-5">Edit an exercise {{exercise.name}}</h2>
        <h5 class="mb-4"></h5>

        <div class="input-group mb-3">
          <span class="input-group-text">Name</span>
          <input type="text" class="form-control" v-model="exercise.name">
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text">Description</span>
          <textarea
            class="form-control"
            v-model="exercise.description"
          ></textarea>
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
          <button type="button" class="btn btn-primary" @click="saveChanges(Number(id))">
            Save changes
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
  name: "EditExercise",
  props: {
    id: Number,
  },
  data() {
    return {
      exercise: {
        id: 0,
        name: "",
        description: "",
        category_id: 0,
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
    saveChanges(id) {
      axios
        .put("http://localhost/exercises/"+id , {
          name: this.exercise.name,
          description: this.exercise.description,
          category_id: document.getElementById("exerciseCategory").value,
        })
        .then(() => {
          this.$router.push('/exercises');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },  
};
</script>

<style>
</style>