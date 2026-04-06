import { getMe } from "~/api/auth";

export default defineNuxtRouteMiddleware(async (to) => {
  if (import.meta.server) return;

  try {
    const userStore = useUserStore();
    if (!userStore.isAuthorized) {
      userStore.setUser(await getMe());
    }

    const isAuth = userStore.isAuthorized;
    const isLoginPage = to.path === "/login";
    const isHomePage = to.path === "/";

    if (isAuth && isLoginPage) return navigateTo("/");

    if (!isAuth && !isLoginPage && !isHomePage) {
      return navigateTo("/login");
    }
  } catch (err) {
    if (to.path !== "/login" && to.path !== "/") {
      return navigateTo("/login");
    }
  }
});
