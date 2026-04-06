import type { User } from "~/models/User.model";

export const useUserStore = defineStore("userStore", () => {
  const user = shallowRef<User | null>(null);

  const isAuthorized = computed(() => !!user.value);

  const inRole = (role: "user" | "admin") => user.value?.role === role || false;

  const setUser = (usr: User | null) => {
    user.value = usr;
  };
  return { user, isAuthorized, inRole, setUser };
});
