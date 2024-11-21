<template>
  <v-layout>
    <v-navigation-drawer v-model="drawer" disable-resize-watcher>
      <v-list nav>
        <NuxtLink key="home" href="/">
          <v-list-item :active="true" link title="Home" />
        </NuxtLink>
        <NuxtLink v-for="(item, i) in items" :key="i" :href="item.route">
          <v-list-item :active="false" link :title="item.text" />
        </NuxtLink>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar class="px-md-4">
      <template #prepend>
        <v-app-bar-nav-icon v-if="$vuetify.display.smAndDown" @click="drawer = !drawer" />
      </template>
      <NuxtLink href="/" title="Home">
        <v-img class="me-sm-8" width="40" src="~/assets/enchantedBook.gif" />
      </NuxtLink>

      <template v-if="$vuetify.display.mdAndUp">
        <v-tabs v-model="activeTab" color="primary">
          <NuxtLink v-for="(item, i) in items" :key="i" :href="item.route">
            <v-tab :key="i" class="me-2 text-none" slim v-bind="item" />
          </NuxtLink>
        </v-tabs>
      </template>

      <v-spacer />

      <template #append>
        <v-btn class="ms-1" color="medium-emphasis" icon="mdi-bell-outline" />

        <v-btn class="ms-1" icon>
          <v-avatar image="https://cdn.vuetifyjs.com/images/john.png" />

          <v-menu activator="parent" origin="top">
            <v-list>
              <v-list-item link title="Update profile" />

              <v-list-item link title="Sign out" />
            </v-list>
          </v-menu>
        </v-btn>
      </template>
    </v-app-bar>

    <v-main height="200">
      <!--  -->
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
import { shallowRef } from 'vue'

const drawer = shallowRef(false)

const activeTab = shallowRef(0)

const items = [
  {
    text: 'Ordering',
    route: '/ordering',
  },
  {
    text: 'Villager Trading',
    route: '/villager-trading',
  },
]
</script>

<style scoped lang="sass">
  .pixelated
    image-rendering: pixelated
    image-rendering: -moz-crisp-edges
    image-rendering: crisp-edges
</style>
