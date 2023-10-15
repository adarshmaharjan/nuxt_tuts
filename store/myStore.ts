// vue 2 option api
export const useCounterStoreOptionApi = defineStore("counter", {
  state: () => ({
    count: 0,
    name: "Adarsh",
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count += 1;
    },
  },
});

// vue 3 composition api
export const useCounterStoreCompositionApi = defineStore('counter', () => {
  const count  = ref(0)
  const name = ref('Adarsh')
  const doubleCount = computed(()=>count.value * 2)
  function increment(){
    count.value+=1
  }
  return {count, name, doubleCount, increment}
})
