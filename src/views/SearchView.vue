<template>
  <div>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, adipisci. Cum expedita veniam
    ipsam officia quidem sint doloribus sapiente voluptatem? Pariatur recusandae non corrupti vero
    nam architecto culpa tempora adipisci?
    <Button @click="getMedia"> take </Button>
  </div>
</template>
<script setup lang="ts">
import { Button } from 'vant'

async function getMedia(constraints: MediaStreamConstraints | undefined) {
  let stream = null

  try {
    stream = await navigator.mediaDevices.getUserMedia(constraints)
    alert(stream)
    /* use the stream */
  } catch (err) {
    /* handle the error */
  }
}
</script>
