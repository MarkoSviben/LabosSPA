<template>
    <div class="about-page">
      <h1>Ovo je ToDo aplikacija</h1>
      <p>WEB labos valjda je dobro.</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutPage'
  }
  </script>
  
  <style scoped>
  :root {
    --heading-color: #333;
    --text-color: #555;
    --max-width: 800px;
    --padding: 20px;
    --font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  
  .about-page {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: var(--padding);
    font-family: var(--font-family);
  }
  
  .about-page h1 {
    color: var(--heading-color);
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
  
  .about-page p {
    color: var(--text-color);
    font-size: 1.1rem;
    line-height: 1.6;
  }
  </style>
  