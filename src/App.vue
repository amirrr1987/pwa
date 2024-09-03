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
      <TabbarItem icon="home-o" to="/"> Home </TabbarItem>
      <TabbarItem icon="search" to="/about"> Tab </TabbarItem>
      <TabbarItem icon="friends-o">Tab</TabbarItem>
      <TabbarItem icon="setting-o">Setting</TabbarItem>
    </Tabbar>
  </ConfigProvider>
</template>
