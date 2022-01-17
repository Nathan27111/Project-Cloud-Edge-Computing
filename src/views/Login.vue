<template>
  <div class="flex flex-col justify-evenly items-center mt-16">
    <h1 class="title">Airhockey Tournament</h1>
    <div v-if="showError" class="error-message">
      <p>A tournament with code {{ code }} was not found</p>
    </div>
    <form
      action="#"
      @submit.prevent="join"
      class="flex flex-col justify-center content-center mb-16"
    >
      <label for="game-code"></label>
      <input
        type="text"
        v-model="code"
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
import api from '../services/api';
export default {
  data() {
    return {
      code: "",
      showError: false,
    };
  },

  methods: {
    join() {
      api.getTournament(this.code)
        .then((res) => {
          localStorage.setItem("code", res.code);
          localStorage.setItem("tournamentName", res.name);
          this.$router.push("/join");
        })
        .catch(err => {
          this.showError = true;
          setTimeout(() => {
            this.showError = false;
          }, 3000)
          console.error(err)
        });
    },

    create() {
      this.$router.push("/create");
    },
  },
};
</script>
