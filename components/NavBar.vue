<template>
  <div>
  <!-- NAVBAR -->
  <header class="sticky top-0 z-50 flex justify-between items-center space-x-1 borderb-b bg-white p-4 shadow-md">
    <NuxtLink to="/" class="text-3xl font-mono">cartrader</NuxtLink>
    <div class="flex" v-if="user">
      <NuxtLink to="/profile/listings" class="text-xl font-mono">Profile</NuxtLink>
      <p class="cursor-pointer">Logout</p>     
    </div>
    <NuxtLink v-else to="/login">Login</NuxtLink>
  </header>
  <!-- NAVBAR END-->
  </div>
</template>

<script setup>

const user = useSupabaseUser()

</script>

<style scoped>

</style>