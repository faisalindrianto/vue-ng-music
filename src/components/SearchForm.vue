<script setup lang="ts">
  import { useSearchStore } from '@/stores/search'

  const searchStore = useSearchStore()

  const emit = defineEmits(['success'])

  const search = () => {
    searchStore.searchMusic().then(() => emit('success'))
  }

  const props = defineProps({
    primaryButton: {
      type: Boolean,
      default: false,
    }
  })
</script>

<template>
  <form
    @submit.prevent="search"
    class="w-full"
  >
    <div class="flex flex-col">
      <input
        v-model="searchStore.searchKeyword"
        type="text"
        class="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm text-center rounded-full focus:ring-gray-400 focus:border-gray-500 block w-full p-2.5"
        placeholder="Artist / Album / Title"
        required
      />

      <button
        type="submit"
        class="text-white hover:bg-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center"
        :class="props.primaryButton ? 'bg-gradient-purple' : 'bg-white bg-opacity-40'"
      >
        Search
      </button>
    </div>
  </form>
</template>

<style>
.bg-gradient-purple {
  background-image: linear-gradient(98deg, #712bda, #a45deb) !important;
}
</style>
