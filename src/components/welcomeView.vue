<template>
  <div class="container">
    <h1>Welcome Teq-Q</h1>
    <a v-link="{ path: '/login' }">Login Page</a>
    <a v-link="{ path: '/signup' }">SignUp Page</a>
    <a v-link="{ path: '/books' }">Books Page</a>
    <a v-link="{ path: '/ranking' }">Ranking Page</a>
  </div>
</template>

<script>
export default {
  name: 'WelcomeView',
}
</script>

