<script setup lang="ts">
const { status, signIn, signOut } = useAuth()

const isLoggedIn = status.value === 'authenticated'

async function handleSignIn() {
  console.log('handleSignIn', status.value)
  return await signIn('github')
}

async function handleSignOut() {
  console.log('handleSignOut', status.value)
  return await signOut()
}
</script>

<template>
  <UContainer>
    <UCard
      :ui="{
        base: 'text-cool-700',
        background: 'bg-amber-300 dark:bg-amber-400',
      }"
    >
      <h1>
        <pre>{{ status }}</pre>
      </h1>
      <UButton
        v-if="isLoggedIn"
        @click="handleSignOut"
      >
        Sign Out
      </UButton>
      <UButton
        v-else
        @click="handleSignIn"
      >
        Sign In
      </UButton>
    </UCard>
  </UContainer>
</template>
