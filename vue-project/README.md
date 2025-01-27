# web labos SPA

## Upisi ovo
```
npm install
```

## Pokreni s ovime
```
npm run dev
```


## Implementacija trazenih stvari

### Interpolacija / Jednosmjerno Povezivanje

    src/pages/ToDoPage.vue -> <p>Ukupno zadataka: {{ totalTodos }}</p>  -> pokazuje ukupni broj zadataka interpoliranjem computed property-ja "
    "totalTodos".

###  Dvosmjerno Povezivanje
    src/components/AddTodo.vue -> 
<input 
  type="text" 
  v-model="newTask" 
  @keyup.enter="emitTodoAdded"
  placeholder="Unesi novi zadatak..."
/>
 -> v-model="newTask" povezuje vrijednost input polja s reaktivnom varijablom newTask, omogućujući dvosmjerno povezivanje podataka.

 ### Metode 
    src/components/AddTodo.vue

    function emitTodoAdded() {
  if (!newTask.value.trim()) return
  emit('todo-added', newTask.value.trim())
  newTask.value = ''
}

    Metoda emitTodoAdded emitira događaj todo-added s novim zadatkom i resetira uno

### computed properties
    src/pages/ToDoPage.vue

    const totalTodos = computed(() => todos.value.length)

    Computed property totalTodos računa broj zadataka na temelju dužine todos niza iz store-a.

### scoped style
    src/components/AddTodo.vue
    <style scoped>
  .add-todo {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }
</style>
 Atribut scoped osigurava da se stilovi primjenjuju samo na AddTodo komponentu

 ### Lifecycle Hookovi
    src/pages/ToDoPage.vue
    
    onMounted(async () => {
  todoStore.loadTodos()
  await todoStore.fetchTodos()
})
    Lifecycle hook onMounted učitava i dohvaća zadatke kada se komponenta ToDoPage montira.

### Rutiranje
    src/router/index.js
    import ToDoPage from '../pages/ToDoPage.vue'
import AboutPage from '../pages/AboutPage.vue'
import NotFoundPage from '../pages/NotFoundPage.vue'

const routes = [
  { path: '/', name: 'home', component: ToDoPage },
  { path: '/about', name: 'about', component: AboutPage },
  { path: '/:catchAll(.*)', name: 'not-found', component: NotFoundPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

    Definira rute za početnu stranicu (/), o aplikaciji (/about) i catch-all rutu za 404 greške.


### komponente
    a. Komponenta Bez Stanja (Korištenje Props)
         src/components/TaskList.vue

props: {
  tasks: {
    type: Array,
    required: true
  }
},
Komponenta TaskList prima tasks niz kao prop i koristi ga za renderiranje liste zadataka bez održavanja vlastitog stanja.

b. Komponenta sa stanjem

 src/components/AddTodo.vue
L
const newTask = ref('')
Komponenta AddTodo koristi reaktivnu varijablu newTask za upravljanje unosom novog zadatka.

### emitiranje dogadaja
src/components/AddTodo.vue
emit('todo-added', newTask.value.trim())

     Komponenta AddTodo emitira događaj todo-added kada korisnik doda novi zadatak, omogućujući roditeljskoj komponenti da obradi dodavanje zadatka.
### pinia store
src/store/todoStore.js
    export const useTodoStore = defineStore('todoStore', () => {
  const todos = ref([])

  function loadTodos() { /* ... */ }
  function saveTodos() { /* ... */ }
  async function fetchTodos() { /* ... */ }
  function addTodo(newText) { /* ... */ }
  function removeTodo(id) { /* ... */ }
  function toggleDone(id) { /* ... */ }

  return {
    todos,
    fetchTodos,
    addTodo,
    removeTodo,
    toggleDone,
    loadTodos
  }
})
Pinia store useTodoStore upravlja stanjem zadataka (todos), pružajući metode za učitavanje, spremanje, dodavanje, uklanjanje i prebacivanje statusa zadataka.

## asinkorni dohvati podataka 
src/store/todoStore.js
async function fetchTodos() {
  if (todos.value.length > 0) return

  return new Promise((resolve) => {
    setTimeout(() => {
      todos.value = [
        { id: 1, text: 'Kupiti namirnice', done: false },
        { id: 2, text: 'Napisati zadaću', done: true },
      { id: 3, text: 'Nazvati prijatelja', done: false }
      ]
      saveTodos()
      resolve()
    }, 1000)
  })
}
funkcija fetchTodos simulira asinkroni poziv na backend koristeći setTimeout za učitavanje inicijalnih zadataka nakon kašnjenja od 1 sekunde

## lazy loading 
src/router/index.js
const AboutPage = () => import('../pages/AboutPage.vue')
