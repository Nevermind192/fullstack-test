<template>
  <div class="login-container">
    <SignInForm />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "empty",
});
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f2f5;
}
</style>
