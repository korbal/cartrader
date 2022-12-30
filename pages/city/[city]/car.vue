<template>
  <div>
    

    <!-- CARS PAGE -->

  <div class="mt-32 flex">
  <NuxtErrorBoundary>

    <CarSideBar/>
    <NuxtPage/>
    <template #error="{error}">
      <div class="flex justify-center items-center flex-col">
        <h1 class="text-2xl">Something went wrong</h1>
        <code class="text-2xl">{{error}}</code>
        <button class="text-white bg-blue-400 px-10 py-3 rounded mt-4" @click="error.value= null ">Go Back</button>
      </div>
    </template>
  </NuxtErrorBoundary>
  </div>

<!-- CARS PAGE END-->

  </div>
</template>

<script setup>
const route = useRoute()
useHead({
  title: `${route.params.make ? route.params.make : 'Cars'} in ${route.params.city}` 
})

definePageMeta({
  layout: 'custom',
})

</script>

