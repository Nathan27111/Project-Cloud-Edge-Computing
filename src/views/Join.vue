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
    join() {
      const body = JSON.stringify({
        nickname: this.nickname,
        ranking: 1,
        code: localStorage.getItem("code")
      })
      axios.post(process.env.VUE_APP_URL + "/players", body, {
        headers: {'content-type': 'application/json'}
      }).then((res) => {
        console.log(res);
        localStorage.setItem("player", JSON.parse(res.data.data));
        // Another axios to get tournament based on res.data.data.tournamentId, use await with this
        this.$router.push("/");
      }).catch((err) => {
        this.showError = true;
        setTimeout(() => {
          this.showError = false;
        }, 3000)
        console.error(err);
      })
      localStorage.nickname = this.nickname;
      this.$router.push("/");
    },
  },
};
</script>