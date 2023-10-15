export default defineEventHandler((event) => {
  console.log("🚀 ~ file: hello.ts:2 ~ defineEventHandler ~ event:", event);
  return {
    api: "works",
  };
}); 
