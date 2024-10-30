<script>
  import { onDestroy } from 'svelte';

  let time = 0;
  let timer;
  let isRunning = false;

  function toggleTimer() {
    if (isRunning) {
      clearInterval(timer);
    } else {
      timer = setInterval(() => time++, 1000);
    }
    isRunning = !isRunning;
  }

  // Cleanup timer when the component is destroyed
  onDestroy(() => clearInterval(timer));
</script>

<div>
  <p>Timer: {time} seconds</p>
  <button on:click={toggleTimer}>{isRunning ? 'Stop' : 'Start'} Timer</button>
</div>

<style>
  button {
    padding: 0.5em 1em;
    font-size: 1em;
    cursor: pointer;
  }
</style>
