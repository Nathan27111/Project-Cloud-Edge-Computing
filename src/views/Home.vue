<template>
  <div class="flex flex-col justify-evenly items-center mt-16">
    <div>
      <h1 class="title">{{ tournamentName }}</h1>
      <h2 class="tournament-code">Code: {{ code }}</h2>
    </div>

    <div id="round-1" class="w-full">
      <TournamentBracketRound :title="'Round 1'" />
    </div>
    <div id="round-2">

    </div>
    <div id="round-3">

    </div>
  </div>
</template>

<script>
import authRedirect from "../mixins/authRedirect";

import TournamentBracketRound from "../components/TournamentBracketRound.vue";

export default {
    mixins: [authRedirect],

    data() {
      return {
        code: "XXXXXX",
        tournamentName: "Airhockey Tournament",
      }
    },

    created() {
      if (localStorage.getItem("tournament") != null) {
        let tournament = localStorage.getItem("tournament");
        this.tournamentName = tournament.name;
        this.code = tournament.code;
        console.log(this.code);
      }
    },

    components: {
      TournamentBracketRound,
    },
};
</script>