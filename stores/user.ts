import { defineStore } from 'pinia'
import axios from 'axios'

interface UserProfile {
  id: number
  name: string
  email: string
}

interface UserState {
  profile: UserProfile | null
  loading: boolean
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    profile: null,
    loading: false,
  }),
  actions: {
    async fetchUser(): Promise<void> {
      this.loading = true
      try {
        const res = await axios.get<UserProfile>('https://api.example.com/me')
        this.profile = res.data
      } catch (error) {
        console.error('Failed to fetch user', error)
      } finally {
        this.loading = false
      }
    },
  },
  persist: true,
})
