<template>
  <div class="h-full w-full flex flex-col items-center content-centerflex justify-center">
    <div class="w-4/5 flex flex-col items-center">
      <div class="mb-5 text-center text-4xl">
        <i class="fas fa-lock mb-2"></i>
        <p class="font-sans">Sign in</p>
      </div>
      <div :key="updateKey" class="w-3/4 flex flex-col items-center">
        <BaseInput
          v-model="userData.email"
          class="my-2"
          label="E-mail"
          type="email"
          :bordered="true"
          :error="invalidEmailError"
          :hasError="!isValidEmail || invalidForm"
        />
        <BaseInput
          v-model="userData.password"
          class="my-2"
          label="Password"
          type="password"
          :bordered="true"
          :hasError="!isValidPassword || invalidForm"
        />
      </div>
      <div class="text-center mt-10">
        <button
          v-if="!isLoading"
          class="bg-indigo-500 hover:bg-teal-600 text-white font-sans py-2 px-3 rounded-full text-center items-center"
          @click="login()"
        >
          <i class="fas fa-check"> </i>
          <span class="animate-spin white"></span>
        </button>
        <BaseSpinner v-else />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import router from '@/router';
  import { AxiosError } from 'axios';
  import { ILoginDTO } from '@/types/dto';
  import { setToken } from '@/utils/token';
  import apiService from '@/services/apiService';
  import { validateEmail } from '@/utils/validators';
  import HttpStatusCodeEnum from '@/data/constants/httpStatusCodeEnum';
  import notificationFunctions from '@/functions/notificationFunctions';
  import { computed, defineComponent, ref, nextTick } from '@vue/runtime-core';

  export default defineComponent({
    name: 'LoginForm',
    setup() {
      const updateKey = ref(0);
      const isLoading = ref(false);
      const invalidForm = ref(false);
      const userData = ref({
        email: null,
        password: null,
      });

      const isValidEmail = computed(() => {
        if (userData.value.email === null) return true;
        return validateEmail(userData.value.email);
      });

      const invalidEmailError = computed(() => {
        return isValidEmail.value ? '' : 'invalid email format';
      });

      const isValidPassword = computed(() => {
        if (userData.value.password === null) return true;
        return String(userData.value.password).length >= 8;
      });

      const isFormValid = computed(() => {
        return (
          userData.value.email !== null &&
          isValidEmail.value &&
          userData.value.password !== null &&
          isValidPassword.value
        );
      });

      const setLoading = () => {
        return (isLoading.value = !isLoading.value);
      };

      const login = async () => {
        if (!isFormValid.value) {
          notificationFunctions.warningAlert({
            title: 'Invalid form!',
            text: 'please fill out all required fields!',
          });
          invalidForm.value = true;
          return;
        }

        nextTick(() => {
          ++updateKey.value;
        });

        try {
          isLoading.value = setLoading();

          const dto: ILoginDTO = {
            email: String(userData.value.email),
            password: String(userData.value.password),
          };
          const response = await apiService.login(dto);
          const token = response.data.token;

          setToken(token.split(' ')[1]);
          router.push({ path: '/dashboard', name: 'Dashboard' });
        } catch (error) {
          const axiosError = error as AxiosError;
          if (axiosError.response?.status === HttpStatusCodeEnum.NOT_FOUND) {
            notificationFunctions.errorAlert({
              title: 'Invalid credentials!',
              text: 'Incorrect e-mail or password',
            });
          } else {
            notificationFunctions.errorAlert({
              title: 'Internal error!',
              text: 'Something went wrong',
            });
          }
        } finally {
          isLoading.value = setLoading();
        }
      };
      return {
        updateKey,
        isLoading,
        invalidForm,
        userData,
        isValidEmail,
        invalidEmailError,
        isValidPassword,
        login,
      };
    },
  });
</script>

<style></style>
