import { defineStore } from 'pinia'

interface User {
  id: number
  name: string
  email: string
}

interface AuthState {
  user: User | null
  token: string | null
}

interface LoginPayload {
  user: User
  token: string
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
    token: null,
  }),
  actions: {
    login(userData: LoginPayload) {
      this.user = userData.user
      this.token = userData.token
    },
    logout() {
      this.user = null
      this.token = null
    },
  },
  persist: true,
})
