<template>

  <div class="task-item">

    <div
      class="task-text"
      :class="{done:todo.completed}"
      @click="$emit('toggle')"
    >
      {{ todo.text }}
    </div>

    <button
      class="delete-btn"
      @click="$emit('delete')"
    >
      ✕
    </button>

  </div>

</template>

<script>

export default {

  name:'TodoItem',

  props:{
    todo:Object
  },

  emits:[
    'delete',
    'toggle'
  ]
}

</script>

<style scoped>

.task-item{
  display:flex;
  justify-content:space-between;
  align-items:center;
  background:white;
  padding:16px;
  border-radius:16px;
  box-shadow:0 4px 12px rgba(0,0,0,.08);
  transition:.3s;
}

.task-item:hover{
  transform:translateY(-3px);
}

.task-text{
  font-size:16px;
  color:#333;
  cursor:pointer;
}

.done{
  text-decoration:line-through;
  opacity:.5;
}

.delete-btn{
  width:36px;
  height:36px;
  border:none;
  border-radius:10px;
  background:#ff4d4d;
  color:white;
  cursor:pointer;
  transition:.3s;
}

.delete-btn:hover{
  background:#e63939;
}

</style>