export const useUtils = () => {
  const sayGreetings = (name: String) => console.log(`Hello ${name}`);
  return {
    sayGreetings,
  };
};
