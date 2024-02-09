'use client'

import { useUserStore } from '@/stores/userStore'
import { Tooltip, IconButton, Link } from '@chakra-ui/react'
import { PlusIcon } from 'lucide-react'

export const CreateTaskLink = () => {
  const isLoggedIn = useUserStore((s) => s.isLoggedIn)

  if (!isLoggedIn) return null

  return (
    <Tooltip label='Create new task'>
      <Link href='create-task' mr={8}>
        <IconButton
          aria-label='Create new task'
          icon={<PlusIcon />}
          variant='outline'
          size='md'
        >
          <PlusIcon />
        </IconButton>
      </Link>
    </Tooltip>
  )
}
