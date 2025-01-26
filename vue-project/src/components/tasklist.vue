<template>
    <ul class="task-list">
      <li 
        v-for="task in tasks" 
        :key="task.id"
        :class="{ done: task.done }"
      >
        <span @click="$emit('task-toggle', task.id)">
          {{ task.text }}
        </span>
        <button @click="$emit('task-removed', task.id)">Ukloni</button>
      </li>
    </ul>
  </template>
  
  <script>
  import { watch } from 'vue'
  
  export default {
    name: 'TaskList',
    props: {
      tasks: {
        type: Array,
        required: true
      }
    },
    emits: ['task-removed', 'task-toggle'],
    setup(props) {
      watch(() => props.tasks, (newTasks) => {
        console.log('TaskList prima ažurirane zadatke:', newTasks)
      })
    }
  }
  </script>
  
  <style scoped>
  :root {
    --list-bg: #ffffff;
    --list-border: #e0e0e0;
    --item-padding: 15px;
    --item-border-radius: 8px;
    --hover-bg: #f9f9f9;
    --button-bg: #f44336;
    --button-hover-bg: #d32f2f;
    --button-color: #fff;
    --transition-speed: 0.3s;
    --font-color: #333;
  }
  
  .task-list {
    list-style-type: none;
    padding: 0;
    background-color: var(--list-bg);
    border: 1px solid var(--list-border);
    border-radius: var(--item-border-radius);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .task-list li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--item-padding);
    border-bottom: 1px solid var(--list-border);
    transition: background-color var(--transition-speed);
  }
  
  .task-list li:last-child {
    border-bottom: none;
  }
  
  .task-list li:hover {
    background-color: var(--hover-bg);
  }
  
  .task-list li span {
    flex: 1;
    cursor: pointer;
    color: var(--font-color);
    transition: color var(--transition-speed);
  }
  
  .task-list li.done span {
    text-decoration: line-through;
    opacity: 0.6;
    color: grey;
  }
  
  .task-list button {
    background-color: var(--button-bg);
    color: var(--button-color);
    border: none;
    padding: 8px 12px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color var(--transition-speed), transform var(--transition-speed);
  }
  
  .task-list button:hover {
    background-color: var(--button-hover-bg);
    transform: scale(1.05);
  }
  
  .task-list button:active {
    transform: scale(1);
  }
  </style>
  