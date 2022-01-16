<template>
  <div
    class="tournament-bracket-item"
  >
    <h2 class="text-center text-sm mb-1">Table {{game.tableId}}</h2>

    <div class="tournament-bracket-item-row">
      <h3 class="overflow-hidden">{{game.playerOne}}</h3>
      <div class="flex justify-evenly">
        <div class="first-score">
            <span class="score-player">{{game.scorePlayerOne}}</span>
        </div>
        <div>
            <span class="score-player">{{game.scorePlayerTwo}}</span>
        </div>
      </div>
      <h3 class="overflow-hidden">{{game.playerTwo}}</h3>
    </div>

    <div class="tournament-bracket-item-row text-sm mt-2">
      <div class="faults-player-1">
        <ul class="flex justify-center">
          <li>{{game.faultsPlayerOne > 0 ? 'x' : 'o'}}</li>
          <li>{{game.faultsPlayerOne > 1 ? 'x' : 'o'}}</li>
          <li>{{game.faultsPlayerOne > 2 ? 'x' : 'o'}}</li>
        </ul>
      </div>
      <h2>{{isStarted}}</h2>
      <div class="faults-player-2">
        <ul class="flex justify-center">
          <li>{{game.faultsPlayerTwo > 0 ? 'x' : 'o'}}</li>
          <li>{{game.faultsPlayerTwo > 1 ? 'x' : 'o'}}</li>
          <li>{{game.faultsPlayerTwo > 2 ? 'x' : 'o'}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    game: Object,
  },

  computed: {
    isStarted() {
      return this.game.isPlaying ? 'Playing' : 'Not Playing';
    }
  }
};
</script>