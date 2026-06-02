<template>

  <div class="task-form">

    <input
      v-model="task"
      type="text"
      placeholder="Enter your task..."
      @keyup.enter="addTask"
    />

    <button @click="addTask">
      Add
    </button>

  </div>

</template>

<script>

import { ref } from 'vue'

export default {

  name:'TodoForm',

  emits:['add'],

  setup(props,{ emit }) {

    const task = ref('')

    function addTask(){

      if(task.value.trim() === '') {

          return
      }

      emit('add', task.value)

      task.value = ''
    }

    return{
      task,
      addTask
    }
  }
}

</script>

<style scoped>

.task-form{
  display:flex;
  gap:12px;
  margin-bottom:25px;
}

input{
  flex:1;
  padding:14px;
  border:none;
  border-radius:14px;
  background:#f3f3f3;
  outline:none;
  font-size:16px;
}

button{
  border:none;
  padding:14px 22px;
  border-radius:14px;
  background:#667eea;
  color:white;
  cursor:pointer;
  transition:.3s;
  font-size:15px;
}

button:hover{
  background:#5568d8;
}

</style>