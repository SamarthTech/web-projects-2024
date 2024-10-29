<script>
  import Counter from './components/Counter.svelte';
  import Timer from './components/Timer.svelte';
  import Scoreboard from './components/Scoreboard.svelte';
</script>

<main>
  <h1>Svelte Reactive State Mastery</h1>
  <p>Master reactive statements with these interactive challenges.</p>

  <section>
    <h2>Challenge 1: Reactive Counter</h2>
    <Counter />
  </section>

  <section>
    <h2>Challenge 2: Reactive Timer</h2>
    <Timer />
  </section>

  <section>
    <h2>Challenge 3: Derived Scoreboard</h2>
    <Scoreboard />
  </section>
</main>

<style>
  main {
    font-family: Arial, sans-serif;
    max-width: 600px;
    margin: 0 auto;
    padding: 1em;
    text-align: center;
  }
  section {
    margin-bottom: 2em;
  }
</style>
