<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ConfigProvider, Tabbar, TabbarItem } from 'vant'
import { ref } from 'vue'
const active = ref(0)
</script>

<template>
  <ConfigProvider theme="light">
    <RouterView />
    <Tabbar v-model="active">
      <TabbarItem icon="home-o">Tab</TabbarItem>
      <TabbarItem icon="search">Tab</TabbarItem>
      <TabbarItem icon="friends-o">Tab</TabbarItem>
      <TabbarItem icon="setting-o">Tab</TabbarItem>
    </Tabbar>
  </ConfigProvider>
</template>
