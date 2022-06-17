<template>
    <h1>Lista de Tarefas</h1>

    <ul>
        <li v-for="todo in todos" :key="todo.id">
            {{ todo.name }}
        </li>
    </ul>

    <input type="text" v-model="name">
</template>

<script>
import { ref } from "vue";
export default {
    name: 'TodosView',
    setup() {
        const todos = [
            {
                id: 1,
                name: 'tarefa 01',
                completed: true
            },
            {
                id: 2,
                name: 'tarefa 02',
                completed: false
            },
            {
                id: 3,
                name: 'tarefa 03',
                completed: true
            },
        ];

        const name = ref('default value');

        return {
            todos,
            name
        }
    }
}
</script>