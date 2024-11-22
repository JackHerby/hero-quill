<script setup lang="ts">
const { data } = useAuth()
</script>

<template>
  <h1>Protected Page</h1>
  <pre>{{ data }}</pre>
</template>
