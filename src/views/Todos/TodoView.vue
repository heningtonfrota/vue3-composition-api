<template>
    {{ todo.title }} - {{ todo.body }}
    <router-link :to="{ name: 'todos.edit', params: { id: todo.identify }}">Edit</router-link>
    <a href="#" @click.prevent="deleteTodo()"> Deletar</a>
</template>

<script>
import TodoService from "@/services/todos.services";
export default {
    name: 'TodoView',
    props: {
        todo: {
            require: true,
            type: Object
        }
    },
    setup(props, { emit }) {
        const deleteTodo = () => {
            TodoService.deleteTodo(props.todo.identify)
                .then(() => emit('todoDeleted', props.todo));
        }

        return {
            deleteTodo
        }
    }
}
</script>