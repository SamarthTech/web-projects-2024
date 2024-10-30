<template>
  <div>
    <h2>Level 2: Method Bug</h2>
    <p>Counter: {{ counter }}</p>
    <button @click="incrementCounter">Increment Counter</button>
    <p>Fix the method to make the button increment the counter!</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    incrementCounter() {
      // BUG: Incorrectly tries to modify a non-existent variable
      count++;
    },
  },
};
</script>

<style scoped>
h2 {
  color: #2c3e50;
}
button {
  margin-top: 10px;
}
</style>
