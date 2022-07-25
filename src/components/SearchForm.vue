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
        class="flex items-center justify-center text-white hover:bg-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5"
        :class="props.primaryButton ? 'bg-gradient-purple' : 'bg-white bg-opacity-40'"
        :disabled="searchStore.searchLoading"
      >
        <div v-if="searchStore.searchLoading" class="loader"></div>
        <span v-else>Search</span>
      </button>
    </div>
  </form>
</template>

<style>
.bg-gradient-purple {
  background-image: linear-gradient(98deg, #712bda, #a45deb) !important;
}

.loader {
  border: 2px solid #f3f3f3; /* Light grey */
  border-top: 2px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 1.4s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
