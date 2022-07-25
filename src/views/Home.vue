<script setup lang="ts">
import { useRouter } from 'vue-router'
import SearchForm from '../components/SearchForm.vue'

const router = useRouter()
</script>

<template>
  <div class="bg h-full w-full flex flex-col justify-center items-center">
    <img src="@/assets/images/logo.png" alt="" class="logo my-auto">
    <div class="px-8 pb-8 w-full">
      <SearchForm @success="router.push('/result')" />
    </div>
  </div>
</template>

<style scoped>
.bg {
  background-image: linear-gradient(153deg, #712bda, #a45deb 100%);
}

.logo {
  width: 25%;
}
</style>