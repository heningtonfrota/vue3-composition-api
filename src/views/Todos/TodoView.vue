<template>
    {{ todo.title }} - {{ todo.body }}
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