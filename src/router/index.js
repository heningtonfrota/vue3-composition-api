import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import TodosView from '@/views/Todos/TodosView.vue';
import AddTodoView from "@/views/Todos/AddTodoView.vue";
import EditTodoView from "@/views/Todos/EditTodoView.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/todos',
    name: 'todos.index',
    component: TodosView
  },
  {
    path: '/todos/create',
    name: 'todos.create',
    component: AddTodoView
  },
  {
    path: '/todos/:id/edit',
    name: 'todos.edit',
    component: EditTodoView,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
