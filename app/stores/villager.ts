import { defineStore } from 'pinia'
import data from '~/assets/data'

interface VillagerState {
  prices: Record<string, number>;
  zombified: Record<string, boolean>;
}

export const useVillagerStore = defineStore('villager', {
  state: (): VillagerState => {
    return {
      prices: {},
      zombified: {}
    }
  },
  persist: true,
})