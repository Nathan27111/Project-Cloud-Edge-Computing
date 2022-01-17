<template>
  <div class="flex flex-col justify-evenly items-center mt-16">
    <h1 class="title">{{ tournamentName }}</h1>
    <div v-if="showError" class="error-message">
      <p>{{errorMessage}}</p>
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
import api from '../services/api';

export default {
  data() {
    return {
      nickname: "",
      tournamentName: "Airhockey Tournament",
      showError: false,
      errorMessage: "",
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
      });

      const player = await api.createPlayer(body)
        .catch((err) => {
          this.errorMessage = err.response.data.message;
          this.showError = true;          
          setTimeout(() => {
            this.showError = false;
          }, 3000);
          console.error(err.response.data.message);
        })

      if (player !== undefined) {
        const tournament = await api.getTournament(code);
        
        localStorage.setItem("player", JSON.stringify(player));      
        localStorage.setItem("tournament", JSON.stringify(tournament));
        
        this.$router.push("/lobby");
      }
    },
  },
};
</script>