import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type UserStore = {
  isLoggedIn: boolean
  login: () => void
  logout: () => void
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      login: () => set({ isLoggedIn: true }),
      logout: () => set({ isLoggedIn: false }),
    }),
    { name: 'USER-STATE' },
  ),
)
