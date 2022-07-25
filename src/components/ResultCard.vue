<script setup lang="ts">
const props = defineProps({
  data: {
    type: Object,
    default: null,
    required: true,
  }
})
</script>

<template>
  <div class="bg-white p-4 rounded-lg shadow-lg w-full mb-4 flex">
    <img
      class="w-1/3 rounded-lg mr-4"
      :src="props.data.artworkUrl60"
      alt="Room Image"
    >
    <div class="w-full">
      <small class="mb-2">{{ props.data.artistName }}</small>
      <h6 class="text-base font-medium mb-4">{{ props.data.trackCensoredName }}</h6>
      <div class="flex w-full">
        <span class="bg-green-500 text-white text-xs px-4 py-1 inline-block rounded-full  uppercase font-semibold tracking-wide">
          {{ props.data.primaryGenreName }}
        </span>
        <span class="text-yellow-400 ml-auto">
          $ {{ data.trackPrice }}
        </span>
      </div>
    </div>
  </div>
</template>