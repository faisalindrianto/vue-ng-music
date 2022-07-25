<script setup lang="ts">
import { ref } from 'vue'
import SearchForm from '../components/SearchForm.vue'

const isOpen = ref(false)

const show = () => isOpen.value = true
const close = () => isOpen.value = false

defineExpose({
  show,
  close,
})
</script>

<template>
  <div
    v-if="isOpen"
    class="absolute bg-gray-800 bg-opacity-80 flex flex-col h-full w-full p-8"
    @click="close"
  >
    <mdicon
      name="close"
      class="text-white cursor-pointer ml-auto"
      @click="close"
    />
    <div class="flex flex-col items-center my-auto w-full">
      <h6 class="text-white text-lg font-bold mb-8">
        Search
      </h6>
      <div @click.stop class="w-full">
        <SearchForm :primary-button="true" @success="close" />
      </div>
    </div>
  </div>
</template>