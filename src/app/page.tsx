'use client'

import { TaskCard } from '@/components/TaskCard'
import { useTaskStore } from '@/stores/taskStore'
import { useUserStore } from '@/stores/userStore'
import { Center, Stack, Text } from '@chakra-ui/react'

export default function Home() {
  const isLoggedIn = useUserStore((s) => s.isLoggedIn)
  const tasks = useTaskStore((s) => s.tasks)
  const updateTaskStatus = useTaskStore((s) => s.updateTaskStatus)

  if (!isLoggedIn) {
    return (
      <Center h='100%'>
        <Text fontSize='2xl'>You have to log in to see the tasks</Text>
      </Center>
    )
  }

  return (
    <Stack px={[2, 4, 8]} py={[4, 4, 8]} gap={[4, 8]} overflowY='auto'>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onStatusChange={(status) => updateTaskStatus(task.id, status)}
        />
      ))}
    </Stack>
  )
}
