<template>
    <h1>
        Lista de Tarefas
        <router-link :to="{ name: 'todos.create' }">Adicionar</router-link>
    </h1>

    <div v-if="loading">
        Carregando...
    </div>

    <ul>
        <li v-for="todo in todos" :key="todo.id">
            <TodoView :todo="todo" @todoDeleted="removeTodoList" @todoUpdated="updatedTodo"/>
        </li>
    </ul>

    <input type="text" v-model="name">
</template>

<script>
import { onMounted, ref } from "vue";
import TodoService from "@/services/todos.services";
import TodoView from "./TodoView.vue";

export default {
    name: 'TodosView',
    components: {
        TodoView
    },
    setup() {
        const todos = ref([]);

        const loading = ref(false);

        onMounted(() => {
            loading.value = true;

            TodoService.getAll()
                .then(response => {
                    console.log(response);
                    todos.value = response.data.data;
                    loading.value = false;
                })
                .catch(error => {
                    console.log(error);
                })
                .finally(() => loading.value = false);
        });

        const removeTodoList = (todo) => {
            todos.value.splice(todos.value.indexOf(todo), 1);
        }

        const updatedTodo = (todo) => todos.value[todos.value.indexOf(todo)] = todo;

        return {
            loading,
            todos,
            removeTodoList,
            updatedTodo
        }
    }
}
</script>