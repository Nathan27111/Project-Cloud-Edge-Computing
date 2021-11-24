<template>
  <div class="flex flex-col justify-evenly items-center mt-16">
    <h1 class="title">Airhockey Tournament</h1>

    <form
      action="#"
      @submit.prevent="join"
      class="flex flex-col justify-center content-center mb-16"
    >
      <label for="game-code"></label>
      <input
        type="text"
        class="input"
        id="game-code"
        name="game-code"
        placeholder="Game Code"
        required
      />
      <input type="submit" class="btn" value="Join" />
    </form>

    <button @click="create" class="btn">Create</button>
  </div>
</template>

<script>
export default {
  methods: {
    join() {
      this.$router.push("/join");
    },
    create() {
      this.$router.push("/create");
    },
  },
};
</script>
