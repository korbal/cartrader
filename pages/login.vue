<template>
  <div class="mt-10">
  <NavBar />
  {{ user}}
    <h1 class="text-5xl font-bold mb-7">Log In</h1>
    <button class="bg-red-400 p3 rounded text-white" @click="login">Log in with Google</button>


  </div>
</template>

<script setup>

definePageMeta({
  layout: 'custom'
})

const supabase = useSupabaseClient()
const user = useSupabaseUser()

const login = async () => {
  const {error} = supabase.auth.signInWithOAuth({
    provider: 'google'
  })
  if (error) {
    console.log(error)
  }
}

</script>

<style lang="scss" scoped>

</style>