import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTodoStore = defineStore('todoStore', () => {
  const todos = ref([])

  function loadTodos() {
    const storedTodos = localStorage.getItem('todos')
    if (storedTodos) {
      try {
        todos.value = JSON.parse(storedTodos)
        console.log('Učitani zadaci iz localStorage:', todos.value)
      } catch (error) {
        console.error('Greška prilikom parsiranja zadataka iz localStorage:', error)
      }
    }
  }

  function saveTodos() {
    try {
      localStorage.setItem('todos', JSON.stringify(todos.value))
      console.log('Zadaci spremljeni u localStorage:', todos.value)
    } catch (error) {
      console.error('Greška prilikom spremanja zadataka u localStorage:', error)
    }
  }

  async function fetchTodos() {
    if (todos.value.length > 0) {
      return
    }

    return new Promise((resolve) => {
      setTimeout(() => {
        todos.value = [
          { id: 1, text: 'Kupiti namirnice', done: false },
          { id: 2, text: 'Napisati zadaću', done: false },
          { id: 3, text: 'Nazvati prijatelja', done: false }
        ]
        console.log('Inicijalni zadaci postavljeni:', todos.value)
        saveTodos()
        resolve()
      }, 1000) 
    })
  }

  function addTodo(newText) {
    if (!newText) return
    const newId = (todos.value[todos.value.length - 1]?.id || 0) + 1
    todos.value.push({
      id: newId,
      text: newText,
      done: false
    })
    console.log('Dodani zadatak:', newText, 'Trenutni zadaci:', todos.value)
    saveTodos()
  }

  function removeTodo(id) {
    todos.value = todos.value.filter(todo => todo.id !== id)
    console.log('Uklonjen zadatak ID:', id, 'Trenutni zadaci:', todos.value)
    saveTodos()
  }

  function toggleDone(id) {
    const todo = todos.value.find(t => t.id === id)
    if (todo) {
      todo.done = !todo.done
      console.log('Promijenjen status zadatka ID:', id, 'Novi status:', todo.done)
      saveTodos()
    }
  }

  return {
    todos,
    fetchTodos,
    addTodo,
    removeTodo,
    toggleDone,
    loadTodos 
  }
})
