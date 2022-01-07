<template>
  <div class="flex flex-col justify-evenly items-center mt-16">
    <h1 class="title">Airhockey Tournament</h1>

    <form
      action="#"
      @submit.prevent="create"
      class="flex flex-col justify-center content-center mb-16"
    >
      <label for="game-name">Tournament name</label>
      <input
        type="text"
        v-model="tournamentName"
        class="input"
        id="game-name"
        name="game-name"
        placeholder="Tournament Name"
        required
      />

      <label for="time-match">Time single match (Minutes)</label>
      <input
        type="number"
        v-model="timeSingleMatch"
        class="input"
        id="time-match"
        name="time-match"
        placeholder="10"
        required
      />

      <!-- <label for="score">Winning score</label>
      <input type="number" class="input" id="score" name="score" placeholder="7" required> -->

      <label for="player-count">Amount of players</label>
      <select
        v-model="amountOfPlayers"
        name="player-count"
        id="player-count"
        class="input"
        required
      >
        <option value="2">2</option>
        <option value="4">4</option>
        <option value="8">8</option>
        <option value="16">16</option>
      </select>

      <label for="tables">Entering Tables</label>
      <div class="table-inputs">
        <div class="table-input-btn">
          <button @click.prevent="addTableInput()" class="table-inputs-btn">
            +
          </button>
        </div>

        <input
          v-for="(n, index) in numberOfTables"
          :key="index"
          type="number"
          class="input"
          name="tables"
          placeholder="3"
          @change="updateTables($event.target.value, index)"
          required
        />
      </div>

      <input type="submit" class="btn" value="Create" />
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      tournamentName: "",
      timeSingleMatch: 0,
      amountOfPlayers: 0,
      numberOfTables: 1,
      tables: [],
    };
  },
  methods: {
    create() {
      const body = JSON.stringify({
        name: this.tournamentName,
        timePerMatch: this.timeSingleMatch,
        playerAmount: parseInt(this.amountOfPlayers),
        tableAmount: this.numberOfTables,
        tables: this.tables
      })
      axios.post(process.env.VUE_APP_URL + '/tournaments', body, {
        headers: {'content-type': 'application/json'}
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("tournament", JSON.parse(res.data.data));
        this.$router.push("/");
      })
      .catch((err) => console.error(err));
    },
    addTableInput() {
      this.numberOfTables += 1;
    },
    updateTables(value, index) {
      this.tables[index] = parseInt(value);
    },
  },
};
</script>
