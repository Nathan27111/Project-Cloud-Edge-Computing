<template>
  <div class="flex flex-col justify-evenly items-center mt-16">
    <h1 class="title">Airhockey Tournament</h1>
    
    <div v-if="showError" class="error-message">
      <p>{{errorMessage}}</p>
    </div>

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

      <label for="tables">Entering Table numbers</label>
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
import api from '../services/api';
export default {
  data() {
    return {
      tournamentName: "",
      amountOfPlayers: 0,
      numberOfTables: 1,
      tables: [],
      showError: false,
      errorMessage: "",
    };
  },
  
  methods: {
    create() {
      const body = JSON.stringify({
        name: this.tournamentName,
        timePerMatch: 7,
        playerAmount: parseInt(this.amountOfPlayers),
        tableAmount: this.numberOfTables,
        tables: this.tables
      })
      api.createTournament(body)
      .then((res) => {
        localStorage.setItem("tournament", JSON.stringify(res));
        localStorage.setItem("creator", "true");
        this.$router.push("/lobby");
      })
      .catch((err) => {
        this.errorMessage = err.response.data.message;      
        this.showError = true;
        setTimeout(() => {
          this.showError = false;
        }, 3000)
        console.error(err.response.data.message);
      });
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
