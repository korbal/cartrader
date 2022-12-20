<template>
  <div>
    

    <!-- CARS PAGE -->

  <div class="mt-32 flex">
    <!-- CAR SIDEBAR -->

    <CarSideBar/>

    <!-- CAR SIDEBAR END-->

    <NuxtPage/>
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

