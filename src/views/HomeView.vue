<template>
  <div>
    <video ref="video" autoplay style="width: 100vw; height: 40vh"></video>
    <button @click="start">Start Camera</button>
    <button @click="stop">Stop Camera</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useUserMedia } from '@vueuse/core'

const video = ref<HTMLVideoElement | null>(null)

const { stream, start, stop } = useUserMedia({ enabled: true })

onMounted(() => {
  if (video.value && stream.value) {
    video.value.srcObject = stream.value
  }
})

onUnmounted(() => {
  stop()
})
</script>
