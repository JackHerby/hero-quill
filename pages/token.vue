<script setup lang="ts">
definePageMeta({ auth: false })
const headers = useRequestHeaders(['cookie'])
const { data: token } = await useFetch('/api/token', { headers })
</script>

<template>
  <pre>{{ token || 'no token' }}</pre>
</template>
