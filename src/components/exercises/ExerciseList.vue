<template>
  <section>
    <div class="container">
      <h2 class="mt-3 mt-lg-5">Exercises</h2>
      <button
        type="button"
        class="btn btn-primary mt-3"
        @click="this.$router.push('/createExercise')"
      >
        Add Your Own Exercise
      </button>
      <div class="row mt-3">
        <exercise-list-item
          v-for="exercise in exercises"
          :key="exercise.id"
          :exercise="exercise"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ExerciseListItem from './../exercises/ExerciseListItem.vue'
import axios from "../../axios-auth";

export default {
  name: "ExerciseList",
  components: {
    ExerciseListItem,
  },
  data() {
    return {
      exercises: [],
    };
  },
  mounted() {
    this.update();
  },
  methods: {
    update() {
      axios
        .get("http://localhost/exercises")
        .then((res) => {
          this.exercises = res.data;
          console.log(res);
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