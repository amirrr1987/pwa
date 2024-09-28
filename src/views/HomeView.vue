<template>
  <div>
    <video ref="video" autoplay style="width: 100vw; height: 40vh"></video>
    <button @click="start">Start Camera</button>
    <button @click="stop">Stop Camera</button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useUserMedia } from '@vueuse/core'

const video = ref(null)
const { stream, start, stop } = useUserMedia({
  video: true
})

onMounted(() => {
  if (video.value && stream.value) {
    video.value.srcObject = stream.value
  }
})

onUnmounted(() => {
  stop() // دوربین را متوقف می‌کند
})
</script>
