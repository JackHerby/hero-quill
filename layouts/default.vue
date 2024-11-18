<script setup lang="ts">
const links = [{
  label: 'Home',
  icon: 'i-heroicons-home',
  to: '/',
},
{
  label: 'Login',
  icon: 'i-heroicons-arrow-right-end-on-rectangle',
  to: '/login',
},
{
  label: 'Public',
  icon: 'i-heroicons-check',
  to: '/public',
},
{
  label: 'Protected',
  icon: 'i-heroicons-x-circle',
  to: '/protected',
}]
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
      <slot />
    </div>
  </div>
</template>
