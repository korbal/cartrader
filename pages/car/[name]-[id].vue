<template>
  <div>
      

      <!-- CAR DETAIL PAGE -->

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

<!-- CAR DETAIL PAGE END -->

  </div>
</template>

<script setup>
const route = useRoute()
const useUtils = useUtilities()
useHead({
  title: useUtils.toUpperCase(`${route.params.name}`)
})

definePageMeta({
  layout: 'custom',
})

</script>

