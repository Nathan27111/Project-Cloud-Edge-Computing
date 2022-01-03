<template>
  <div class="flex flex-col justify-evenly items-center mt-16 ">
    <h1 class="title">Airhockey Tournament</h1>

    <form action="#" @submit.prevent="create" class="flex flex-col justify-center content-center mb-16">
      
      <label for="game-name">Game name</label>
      <input type="text" class="input" id="game-name" name="game-name" placeholder="Tournament Name" required>

      <label for="time-match">Time single match (Minutes)</label>
      <input type="number" class="input" id="time-match" name="time-match" placeholder="10" required>
      
      <label for="score">Winning score</label>
      <input type="number" class="input" id="score" name="score" placeholder="7" required>

      <label for="player-count">Amount of players</label>
      <select name="player-count" id="player-count" class="input" required>
        <option value="2">2</option>
        <option value="4">4</option>
        <option value="8">8</option>
        <option value="16">16</option>
      </select>

      <label for="tables">Amount of tables</label>
      <input type="number" class="input" id="tables" name="tables" placeholder="3" required>
      
      <label for="code">Game code</label>
      <input type="text" class="input" id="code" name="code" placeholder="Game Code" required>
      
      <input type="submit" class="btn" value="Create">
    </form>
  </div>
</template>

<script>
export default {
    methods: {
      create() {
        this.$router.push("/join");
      }
    },
};
</script>
