<script setup lang="ts">
import { ref } from 'vue'
import ResultCard from '@/components/ResultCard.vue'
import { useSearchStore } from '@/stores/search'
import SearchOverlay from '../components/SearchOverlay.vue'

const searchStore = useSearchStore()

const search = ref()
</script>

<template>
  <div class="relative search-result w-full h-full flex flex-col items-center">
    <div class="search-bar w-full flex items-center p-4 pt-5 pb-8">
      <mdicon
        name="menu"
        class="text-white cursor-pointer"
      />  
      <img src="@/assets/images/logo-text.png" alt="" class="logo-text mx-auto">
      <mdicon
        name="magnify"
        class="text-white cursor-pointer"
        @click="search.show()"
      /> 
    </div>

    <div class="flex flex-wrap items-center justify-center my-8">
      <span class="mr-2 text-base text-gray-500">Search result for : </span>
      <h6 class="text-purple-700 font-bold">{{ searchStore.searchKeyword }}</h6>
    </div>

    <div
      v-if="searchStore.searchResult.length"
      class="search-result-list w-full px-8"
    >
      <ResultCard
        v-for="(data, index) in searchStore.searchResult"
        :key="index"
        :data="data"
      />
    </div>

    <div v-else>
      <span class="mr-2 text-lg text-gray-300">Can't find the music :(</span>
    </div>

    <SearchOverlay ref="search" />
  </div>
</template>

<style scoped>
.search-result {
  overflow: hidden;
  background-color: #f8fafc;
}

.search-bar {
  background-image: linear-gradient(100deg, #712bda, #a45deb 100%);
  box-shadow: 0 0 6px 0 rgba(148, 77, 230, 0.75);
  border-radius: 0 0 40% 40%;
}

.logo-text {
  max-height: 20px;
}

.search-result-list {
  overflow-y: auto;
}
</style>