import { defineStore } from 'pinia'

interface ThemeState {
  isDark: boolean
}

export const useThemeStore = defineStore('theme', {
  state: (): ThemeState => ({
    isDark: false,
  }),
  actions: {
    toggleDark(): void {
      this.isDark = !this.isDark
      document.documentElement.setAttribute('data-bs-theme', this.isDark ? 'dark' : 'light')
    },
  },
  persist: true,
})
