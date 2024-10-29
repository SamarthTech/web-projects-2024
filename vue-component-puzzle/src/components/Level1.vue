<template>
  <div>
    <h2>Level 1: Computed Property Bug</h2>
    <p>{{ message }}</p>
    <p>Result: {{ doubledNumber }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 5,
    };
  },
  computed: {
    doubledNumber() {
      // BUG: Incorrectly refers to non-existent 'num' instead of 'number'
      return this.num * 2;
    },
    message() {
      return "Fix the computed property to show the correct doubled value!";
    },
  },
};
</script>

<style scoped>
h2 {
  color: #2c3e50;
}
</style>
