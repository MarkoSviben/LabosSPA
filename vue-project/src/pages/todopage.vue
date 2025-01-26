<template>
    <div class="todo-page">
      <h1>ToDo Lista</h1>
  
      <p>Ukupno zadataka: <span>{{ totalTodos }}</span></p>
  
      <AddTodo @todo-added="handleTodoAdded" />
  
      <TaskList
        :tasks="todos"
        @task-removed="removeTodo"
        @task-toggle="toggleDone"
      />
    </div>
  </template>
  
  <script>
  import { onMounted, computed } from 'vue'
  import { useTodoStore } from '../store/todostore'
  import { storeToRefs } from 'pinia'
  import AddTodo from '../components/addtodo.vue'
  import TaskList from '../components/TaskList.vue'
  
  export default {
    name: 'ToDoPage',
    components: { AddTodo, TaskList },
    setup() {
      const todoStore = useTodoStore()
      const { todos } = storeToRefs(todoStore) 
  
      onMounted(async () => {
        todoStore.loadTodos() 
        await todoStore.fetchTodos()
      })
  
      const totalTodos = computed(() => todos.value.length)
  
      function handleTodoAdded(newTask) {
        todoStore.addTodo(newTask)
      }
  
      function removeTodo(taskId) {
        todoStore.removeTodo(taskId)
      }
  
      function toggleDone(taskId) {
        todoStore.toggleDone(taskId)
      }
  
      return {
        todos,
        totalTodos,
        handleTodoAdded,
        removeTodo,
        toggleDone
      }
    }
  }
  </script>
  
  <style scoped>
  :root {
    --page-bg: #f5f5f5;
    --heading-color: #333;
    --text-color: #555;
    --accent-color: #4CAF50;
    --font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  
  .todo-page {
    max-width: 600px;
    margin: 40px auto;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    font-family: var(--font-family);
  }
  
  .todo-page h1 {
    text-align: center;
    color: var(--heading-color);
    margin-bottom: 20px;
  }
  
  .todo-page p {
    text-align: center;
    color: var(--text-color);
    font-size: 1.2rem;
    margin-bottom: 30px;
  }
  
  .todo-page p span {
    font-weight: bold;
    color: var(--accent-color);
  }
  </style>
  