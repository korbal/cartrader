<template>
  <div>

    <div class="font-serif w-[1000px] text 2xl rounded-full bg-white flex justify-between overflow-hidden drop-shadow-2xl mx-auto">
          <input type="text" class="py-3 px-5 w-full text-2xl rounded-full focus:outline-none"
            placeholder="Search by city..." v-model="city" :class="cityError ? 'border-red-500 border' : ''">
          <button class="bg-[#f9a109] px w-32 h-16 text-white text-2xl" @click="handleSearch">Search</button>
    </div>

  </div>
</template>

<script setup>

const city = ref('')
const cityError = ref(false)

const handleSearch = () => {
  if(!city.value){
    return cityError.value = true
  }
  navigateTo(`/city/${city.value}/car`)
}

</script>

