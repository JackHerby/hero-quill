<script setup lang="ts">
const { data } = useAuth()
</script>

<template>
  <div>
    <h1>Protected Page</h1>
    <pre>{{ data }}</pre>
  </div>
</template>
