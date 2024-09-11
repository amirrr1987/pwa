<script setup lang="ts">
import { RouterView, RouterLink, useRouter } from 'vue-router'
import PWABadge from './components/PWABadge.vue'

import { ConfigProvider, Tabbar, TabbarItem } from 'vant'
import { ref, watch } from 'vue'
const active = ref(0)
const router = useRouter()
watch(active, () => {})
</script>

<template>
  <ConfigProvider theme="light">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum rerum mollitia assumenda iusto aliquid qui, labore, ea recusandae eius laboriosam dolor, minus necessitatibus animi. Tempore porro tempora doloribus reiciendis facere?
    </p>
    <RouterView />
    <PWABadge />
    <Tabbar v-model="active">
      <TabbarItem icon="home-o" to="/"> Home </TabbarItem>
      <TabbarItem icon="search" to="/about"> Tab </TabbarItem>
      <TabbarItem icon="friends-o" to="/search">Search</TabbarItem>
      <TabbarItem icon="setting-o" to="/setting">Setting</TabbarItem>
    </Tabbar>
  </ConfigProvider>
</template>
