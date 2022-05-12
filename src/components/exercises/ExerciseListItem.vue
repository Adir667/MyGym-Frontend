<template>
  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3 p-2">
    <div class="card product-card h-100">
      <div class="card-header">#{{ exercise.name }}</div>
      <div class="card-body">
        <img
          :src="exercise.image"
          :alt="exercise.title"
          :title="exercise.title"
        />
        <div class="float-start">
          <p class="category">Category: {{ exercise.category.name }}</p>

            <small>{{ exercise.description }}</small>

        </div>
      </div>
      <div class="card-footer">
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="button"
          aria-pressed="false"
          autocomplete="off"
        >
          ♥ LIKE
        </button>
        <button
          class="btn btn-outline-secondary"
          @click="editExercise(exercise.id)"
        >
          Edit
        </button>
        <button
          class="btn btn-light"
          @click="deleteExercise(exercise.id, exercise.name)"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "../../axios-auth";

export default {
  name: "ExerciseListItem",
  props: {
    exercise: Object,
  },
  methods: {
    deleteExercise(id, name) {
      if (confirm("Are you sure you want to delete exercise " + name + "?")) {
        axios
          .delete("http://localhost/exercises/" + id)
          .then(() => {
            document.location.reload();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    editExercise(id) {
      //alert("Exercise not edited: " + id);
      this.$router.push("/editexercise/" + id);
      // use the router to navigate to the editproduct route and pass the id
    },
  },
};
</script>

<style>
.card-header {
  color: rgb(155, 0, 0);
  font: bold;
}

.btn btn-light {
  border-end-start-radius: 10px;
}
.p {
  font: bold;
}
</style>