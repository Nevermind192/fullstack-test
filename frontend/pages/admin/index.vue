<template>
  <div>
    hello admin
    <pre>{{ adminData }}</pre>
  </div>
</template>

<script lang="ts" setup>
import { getAdmin } from "~/api/auth";

const adminData = shallowRef<object | null>(null);

onMounted(async () => {
  adminData.value = await getAdmin();
  if (!adminData.value) {
    message.error("Недостаточно прав");
    await navigateTo("/profile");
  }
});
</script>
