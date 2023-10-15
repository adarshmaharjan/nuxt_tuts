<template>
  <div>
    <h2>Counter {{ counter }}</h2>
    <button @click="counter++">Increase</button>
    <br />
    <button @click="counter--">Decrease</button>
  </div>
</template>

<script setup lang="ts">
import { useCounter } from "~/composables/states";

const counter = useCounter();
</script>

<style scoped></style>
