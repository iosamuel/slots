<template>
  <header>
    <slot name="header">
      <h2>Welcome to my site</h2>
    </slot>
  </header>

  <main>
    <div class="wrapper">
      <slot />
    </div>
  </main>

  <footer>
    <slot name="footer" :year="year" app="Slots">
      <p>&copy; {{ year }}</p>
    </slot>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear();
</script>
