<template>
  <div class="page">
    <div class="todo-card">
      <h1>Todo App</h1>

      <p class="subtitle">Organize your daily tasks</p>

      <TodoForm @add="addTodo" />

      <TodoList :todos="todos" @delete="deleteTodo" @toggle="toggleTodo" />
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";

import TodoForm from "../components/TodoApp/TodoForm.vue";
import TodoList from "../components/TodoApp/TodoList.vue";

export default {
  name: "TodoView",

  components: {
    TodoForm,
    TodoList,
  },

  setup() {
    const todos = ref(JSON.parse(localStorage.getItem("todos")) || []);

    function addTodo(text) {
      todos.value.push({
        id: Date.now(),
        text,
        completed: false,
      });
    }

    function deleteTodo(id) {
      todos.value = todos.value.filter((todo) => todo.id !== id);
    }

    function toggleTodo(id) {
      const todo = todos.value.find((todo) => todo.id === id);

      todo.completed = !todo.completed;
    }

    watch(
      todos,
      (newTodos) => {
        localStorage.setItem("todos", JSON.stringify(newTodos));
      },
      { deep: true },
    );

    return {
      todos,
      addTodo,
      deleteTodo,
      toggleTodo,
    };
  },
};
</script>

<style scoped>
.page {
  min-height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #667eea, #764ba2);
  padding: 20px;
}

.todo-card {
  width: 100%;
  max-width: 550px;
  background: #f8f9ff;
  padding: 30px;
  border-radius: 24px;
}

h1 {
  text-align: center;
  margin-bottom: 10px;
}

.subtitle {
  text-align: center;
  color: #777;
  margin-bottom: 25px;
}
</style>
