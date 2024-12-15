<script setup lang="ts">
const links = [
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/',
    external: true,
  },
  {
    label: 'Login',
    icon: 'i-heroicons-arrow-right-end-on-rectangle',
    to: '/login',
    external: true,
  },
]
</script>

<template>
  <div class="h-screen flex flex-col">
    <UHorizontalNavigation
      class="border-b border-gray-200 dark:border-gray-800"
      :links="links"
      :ui="{
        inner: 'min-w-fit',
        container: 'min-w-fit',
        wrapper: 'justify-center',
      }"
    />
    <div class="flex-1">
      <h1>Nuxt UI test</h1>
    </div>
  </div>
</template>
