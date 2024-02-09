'use client'

import { useUserStore } from '@/stores/userStore'
import { Button, useToast } from '@chakra-ui/react'

const loginToastId = 'login-toast'
const logoutToastId = 'logout-toast'

export const HeaderAuth = () => {
  const toast = useToast()
  const { isLoggedIn, login, logout } = useUserStore()

  const handleLogin = () => {
    toast.close(logoutToastId)
    login()
    if (toast.isActive(loginToastId)) return
    toast({ id: loginToastId, title: 'welcome', status: 'success' })
  }

  const handleLogout = () => {
    toast.close(loginToastId)
    logout()
    if (toast.isActive(logoutToastId)) return
    toast({ id: logoutToastId, title: 'bye', status: 'warning' })
  }

  return (
    <Button
      colorScheme={`${isLoggedIn ? 'yellow' : 'green'}`}
      onClick={() => {
        isLoggedIn ? handleLogout() : handleLogin()
      }}
    >
      {isLoggedIn ? 'log out' : 'log in'}
    </Button>
  )
}
