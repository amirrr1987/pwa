<template>
  <ConfigProvider theme="light">
    <NavBar title="Title" left-text="Back" left-arrow @click-left="onClickLeft">
      <template #right>
        <Icon name="search" />
      </template>
    </NavBar>
    <RouterView />
    <Tabbar v-model="active">
      <TabbarItem name="home" icon="home-o" to="/">Home</TabbarItem>
      <TabbarItem icon="search" to="/search">search</TabbarItem>
      <TabbarItem icon="friends-o" to="/user">User</TabbarItem>
      <TabbarItem icon="setting-o" to="/setting">Setting</TabbarItem>
    </Tabbar>
  </ConfigProvider>
</template>
<script setup lang="ts">
import { ConfigProvider, Tabbar, TabbarItem, NavBar, Icon } from 'vant'
import { ref } from 'vue'
const active = ref(0)
const onClickLeft = () => history.back()
</script>
