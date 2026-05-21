<template>

  <div class="tasks">

    <TodoItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @delete="$emit('delete', todo.id)"
      @toggle="$emit('toggle', todo.id)"
    />

  </div>

</template>

<script>

import TodoItem from './TodoItem.vue'

export default {

  name:'TodoList',

  components:{
    TodoItem
  },

  props:{
    todos:Array
  },

  emits:[
    'delete',
    'toggle'
  ]
}

</script>

<style scoped>

.tasks{
  display:flex;
  flex-direction:column;
  gap:14px;
}

</style>