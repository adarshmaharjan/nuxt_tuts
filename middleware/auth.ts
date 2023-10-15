export default defineNuxtRouteMiddleware((to, from) => {
  const isLoggedIn = true;
  if (!isLoggedIn) {
    // redirect to the page we want to go
    return navigateTo("/login");
  }
});
