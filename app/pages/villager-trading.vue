<template>
  <v-container class="fill-height">
    <v-responsive class="align-center fill-height mx-auto" max-width="900">
      <v-img class="mb-4 pixelated" height="150" src="~/assets/enchantedBook.gif" />

      <div class="text-center">
        <h1 class="text-h2 font-weight-bold">{{ $t('h1_title') }}</h1>
      </div>

      <div class="py-4" />

      <v-data-table :headers="headers" :items="trades" class="elevation-1">
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>{{ $t('villager_trades') }}</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
          </v-toolbar>
        </template>
        <template v-slot:item.items="{ item }">
          <div class="d-flex flex-wrap justify-center" style="max-width: 225px;">
            <v-img v-for="(img, index) in item.items" :key="index" :src="`/img/items/${img}.gif`"
              :alt="$t(`items.${img}`)" class="pixelated mx-1 my-1" height="25" width="25" />
          </div>
        </template>
        <template v-slot:item.enchantment="{ item }">
          {{ $t(`enchants.${item.enchantment}`) }}
        </template>
        <template v-slot:item.price="{ item }">
          <v-number-input 
          v-model="villagerStore.prices[item.enchantment]"
          controlVariant="stacked"
          class="ma-0"
          :min="minPrice(item.levelMax, item.treasure, villagerStore.zombified[item.enchantment])"
          :max="maxPrice(item.levelMax, item.treasure)"
          />
        </template>
        <template v-slot:item.zombified="{ item }">
          <v-checkbox
            v-model="villagerStore.zombified[item.enchantment]"
            class="ma-0"
          />
        </template>
      </v-data-table>
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
import data from '~/assets/data'
import { VNumberInput } from 'vuetify/labs/VNumberInput'

import { useVillagerStore } from '~/stores/villager';

const villagerStore = useVillagerStore()

const headers = [
  { title: 'Enchantment', value: 'enchantment' },
  { title: 'Max Level', value: 'levelMaxRoman' },
  { title: 'Price Range', value: 'priceRange' },
  { title: 'Items', value: 'items' },
  { title: 'Price', value: 'price' },
  { title: 'Zombified', value: 'zombified' },
]

const minPrice = (level: number, isRare: boolean, isZombified = false) => {
  if (isZombified) return 1
  return 2 + 3 * level * (isRare ? 2 : 1)
}

const maxPrice = (level: number, isRare:boolean) => Math.min(6 + 13 * level * (isRare ? 2 : 1), 64)

const toRoman = (num: number) => {
  const romanNumerals = ['I', 'II', 'III', 'IV', 'V']
  return romanNumerals[num - 1] || num
}

const trades = Object.entries(data.enchants)
  .filter(([_, value]) => value.tradable)
  .map(([key, value]) => ({
    enchantment: key,
    ...value,
    levelMaxRoman: toRoman(value.levelMax),
    priceRange: `${minPrice(value.levelMax, value.treasure, villagerStore.zombified[key])} - ${maxPrice(value.levelMax, value.treasure)}`
  }))
</script>

<style scoped lang="sass">
  .pixelated
    image-rendering: pixelated
    image-rendering: -moz-crisp-edges
    image-rendering: crisp-edges
</style>
