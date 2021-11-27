<template>
  <div
    class="tournament-bracket-item"
  >
    <h2 class="text-center text-sm mb-1">Table 1</h2>

    <div class="tournament-bracket-item-row">
      <h3 class="overflow-hidden">Nathan</h3>
      <div class="flex justify-evenly">
        <div class="first-score">
            <span class="score-player">5</span>
        </div>
        <div>
            <span class="score-player">2</span>
        </div>
      </div>
      <h3 class="overflow-hidden">David</h3>
    </div>

    <div class="tournament-bracket-item-row text-sm mt-2">
      <div class="faults-player-1">
        <ul class="flex justify-center">
          <li>x</li>
          <li>x</li>
          <li>o</li>
        </ul>
      </div>
      <h2>Not started</h2>
      <div class="faults-player-2">
        <ul class="flex justify-center">
          <li>x</li>
          <li>o</li>
          <li>o</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>