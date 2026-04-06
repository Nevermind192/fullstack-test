<template>
  <a-page-header title="Frontend test" style="background: #f0f2f5">
    <template #extra>
      <client-only>
        <template v-if="isAuthorized">
          <a-button v-if="$route.name !== 'index'" href="/">Главная</a-button>
          <a-button v-if="$route.name !== 'profile'" href="/profile"
            >Профиль</a-button
          >
          <a-button
            v-if="$route.name !== 'admin' && userStore.inRole('admin')"
            href="/admin"
          >
            Админ панель
          </a-button>
          <a-button danger @click="onLogout">Выход</a-button>
        </template>
        <a-button v-else href="/login"> Вход </a-button>
      </client-only>
    </template>
  </a-page-header>
  <slot />
</template>

<script lang="ts" setup>
import { postLogout } from "~/api/auth";

const userStore = useUserStore();
const { isAuthorized } = storeToRefs(userStore);
const onLogout = async () => {
  const isSuccess = await postLogout();
  if (!isSuccess) {
    message.error("Не удалось выйти");
    return;
  }
  userStore.setUser(null);
  navigateTo("/login");
};
</script>
