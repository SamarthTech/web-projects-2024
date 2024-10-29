<script>
  let scoreA = 0;
  let scoreB = 0;
  let scoreC = 0;

  // Calculate total score reactively
  $: totalScore = scoreA + scoreB + scoreC;

  function incrementScoreA() { scoreA += 1; }
  function incrementScoreB() { scoreB += 1; }
  function incrementScoreC() { scoreC += 1; }
</script>

<div>
  <h3>Scoreboard</h3>
  <p>Score A: {scoreA} <button on:click={incrementScoreA}>+</button></p>
  <p>Score B: {scoreB} <button on:click={incrementScoreB}>+</button></p>
  <p>Score C: {scoreC} <button on:click={incrementScoreC}>+</button></p>
  <p><strong>Total Score: {totalScore}</strong></p>
</div>

<style>
  button {
    margin-left: 0.5em;
    padding: 0.3em;
    font-size: 1em;
    cursor: pointer;
  }
</style>
