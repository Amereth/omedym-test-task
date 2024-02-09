'use client'

import { useTaskStore } from '@/stores/taskStore'
import { Checkbox, Flex } from '@chakra-ui/react'

export const Footer = () => {
  const showDone = useTaskStore((s) => s.showDone)
  const toggleShowDone = useTaskStore((s) => s.toggleShowDone)

  return (
    <Flex
      as='footer'
      mt='auto'
      height={['40px', '60px']}
      borderTop='1px'
      borderColor='gray.700'
      px={[2, 4, 8]}
      py={[2, 2, 4]}
    >
      <Checkbox isChecked={showDone} onChange={toggleShowDone}>
        Show completed tasks
      </Checkbox>
    </Flex>
  )
}
