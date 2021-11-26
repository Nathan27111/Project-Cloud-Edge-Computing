<template>
  <div class="flex flex-col justify-evenly items-center mt-16">
    <h1 class="title">Airhockey Tournament</h1>
    <div id="round-1" class="w-full">
      <TournamentBracketElement />
      <TournamentBracketElement />
      <TournamentBracketElement />
    </div>
    <div id="round-2">

    </div>
    <div id="round-3">

    </div>
  </div>
</template>

<script>
import authRedirect from "../mixins/authRedirect";

import TournamentBracketElement from "../components/TournamentBracketElement.vue";

export default {
    mixins: [authRedirect],

    components: {
      TournamentBracketElement,
    },
};
</script>