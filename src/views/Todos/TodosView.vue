<template>
    <h1>Lista de Tarefas</h1>

    <ul>
        <li v-for="todo in todos" :key="todo.id">
            {{ todo.title }}
        </li>
    </ul>

    <input type="text" v-model="name">
</template>

<script>
import { onMounted, ref } from "vue";
import TodoService from "@/services/todos.services";

export default {
    name: 'TodosView',
    setup() {
        const todos = ref([]);

        onMounted(() => {
            TodoService.getAll()
            .then(response => {
                console.log(response);
                todos.value = response.data.data;
            })
            .catch(error => {
                console.log(error);
            })
        })

        return {
            todos
        }
    }
}
</script>