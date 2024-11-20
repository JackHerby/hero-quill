<script setup lang="ts">
definePageMeta({ auth: false })
const { status, signOut } = useAuth()

const isLoggedIn = status.value === 'authenticated'
</script>

<template>
  <UContainer>
    <UCard
      :ui="{
        base: 'text-cool-700',
        background: 'bg-amber-300 dark:bg-amber-400',
      }"
    >
      <h1 class="text-xl">{{ status }}</h1>
      <UButton v-if="isLoggedIn" @click="() => signOut()">Sign Out</UButton>
    </UCard>
  </UContainer>
</template>
