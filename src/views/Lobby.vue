<template>
  <div class="text-center">
    <h1 class="text-4xl text-center mt-60 mb-6">Waiting for tournament to start...</h1>
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
      }
    },

    methods: {
      async refresh() {
        console.log("ok");
        const code = localStorage.getItem("code");
        const tournament = await axios.get(process.env.VUE_APP_URL + "/tournaments/" + code);
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