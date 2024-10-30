<template>
  <div class="app">
    <h1>Vue Component Puzzle Game</h1>
    <p>Select a level to start debugging:</p>
    <div class="levels">
      <button v-for="level in levels" :key="level" @click="loadLevel(level)">
        Level {{ level }}
      </button>
    </div>
    <component :is="currentLevelComponent" />
  </div>
</template>

<script>
import Level1 from './components/Level1.vue';
import Level2 from './components/Level2.vue';
import Level3 from './components/Level3.vue';

export default {
  data() {
    return {
      levels: [1, 2, 3],
      currentLevelComponent: null,
    };
  },
  methods: {
    loadLevel(level) {
      this.currentLevelComponent = `Level${level}`;
    },
  },
  components: {
    Level1,
    Level2,
    Level3,
  },
};


</script>

<style scoped>
.app {
  font-family: Arial, sans-serif;
  text-align: center;
}

.levels button {
  margin: 10px;
  padding: 10px;
  font-size: 16px;
}
</style>
