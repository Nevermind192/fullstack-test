<template>
  <div>
    Профиль пользователя:
    <client-only>
      <pre>{{ userStore.user }}</pre>
    </client-only>
  </div>
</template>

<script lang="ts" setup>
const userStore = useUserStore();
</script>
