<template>
    <h1>Editar Tarefa</h1>

    <form action="#" method="post" @submit.prevent="editTodo">
        <input type="text" name="title" placeholder="Titulo" v-model="todo.name">
        <input type="text" name="description" placeholder="Descrição" v-model="todo.description">
        <button type="submit" :disabled="todo.loading">
            <span v-if="todo.loading">Aguarde...</span>
            <span v-else>Enviar</span>
        </button>
    </form>
</template>

<script>
import { onMounted, reactive } from "vue";

import TodoService from "@/services/todos.services";
import router from '@/router';

export default {
    name: 'EditTodoView',
    props: {
        id: {
            require: true
        }
    }, 
    setup(props) {
        const todo = reactive({
            name: '',
            description: '',
            completed: false,
            loading: false
        })

        onMounted(() => {
            todo.loading = true;

            TodoService.getTodo(props.id)
                .then((response) => {
                    console.log(response.data.data)
                    const todoR = response.data.data;

                    todo.name = todoR.title;
                    todo.description = todoR.body;
                    todo.completed = todoR.completed == 'S';
                })
                .finally(() => todo.loading = false);
        })

        const editTodo = () => {
            todo.loading = true;
            TodoService.editTodo(props.id, {...todo})
                .then(() => router.push({ name: 'todos.index' }))
                .finally(() => todo.loading = false);
        }

        return {
            todo,
            editTodo
        }
    }
}
</script>