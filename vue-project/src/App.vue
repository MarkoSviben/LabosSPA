<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/" class="nav-link">Početna</router-link>
        <router-link to="/about" class="nav-link">O Aplikaciji</router-link>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <p>&copy;  ToDo Aplikacija.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
:root {
  --nav-bg: #4CAF50;
  --nav-text: #fff;
  --nav-hover-bg: #45a049;
  --footer-bg: #f1f1f1;
  --footer-text: #555;
  --font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: var(--font-family);
}

header {
  background-color: var(--nav-bg);
  padding: 10px 20px;
}

nav {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
}

.nav-link {
  color: var(--nav-text);
  text-decoration: none;
  font-size: 1.1rem;
  transition: background-color 0.3s, padding 0.3s, border-radius 0.3s;
  padding: 8px 12px;
  border-radius: 5px;
}

.nav-link:hover {
  background-color: var(--nav-hover-bg);
}

main {
  flex: 1;
  padding: 20px;
  background-color: #f5f5f5;
}

footer {
  background-color: var(--footer-bg);
  text-align: center;
  padding: 15px 0;
  color: var(--footer-text);
  font-size: 0.9rem;
}
</style>
