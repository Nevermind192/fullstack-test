<template>
  <a-card title="Авторизация" class="login-card">
    <a-form
      ref="formRef"
      :model="formState"
      :rules="rules"
      layout="vertical"
      @finish="handleLogin"
    >
      <a-form-item label="Email" name="email" has-feedback>
        <a-input v-model:value="formState.email" placeholder="example@mail.com">
          <template #prefix><user-outlined /></template>
        </a-input>
      </a-form-item>

      <a-form-item label="Пароль" name="password" has-feedback>
        <a-input-password
          v-model:value="formState.password"
          placeholder="******"
        >
          <template #prefix><lock-outlined /></template>
        </a-input-password>
      </a-form-item>

      <a-form-item>
        <a-button type="primary" html-type="submit" :loading="loading" block>
          Войти
        </a-button>
      </a-form-item>
    </a-form>
  </a-card>
</template>

<script setup lang="ts">
import type { RuleObject } from "ant-design-vue/es/form";
import { postLogin } from "~/api/auth";

const loading = ref(false);

const formState = reactive({
  email: "",
  password: "",
});

const rules = {
  email: [
    { required: true, message: "Введите email", trigger: "blur" },
    { type: "email", message: "Некорректный формат email", trigger: "blur" },
  ] satisfies RuleObject[],
  password: [
    { required: true, message: "Введите пароль", trigger: "blur" },
    {
      min: 4,
      message: "Пароль должен быть не менее 4 символов",
      trigger: "blur",
    },
  ] satisfies RuleObject[],
} as const;

const handleLogin = async (values: typeof formState) => {
  loading.value = true;

  try {
    const isLogin = await postLogin(values);
    if (isLogin) {
      message.success("Успешный вход!");
      await navigateTo("/profile");
    } else {
      message.error("Не удалось войти");
    }
  } catch (err) {
    message.error("Произошла ошибка");
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.login-card {
  width: 100%;
  max-width: 320px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
</style>
