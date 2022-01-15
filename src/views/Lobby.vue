<template>
  <div class="text-center">
    <h1 class="text-4xl text-center mt-60 mb-6">Waiting for tournament to start...</h1>
    <h2>Current players: {{ playersJoined }}/{{ playerAmount }}</h2>
    <button class="btn" v-if="isActive" @click="refresh">Refresh</button>
    <p v-else>Wait 30 seconds to refresh again</p>
  </div>
</template>

<script>
import authRedirect from "../mixins/authRedirect";
import axios from 'axios';
export default {
    mixins: [authRedirect],

    data() {
      return {
        isActive: true,
        playersJoined: 0,
        playerAmount: 0,
        isCreator: false,
      }
    },

    created() {
      this.playerAmount = JSON.parse(localStorage.getItem("tournament")).playerAmount;
      if (localStorage.getItem("creator") !== null) {
        this.isCreator = localStorage.getItem("creator");
        console.log(this.isCreator);
      }
    },

    methods: {
      async refresh() {
        console.log("ok");
        const localTournament = JSON.parse(localStorage.getItem("tournament"));
        const tournament = await axios.get(process.env.VUE_APP_URL + "/tournaments/" + localTournament.code).catch((err) => console.log(err));
        const players = await axios.get(process.env.VUE_APP_URL + "/players/tournaments/" + localTournament.id + "?tournamentId=" + localTournament.id).catch((err) => console.log(err));

        if (players === undefined) {
          this.playersJoined = 0;
        } else {
          this.playersJoined = players.data.data.length;
        }

        if (tournament.data.data.isActive) {
          localStorage.setItem("tournament", JSON.stringify(tournament.data.data));
          this.$router.push("/");
        }

        this.isActive = false;
        setTimeout(() => {
          this.isActive = true;
        }, 30000)
      }
    }
};
</script>