<script>
  let count = 0;

  // Reactively update the doubled count
  $: doubled = count * 2;
</script>

<div>
  <p>Count: {count}</p>
  <p>Doubled Count: {doubled}</p>
  <button on:click={() => count++}>Increment</button>
</div>

<style>
  button {
    padding: 0.5em 1em;
    font-size: 1em;
    cursor: pointer;
  }
</style>
