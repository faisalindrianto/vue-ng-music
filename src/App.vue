<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="screen-wrapper">
    <router-view v-slot="{ Component }">
      <transition name="slide-fade" appear mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style>
/* router animation */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
