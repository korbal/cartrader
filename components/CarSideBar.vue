<template>
  <div>
       <!-- CAR SIDE BAR -->
    <div class="shadow border w-64 mr-10 z-30 h-[190px]">
    <!-- Location start -->
      <div class="p-5 flex justify-between relative cursor-pointer border-b">
        <h3>Location</h3>
        <h3 class="text-blue-400 capitalize" @click="updateModal('location')">{{route.params.city}}</h3>
        <div class="absolute border shadow left-56 p-5 top-1 -m-1 bg-white" v-if="modal.location">
        <input type="text" class="border p-1 rounded" v-model="city"/>
        <button class="bg-blue-400 w-full mt-2 rounded text-white p-1 " @click="onChangeLocation">Apply</button>
      </div>
      </div>
      <!-- Location end -->

      <!-- Make start -->
      <div class="p-5 flex justify-between relative cursor-pointer border-b">
        <h3>Make</h3>
        <h3 class="text-blue-400 capitalize" @click="updateModal('make')">{{route.params.make || 'Any'}}</h3>
        <div class="absolute border shadow left-56 p-5 top-1 -m-1 w-[600px] flex justify-between flex-wrap bg-white z-10" v-if="modal.make">
          <h4 v-for="make in makes" :key="make" class="w-1/3" @click="onChangeMake(make)">{{ make }}</h4>
        </div>
      </div>
      <!-- Make end -->

      <!-- Price sart -->
      <div class="p-5 flex justify-between relative cursor-pointer border-b">
        <h3>Price</h3>
        <h3 class="text-blue-400 capitalize" @click="updateModal('price')">{{ priceRangeText }}</h3>
        <div class="absolute border shadow right-20 p-5 top-1 -m-1 bg-white" v-if="modal.price">
          <input type="number" placeholder="Min" class="border p-1 rounded" v-model="priceRange.min">
          <input type="number" placeholder="Max" class="border p-1 rounded" v-model="priceRange.max">
          <button class="bg-blue-400 w-full mt-2 rounded text-white p-1" on-click="onChangePrice">Apply</button>
        </div>
      </div>
      <!-- Price end -->
    </div>
    <!-- CAR SIDE BAR END-->

  </div>
</template>

<script setup>
const modal =ref({make: false, location: false, price: false})
const city = ref('')
const route = useRoute()

const updateModal = (key) => {
  modal.value[key] = !modal.value[key]
}

const onChangeLocation = () => {
  if(!city.value) return
  if(!isNaN(parseInt(city.value))){
    throw createError(400, 'City name cannot be a number')
  }
  updateModal('location')
  navigateTo(`/city/${city.value}/car/${route.params.make}`)
  city.value = ''
}

const {makes} = useCars()

const onChangeMake = (make) => {
  updateModal('make')
  navigateTo(`/city/${route.params.city}/car/${make}`)
}

const priceRange = ref({min: 0, max: 1000000})
const priceRangeText = computed(()=>{
  const minPrice = route.query.minPrice;
  const maxPrice = route.query.maxPrice;
  
  if(!minPrice && !maxPrice) return 'Any';
  else if(!minPrice && maxPrice) {
    return `< $${maxPrice}`
  }
  else if(minPrice && !maxPrice) {
    return `> $${minPrice}`
  }
  else {
    return `$${minPrice} - $${maxPrice}`
  }
})

const router = useRouter()

const onChangePrice = () => {
  updateModal('price')
  if(priceRange.value.max && priceRange.value.min){
    if(priceRange.value.max < priceRange.value.min){
     return
    }
  }
  router.push({
    query: {
      
      minPrice: priceRange.value.min || undefined,
      maxPrice: priceRange.value.max || undefined
    }
  })
  
}
</script>

<style lang="scss" scoped>

</style>