<template>
  <div>
      <NavBar />

      <!-- CAR DETAIL PAGE -->
<div class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5">
  <div>
    
    <!-- CAR HERO -->
      <CarDetailHero/>
    <!-- CAR HERO END -->

    <!-- CAR ATTRIBUTES -->
    
    <CarDetailAttribues/>

    <!-- CAR ATTRIBUTES END-->

    <!-- CAR DESCRIPTION  -->
    <CarDetailDescription/>
    <!-- CAR DESCRIPTION END -->

    <!-- CAR CONTACT -->
    <CarDetailContact/>
    <!-- CAR CONTACT END-->

  </div>
</div>
<!-- CAR DETAIL PAGE END -->

  </div>
</template>

<script setup>
const route = useRoute()
useHead({
  title: `${route.params.name}`
})
</script>

