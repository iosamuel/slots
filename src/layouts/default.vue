<template>
  <header>
    <slot name="header">
      <h1>Welcome to my site</h1>
    </slot>
  </header>
  <main>
    <div class="wrapper">
      <slot color="#697d7f" />
    </div>
  </main>
  <footer>
    <slot name="footer" :year="year">
      <p>&copy; {{ year }}</p>
    </slot>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear();
</script>

<style>
header {
  background: #333;
  color: #fff;
  padding: 1rem;
}

main .wrapper {
  padding: 1rem;
}

footer {
  background: #333;
  color: #fff;
  padding: 1rem;
}
</style>
