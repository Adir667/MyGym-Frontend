import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import store from './../store/store'


import Home from './components/Home.vue';
import ExerciseList from './components/exercises/ExerciseList.vue';
import CreateExercise from './components/exercises/CreateExercise.vue';
import EditExercise from './components/exercises/EditExercise.vue';
import Login from './components/Login.vue';


const routes = [
    { path: '/', component: Home },
    { path: '/exercises', component: ExerciseList },
    { path: '/createexercise', component: CreateExercise },
    { path: '/editexercise/:id', component: EditExercise, props: true  },
    { path: '/login', component: Login }
];

const router = createRouter({
    "history": createWebHistory(),
    routes
})

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');