<template>
  <div>
    <h1>Welcome to the homepage</h1>
    <!-- <img src="/1.jpg" alt="Discover Nuxt 3" /> -->
    <IconBell />
    <ContentDoc />
    <h2>Counter</h2>
    <div>
      <button @click="counter++">Increase</button>
    </div>

    <h2 class="mt-4">Counter Component</h2>
    <div>Counter Imported : {{ counterFromState }}</div>
    <div>Counter From Component:<Counter /></div>
  </div>
</template>

<script setup lang="ts">
import { useUtils } from "@/composables/useUtils";
import { useCounter } from "~/composables/states";
import { useCounterStoreOptionApi } from "~/store/myStore";
const { sayGreetings } = useUtils();

definePageMeta({
  middleware: "auth",
});
const store = useCounterStoreOptionApi();

// * Need to specify the ts
// const { $sayHello } = useNuxtApp();
// $sayHello("Vue");

// * Composables
sayGreetings("Adarsh");

const counter = useState("counter", () => 1);
const counterFromState = useCounter();

// * server

const response = await $fetch("/api/hello");
console.log("🚀 ~ file: index.vue:41 ~ response:", response);
</script>
<style></style>
