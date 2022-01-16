<template>
  <div class="text-center">
    <div v-if="!isCreator">
      <h1 class="text-4xl text-center mt-40 mb-6">Waiting for tournament to start...</h1>
      <h2>Current players: {{ playersJoined }}/{{ playerAmount }}</h2>
      <button class="btn" v-if="isActive" @click="refresh">Refresh</button>
      <p v-else class="mt-3">Wait 30 seconds to refresh again</p>
    </div>
    <div v-else>
      <h1 class="mb-10 mt-4 text-2xl">Code: <span class="text-tertiary-light font-bold">{{code}}</span></h1>
      <div class="flex flex-col justify-evenly items-center mx-3">
        <h1 class="text-2xl text-center mb-2">You can start the tournament when all players have joined</h1>
        <h2>Current players: {{ playersJoined }}/{{ playerAmount }}</h2>
        <button class="btn" v-if="isReady" @click="startTournament">Start</button>
      </div>

      <div v-if="!hasJoined" class="flex flex-col justify-evenly items-center mt-16">
        <h1 class="text-xl">Join tournament yourself?</h1>
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
      <div v-else class="mt-16">
        <h1 class="text-xl">You have joined successfully!</h1>
      </div>
    </div>
  </div>
</template>

<script>
import authRedirect from "../mixins/authRedirect";
import axios from 'axios';
export default {
    mixins: [authRedirect],

    data() {
      return {
        code: "XXXXXX",
        nickname: "",
        showError: false,
        isActive: true,
        playersJoined: 0,
        playerAmount: 0,
        isCreator: false,
        isReady: false,
        hasJoined: false,
      }
    },

    created() {
      const tournament = JSON.parse(localStorage.getItem("tournament"));
      this.playerAmount = tournament.playerAmount;
      this.code = tournament.code;
      if (localStorage.getItem("creator") !== null) {
        this.isCreator = (localStorage.getItem("creator") === "true");
      }
      if (localStorage.getItem("player") != null) {
        this.hasJoined = true;
      }
      this.refresh();
      setInterval(() => {
        this.refresh();
      }, 5000)
    },

    methods: {
      async refresh() {
        const tournament = await axios.get(process.env.VUE_APP_URL + "/tournaments/" + this.code).catch((err) => console.log(err));

        this.playersJoined = tournament.data.data.players.length;
        if (this.playersJoined === tournament.data.data.playerAmount) {
          this.isReady = true;
        }

        if (tournament.data.data.isActive) {
          localStorage.setItem("tournament", JSON.stringify(tournament.data.data));
          this.$router.push("/");
        }
      },

      startTournament() {
        const tournament = JSON.parse(localStorage.getItem("tournament"));
        axios.put(process.env.VUE_APP_URL + "/tournaments/" + tournament.code)
        .then(() => {
          this.$router.push("/");
        })
        .catch((err) => console.log(err));
      },

      async join() {
        const body = JSON.stringify({
          nickname: this.nickname,
          ranking: 1,
          code: this.code
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
        if (player !== undefined) {
          this.hasJoined = true;
        }
    },
    }
};
</script>