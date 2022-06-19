<template>
    {{ todo.title }} - {{ todo.body }}
    <router-link :to="{ name: 'todos.edit', params: { id: todo.identify }}">Edit</router-link>
</template>

<script>
export default {
    name: 'TodoView',
    props: {
        todo: {
            require: true,
            type: Object
        }
    }
}
</script>