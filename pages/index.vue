<template>
  <!-- <div>
    <h1>Welcome to the homepage</h1>
    <img src="/1.jpg" alt="Discover Nuxt 3" />
    <IconBell />
    <ContentDoc />
    <h2>Counter</h2>
    <div>
      <button @click="counter++">Increase</button>
    </div>

    <h2 class="mt-4">Counter Component</h2>
    <div>Counter Imported : {{ counterFromState }}</div>
    <div>Counter From Component:<Counter /></div>
  </div> -->

  <!-- <p>{{ pending ? "Loading" : products }}</p> -->

  <p v-if="pending">Loading ....</p>
  <p v-else>Product Count : {{ productCount }}</p>
  <button @click="refresh">Refresh Data</button>
</template>

<script setup lang="ts">
// import { useUtils } from "@/composables/useUtils";
// import { useCounter } from "~/composables/states";
// import { useCounterStoreOptionApi } from "~/store/myStore";
// const { sayGreetings } = useUtils();

// definePageMeta({
//   middleware: "auth",
// });
// const store = useCounterStoreOptionApi();

// * Need to specify the ts
// const { $sayHello } = useNuxtApp();
// $sayHello("Vue");

// * Composables
// sayGreetings("Adarsh");

// const counter = useState("counter", () => 1);
// const counterFromState = useCounter();

// * server

// const response = await $fetch("/api/hello");
// console.log("🚀 ~ file: index.vue:41 ~ response:", response);

// * useFetch

// const { data } = await useFetch("/api/products");
// console.log("🚀 ~ file: index.vue:44 ~ data:", toRaw(data.value));

// * useFetch with transform
// const { data: products, pending } = await useLazyFetch("/api/products", {
//   transform: (_products) => _products.data,
// });
// // console.log("🚀 ~ file: index.vue:55 ~ pending:", pending);

// if (!toRaw(pending.value)) {
//   console.log("Loading");
// } else {
//   console.log("🚀 ~ file: index.vue:53 ~ data:", toRaw(products.value));
// }

const { data: productCount, pending } = await useLazyAsyncData("products", () =>
  $fetch("/api/products")
);
console.log(
  "🚀 ~ file: index.vue:68 ~ productCount:",
  toRaw(productCount.value)
);

const refresh = () => refreshNuxtData("products");
</script>
<style></style>
