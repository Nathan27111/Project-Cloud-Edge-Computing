<template>
  <div class="flex flex-col justify-evenly items-center mt-16">
    <h1 class="title">{{ tournamentName }}</h1>
    <div v-if="showError" class="error-message">
      <p>A player with the name {{ nickname }} already exists!</p>
    </div>
    <form
      action="#"
      @submit.prevent="join"
      class="flex flex-col justify-center content-center mb-16"
    >
      <label for="name"></label>
      <input
        type="text"
        v-model="nickname"
        class="input"
        id="name"
        name="name"
        placeholder="nickname"
        required
      />
      <input type="submit" class="btn" value="Join" />
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      nickname: "",
      tournamentName: "Airhockey Tournament",
      showError: false,
    };
  },
  created() {
    if (localStorage.getItem("tournamentName")) {
      this.tournamentName = localStorage.getItem("tournamentName");
      localStorage.removeItem("tournamentName");
    }
  },

  methods: {
    async join() {
      const code = localStorage.getItem("code");
      const body = JSON.stringify({
        nickname: this.nickname,
        ranking: 1,
        code: code
      })
      const player = await axios.post(process.env.VUE_APP_URL + "/players", body, {
        headers: {'content-type': 'application/json'}
      }).catch((err) => {
        this.showError = true;
        setTimeout(() => {
          this.showError = false;
        }, 3000)
        console.error(err);
      })
      localStorage.setItem("player", JSON.stringify(player.data.data));

      const tournament = await axios.get(process.env.VUE_APP_URL + "/tournaments/" + code);
      localStorage.setItem("tournament", JSON.stringify(tournament.data.data));
      this.$router.push("/lobby");
    },
  },
};
</script>