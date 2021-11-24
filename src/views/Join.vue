<template>
  <div class="flex flex-col justify-evenly items-center mt-16">
    <h1 class="title">Airhockey Tournament</h1>

    <form
      action="#"
      @submit.prevent="join"
      class="flex flex-col justify-center content-center mb-16"
    >
      <label for="name"></label>
      <input
        type="text"
        v-model="username"
        class="input"
        id="name"
        name="name"
        placeholder="Username"
        required
      />
      <input type="submit" class="btn" value="Join" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
    };
  },
  methods: {
    join() {
      localStorage.username = this.username;
      this.$router.push("/");
    },
  },
};
</script>