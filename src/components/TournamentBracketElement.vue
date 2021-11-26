<template>
  <div
    class="
      w-5/6
      h-auto
      text-center
      mx-auto
      flex flex-col
      bg-primary-light
      p-3
      rounded-sm
      shadow-lg
      mb-3
    "
  >
    <h2 class="text-center">Table 1</h2>

    <div class="grid grid-flow-col grid-cols-3">
      <h3 class="overflow-hidden">Nathan</h3>
      <div class="flex justify-evenly">
        <div class="score-player-1">
            <p>5</p>
        </div>
        <div class="score-player-2">
            <p>1</p>
        </div>
      </div>
      <h3 class="overflow-hidden">David</h3>
    </div>

    <div class="grid grid-flow-col grid-cols-3">
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