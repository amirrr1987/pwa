<script setup lang="ts">
import { RouterView, RouterLink, useRouter } from 'vue-router'
import { ConfigProvider, Tabbar, TabbarItem } from 'vant'
import { ref, watch } from 'vue'
const active = ref(0)
const router = useRouter()
watch(active, () => {})
</script>

<template>
  <ConfigProvider theme="light">
    <RouterView />
    <Tabbar v-model="active">
      <RouterLink to="/"><TabbarItem icon="home-o">Tab</TabbarItem></RouterLink>
      <RouterLink to="/about"><TabbarItem icon="search">Tab</TabbarItem></RouterLink>
      <TabbarItem icon="friends-o">Tab</TabbarItem>
      <TabbarItem icon="setting-o">Tab</TabbarItem>
    </Tabbar>
  </ConfigProvider>
</template>
