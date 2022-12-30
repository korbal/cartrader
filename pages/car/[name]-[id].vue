<template>
  <div v-if="car">
      
      <!-- CAR DETAIL PAGE -->

  <div>
    
    <!-- CAR HERO -->
    
      <CarDetailHero :car="car" />
    <!-- CAR HERO END -->

    <!-- CAR ATTRIBUTES -->
    
    <CarDetailAttribues :features = "car.features"/>

    <!-- CAR ATTRIBUTES END-->

    <!-- CAR DESCRIPTION  -->
    <CarDetailDescription :description="car.description"/>
    <!-- CAR DESCRIPTION END -->

    <!-- CAR CONTACT -->
    <CarDetailContact/>
    <!-- CAR CONTACT END-->

  </div>

<!-- CAR DETAIL PAGE END -->

  </div>
</template>

<script setup>
const {cars} = useCars()
const route = useRoute()
const useUtils = useUtilities()
useHead({
  title: useUtils.toUpperCase(`${route.params.name}`)
})

definePageMeta({
  layout: 'custom',
})

const car = computed(() => {
  return cars.find((c) => {
    return c.id === parseInt(route.params.id)
  })
})

if(!car.value) {
  throw createError({
    statusCode: 404,
    message: `Car with id of ${route.params.id} does not exist`
  })
}

</script>

