<script setup lang="ts">
import type { FormError } from '#ui/types'

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

const { data: providers } = await useFetch('/api/auth/providers')

async function handleSignIn(provider: string, callbackUrl: string): Promise<void> {
  console.log('handle sign in', provider)
  try {
    await signIn(provider, { callbackUrl })
  } catch (e) {
    console.error(e)
  }
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
      <div v-for="provider in providers" :key="provider.id">{{ provider.name }}</div>
      <div class="flex justify-center gap-4">
        <UButton
          color="gray"
          icon="i-simple-icons-github"
          size="lg"
          :ui="{
            base: 'justify-center flex-1',
            font: 'font-bold',
          }"
          @click="handleSignIn('github', '/')"
        >
          GitHub
        </UButton>
        <UButton
          color="gray"
          icon="i-simple-icons-twitch"
          size="lg"
          :ui="{
            base: 'justify-center flex-1',
            font: 'font-bold',
          }"
          @click="handleSignIn('twitch', '/')"
        >
          Twitch
        </UButton>
      </div>
      <UDivider label="OR" class="py-6" />
      <UForm
        :validate="validate"
        :state="state"
        class="space-y-4"
        @submit.prevent="() => signIn('credentials', {
          email: state.email,
          password: state.password,
          callbackUrl: '/',
        })"
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
