<template>
  <header>

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Purchase Items</RouterLink>
        <RouterLink to="/productform">Product form</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 3.5;
  max-height: 100vh;
}
nav {
  width: 100%;
  font-size: 1rem;
  text-align: center;
  margin: 1rem  0;
  background-color: var(--vt-c-indigo);
}
nav a.router-link-exact-active {
  color: hsla(160, 100%, 37%, 1);
}
nav a.router-link-exact-active:hover {
  background-color: transparent;
}
nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style> 
