<script setup lang="ts">
const { status, signIn, signOut } = useAuth()

const isLoggedIn = status.value === 'authenticated'

async function handleSignIn() {
  return await signIn('github')
}

async function handleSignOut() {
  return await signOut()
}
</script>

<template>
  <UContainer>
    <pre>{{ status }}</pre>
    <UCard :ui="{ base: 'text-cool-700', background: 'bg-amber-300 dark:bg-amber-400' }">
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
