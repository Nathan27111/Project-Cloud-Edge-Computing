<template>
  <div class="max-w-xs mx-auto text-center mt-56">
    <h1 class="mb-5">Oops, it looks like the page you're looking for doesn't exist.</h1>
    <button class="btn-small" @click="goHome">Go Home</button>
  </div>  
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push("/");
    }
  }
}
</script>