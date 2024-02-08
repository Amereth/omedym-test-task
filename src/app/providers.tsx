'use client'

import { theme } from '@/theme'
import { ChakraProvider } from '@chakra-ui/react'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider
      theme={theme}
      toastOptions={{
        defaultOptions: {
          position: 'bottom',
          duration: 6000,
          isClosable: true,
        },
      }}
    >
      {children}
    </ChakraProvider>
  )
}
