<template>
    <div class="not-found">
      <h1>404</h1>
      <p>Nema stranice bzvz.</p>
      <router-link to="/" class="home-link">Idi na početnu stranicu</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotFoundPage'
  }
  </script>
  
  <style scoped>
  :root {
    --bg-color: #f8f9fa;
    --text-color: #333;
    --highlight-color: #4CAF50;
    --font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  
  .not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;
    background-color: var(--bg-color);
    font-family: var(--font-family);
  }
  
  .not-found h1 {
    font-size: 6rem;
    color: var(--highlight-color);
    margin-bottom: 20px;
  }
  
  .not-found p {
    font-size: 1.5rem;
    color: var(--text-color);
    margin-bottom: 30px;
  }
  
  .home-link {
    padding: 10px 20px;
    background-color: var(--highlight-color);
    color: #fff;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s, transform 0.3s;
  }
  
  .home-link:hover {
    background-color: #43a047;
    transform: translateY(-2px);
  }
  
  .home-link:active {
    transform: translateY(0);
  }
  </style>
  