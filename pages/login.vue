<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'

definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/protected',
  },
})

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

async function onSubmit(event: FormSubmitEvent<any>) {
  // Do something with data
  console.log(event.data)
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
      <UForm
        :validate="validate"
        :state="state"
        class="space-y-4"
        @submit="onSubmit"
      >
        <UFormGroup
          label="Email"
          name="email"
        >
          <UInput v-model="state.email" />
        </UFormGroup>

        <UFormGroup
          label="Password"
          name="password"
        >
          <UInput
            v-model="state.password"
            type="password"
          />
        </UFormGroup>

        <UButton type="submit">
          Submit
        </UButton>
      </UForm>
    </UCard>
  </UContainer>
</template>
