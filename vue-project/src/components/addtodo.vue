<template>
    <div class="add-todo">
      <input 
        type="text" 
        v-model="newTask" 
        @keyup.enter="emitTodoAdded"
        placeholder="Unesi novi zadatak..."
      />
      <button @click="emitTodoAdded">Dodaj</button>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  
  export default {
    name: 'AddTodo',
    emits: ['todo-added'],
    setup(props, { emit }) {
      const newTask = ref('')
  
      function emitTodoAdded() {
        if (!newTask.value.trim()) return
        emit('todo-added', newTask.value.trim())
        newTask.value = ''
      }
  
      return {
        newTask,
        emitTodoAdded
      }
    }
  }
  </script>
  
  <style scoped>
  :root {
    --input-bg: #f0f2f5;
    --button-bg: #4CAF50;
    --button-hover-bg: #45a049;
    --input-border: #ccc;
    --button-color: #fff;
    --border-radius: 8px;
    --transition-speed: 0.3s;
  }
  
  .add-todo {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }
  
  .add-todo input {
    flex: 1;
    padding: 10px 15px;
    border: 1px solid var(--input-border);
    border-radius: var(--border-radius);
    background-color: var(--input-bg);
    font-size: 16px;
    transition: border-color var(--transition-speed);
  }
  
  .add-todo input:focus {
    border-color: #4CAF50;
    outline: none;
  }
  
  .add-todo button {
    padding: 10px 20px;
    background-color: var(--button-bg);
    color: var(--button-color);
    border: none;
    border-radius: var(--border-radius);
    cursor: pointer;
    font-size: 16px;
    transition: background-color var(--transition-speed), transform var(--transition-speed);
  }
  
  .add-todo button:hover {
    background-color: var(--button-hover-bg);
    transform: translateY(-2px);
  }
  
  .add-todo button:active {
    transform: translateY(0);
  }
  </style>
  