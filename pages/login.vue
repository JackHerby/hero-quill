<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'

definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/protected',
  },
})

const { signIn } = useAuth()

const state = reactive({
  email: undefined,
  password: undefined,
})

const validate = (state: any): FormError[] => {
  const errors = []
  if (!state.email) errors.push({ path: 'email', message: 'Required' })
  if (!state.password) errors.push({ path: 'password', message: 'Required' })
  return errors
}
</script>

<template>
  <UContainer
    :ui="{
      base: 'h-full flex justify-center items-center',
      constrained: 'max-w-2xl',
    }"
  >
    <UCard :ui="{ base: 'w-full' }">
      <UButton
        color="gray"
        icon="i-simple-icons-github"
        size="lg"
        :ui="{
          base: 'w-full justify-center',
          font: 'font-bold',
        }"
        @click="() => signIn('github', { callbackUrl: '/' })"
      >
        GitHub
      </UButton>
      <UDivider label="OR" class="py-6" />
      <UForm
        :validate="validate"
        :state="state"
        class="space-y-4"
        @submit.prevent="
          () =>
            signIn('credentials', {
              email: state.email,
              password: state.password,
              callbackUrl: '/',
            })
        "
      >
        <UFormGroup label="Email" name="email">
          <UInput v-model="state.email" />
        </UFormGroup>
        <UFormGroup label="Password" name="password">
          <UInput v-model="state.password" type="password" />
        </UFormGroup>
        <UButton type="submit">Submit</UButton>
      </UForm>
    </UCard>
  </UContainer>
</template>
