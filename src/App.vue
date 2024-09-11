<script setup lang="ts">
import { RouterView, RouterLink, useRouter } from 'vue-router'

import { Card, ConfigProvider, Tabbar, TabbarItem } from 'vant'
import { onMounted, ref, watch } from 'vue'
import axios from 'axios'
import type { Product } from './types/ProductModel'
const active = ref(0)
const router = useRouter()
watch(active, () => {})
const products = ref<Product[]>([])
const getData = async () => {
  try {
    const { data } = await axios.get('https://fakestoreapi.com/products')
    products.value = data
    console.log('🚀 ~ getData ~ data:', data)
  } catch (error) {
    console.log('🚀 ~ getData ~ error:', error)
  }
}
onMounted(async () => getData())
</script>

<template>
  <ConfigProvider theme="light">
    <Card
      v-for="item in products"
      :key="item.id"
      num="2"
      :price="item.price"
      :title="item.title"
      :desc="item.description"
      :thumb="item.image"
    />

    <RouterView />
    <Tabbar v-model="active">
      <TabbarItem icon="home-o" to="/"> Home </TabbarItem>
      <TabbarItem icon="search" to="/about"> Tab </TabbarItem>
      <TabbarItem icon="friends-o" to="/search">Search</TabbarItem>
      <TabbarItem icon="setting-o" to="/setting">Setting</TabbarItem>
    </Tabbar>
  </ConfigProvider>
</template>
