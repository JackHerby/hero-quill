<script setup lang="ts">
definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/protected',
  },
})
</script>

<template>
  <h1>Guest Page</h1>
</template>
