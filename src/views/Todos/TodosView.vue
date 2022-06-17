<template>
    <h1>Lista de Tarefas</h1>

    <div v-if="loading">
        Carregando...
    </div>

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

        return {
            loading,
            todos
        }
    }
}
</script>