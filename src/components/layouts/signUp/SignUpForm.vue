<template>
  <div class="h-full w-full flex flex-col items-center content-centerflex justify-center">
    <div class="w-4/5 flex flex-col items-center">
      <div class="mb-5 text-center text-4xl">
        <i class="fas fa-user-plus mb-2"></i>
        <p class="font-sans">Sign up</p>
      </div>
      <div :key="updateKey" class="w-3/4 flex flex-col items-center">
        <BaseInput
          v-model="userData.email"
          class="my-2"
          type="email"
          label="E-mail"
          :bordered="true"
          :hasError="invalidForm || !isValidEmail"
        />
        <BaseInput
          v-model="userData.firstName"
          class="my-2"
          label="First name"
          :bordered="true"
          :hasError="invalidForm"
        />
        <BaseInput
          v-model="userData.lastName"
          class="my-2"
          label="Last name"
          :bordered="true"
          :hasError="invalidForm"
        />
        <BaseInput
          v-model="userData.password"
          class="my-2"
          label="Password"
          type="password"
          :bordered="true"
          :hasError="invalidForm || invalidPasswordPair || !isValidPassword"
        />
        <BaseInput
          v-model="confirmationPassword"
          class="my-2"
          :bordered="true"
          label="Password again"
          type="password"
          :error="invalidPasswordPairError"
          :hasError="invalidForm || invalidPasswordPair || !isValidConfirmationPassword"
        />
      </div>
      <div class="text-center mt-10">
        <button
          v-if="!isLoading"
          class="bg-indigo-500 hover:bg-teal-600 text-white font-sans py-2 px-3 rounded-full text-center items-center"
          @click="signUp()"
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
  import { AxiosError } from 'axios';
  import { ICreateUserDTO } from '@/types/dto';
  import { apiService } from '@/services/apiService';
  import emitCollection from '@/data/constants/emitCollection';
  import HttpStatusCodeEnum from '@/data/enums/httpStatusCodeEnum';
  import { validateEmail, validatePassword } from '@/utils/validators';
  import { notificationFunctions } from '@/functions/notificationFunctions';
  import { defineComponent, ref, computed, nextTick } from '@vue/runtime-core';

  export default defineComponent({
    name: 'SignUpForm',
    emits: {
      changeComponent: emitCollection.changeComponent,
    },
    setup(props, { emit }) {
      const updateKey = ref(0);
      const isLoading = ref(false);
      const invalidForm = ref(false);
      const confirmationPassword = ref(null);
      const userData = ref({
        firstName: null,
        lastName: null,
        password: null,
        email: null,
      });

      const isValidEmail = computed(() => {
        if (userData.value.email === null) return true;
        return validateEmail(userData.value.email);
      });

      const isValidPassword = computed(() => {
        if (userData.value.password === null) return true;
        return validatePassword(userData.value.password);
      });

      const isValidConfirmationPassword = computed(() => {
        if (confirmationPassword.value === null) return true;
        return validatePassword(confirmationPassword.value);
      });

      const invalidPasswordPair = computed(() => {
        if (userData.value.password === null || confirmationPassword.value === null) return false;
        if (userData.value.password !== confirmationPassword.value) return true;
      });

      const invalidPasswordPairError = computed(() => {
        return invalidPasswordPair.value ? 'Passwords do not match' : '';
      });

      const isFormValid = computed(() => {
        return (
          userData.value.email !== null &&
          isValidEmail.value &&
          userData.value.firstName !== null &&
          userData.value.firstName &&
          userData.value.lastName !== null &&
          userData.value.lastName &&
          userData.value.password !== null &&
          isValidPassword.value
        );
      });

      function setLoading() {
        return (isLoading.value = !isLoading.value);
      }

      async function signUp() {
        if (!isFormValid.value) {
          notificationFunctions.warningAlert({
            title: 'Invalid form!',
            text: 'Please fill out all required fields!',
          });
          invalidForm.value = true;
          return;
        }

        nextTick(() => {
          ++updateKey.value;
        });

        try {
          isLoading.value = setLoading();
          const dto: ICreateUserDTO = {
            email: String(userData.value.email),
            firstName: String(userData.value.firstName),
            lastName: String(userData.value.lastName),
            password: String(userData.value.password),
          };

          await apiService.signUp(dto);

          emit('changeComponent');
          notificationFunctions.successAlert({
            title: 'Success',
            text: 'Sign up was successfull!',
          });
        } catch (error) {
          const axiosError = error as AxiosError;
          if (axiosError.response?.status === HttpStatusCodeEnum.CONFLICT) {
            notificationFunctions.errorAlert({
              title: 'Conflict!',
              text: 'User with given email already exists!',
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
      }
      return {
        updateKey,
        isLoading,
        invalidForm,
        confirmationPassword,
        userData,
        isValidEmail,
        isValidPassword,
        isValidConfirmationPassword,
        invalidPasswordPair,
        invalidPasswordPairError,
        signUp,
      };
    },
  });
</script>
