<template>
  <div>
    <video ref="video" autoplay></video>
    <Button @click="takePicture" type="primary">Take Picture</Button>
    <canvas ref="canvas" style="display: none"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Button } from 'vant'

const video = ref<HTMLVideoElement | null>(null)
const canvas = ref<HTMLCanvasElement | null>(null)

async function getMedia() {
  const constraints = { video: true }
  try {
    const stream = await window.navigator.mediaDevices.getUserMedia(constraints)
    if (video.value) {
      video.value.srcObject = stream
    }
  } catch (err) {
    console.error('Error accessing media devices.', err)
  }
}

function takePicture() {
  if (video.value && canvas.value) {
    const context = canvas.value.getContext('2d')
    if (context) {
      canvas.value.width = video.value.videoWidth
      canvas.value.height = video.value.videoHeight
      context.drawImage(video.value, 0, 0, canvas.value.width, canvas.value.height)
      const imageDataURL = canvas.value.toDataURL('image/png')
      alert(imageDataURL) // The image as a Data URL
      // You can also do something with imageDataURL, like sending it to a server or displaying it.
    }
  }
}

onMounted(() => {
  getMedia()
})
</script>
