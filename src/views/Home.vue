<template>
  <div class="h-screen flex justify-between flex-col">
    <div class="flex flex-col justify-evenly items-center mt-16">
      <div>
        <h1 class="title">{{ tournamentName }}</h1>
        <h2 class="tournament-code">Code: <span class="text-tertiary-light font-bold">{{ code }}</span></h2>
      </div>

      <div class="w-11/12 max-w-lg">
        <TournamentBracketRound v-for="(games, index) in rounds" :key="index" :round="index" :games="games"/>
      </div>
    </div>
    
    <div class="w-full">
        <div class="flex justify-center w-11/12 max-w-lg m-auto">
          <button @click="toggleRules" class="btn-small">Rules</button>
          <button @click="toggleLeave" class="btn-small">Leave</button>
        </div>
    </div>    
    
    <div class="rules-overlay" v-if="showRules" @click="toggleRules">
      <div class="rules">
        <h1 class="font-bold mb-5 text-lg text-tertiary-light">Airhockey Rules</h1>
        <ul class="list-disc text-sm text-left">
          <li>First to score <b>7 goals</b> wins</li>
          <li>When you cross the middle line with your mallet, you get a strike</li>
          <li><b>3 strikes</b> and you lose</li>
        </ul>
      </div>
    </div>

    <div class="leave-overlay" v-if="showLeave">
      <div class="leave-popup">
        <h1 class="mb-2">Are you sure you want to leave this tournament?</h1>
        <div class="flex justify-center">
          <button @click="leaveTournament" class="btn-small">Yes</button>
          <button @click="toggleLeave" class="btn-small">No</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import authRedirect from "../mixins/authRedirect";
import axios from 'axios';

import TournamentBracketRound from "../components/TournamentBracketRound.vue";

export default {
    mixins: [authRedirect],

    components: {
      TournamentBracketRound,
    },

    data() {
      return {
        code: "XXXXXX",
        tournamentName: "Airhockey Tournament",
        tournamentId: 0,
        showRules: false,
        showLeave: false,
        rounds: {},
      }
    },

    created() {
      if (localStorage.getItem("tournament") != null) {
        let tournament = JSON.parse(localStorage.getItem("tournament"));
        this.tournamentName = tournament.name;
        this.code = tournament.code;
        this.tournamentId = tournament.id;
      }
      this.getGames();
      setInterval(() => {
        this.getGames();
      }, 20000)
    },

    methods: {
      getGames() {
        axios.get(process.env.VUE_APP_URL + "/games/tournaments/" + this.tournamentId)
        .then((res) => {
          this.rounds = {};
          for (let i = 0; i < res.data.data.length; i++) {
            let roundIndex = res.data.data[i].round;
            if (this.rounds[roundIndex] === undefined) {
              this.rounds[roundIndex] = [res.data.data[i]];
            } else {
              this.rounds[roundIndex].push(res.data.data[i]);
            }
          }
        }).catch((err) => console.log(err));
      },
      toggleRules() {
        this.showRules = !this.showRules;
      },
      toggleLeave() {
        this.showLeave = !this.showLeave;
      },
      leaveTournament() {
        localStorage.clear();
        this.$router.push("/login");
      }
    },
};
</script>