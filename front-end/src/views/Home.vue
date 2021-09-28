<template>
  <div class="home">
    <Login/>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue'

export default {
  name: 'Home',
  components: {
    Login,
  }
}
</script>

<style scoped>
.home{
  display: flex;
  justify-content: center;
  margin-top: 4%;
}
</style>