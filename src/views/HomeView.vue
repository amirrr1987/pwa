<template>
  <div>
    <video ref="video" autoplay></video>
    <button @click="takePicture">Take Picture</button>
    <canvas ref="canvas" style="display: none"></canvas>

    <!-- نمایش گالری -->
    <div v-if="gallery.length > 0">
      <h3>Gallery</h3>
      <div class="gallery">
        <img v-for="(image, index) in gallery" :key="index" :src="image" alt="Captured image" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const video = ref<HTMLVideoElement | null>(null)
const canvas = ref<HTMLCanvasElement | null>(null)
const gallery = ref<string[]>([]) 

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
      gallery.value.push(imageDataURL) // اضافه کردن تصویر به گالری
    }
  }
}

onMounted(() => {
  getMedia()
})
</script>

<style>
.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.gallery img {
  max-width: 100px;
  max-height: 100px;
  object-fit: cover;
  border: 2px solid #ccc;
}
</style>
