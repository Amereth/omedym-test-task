'use client'

import { TaskCard } from '@/components/TaskCard'
import { useTaskStore } from '@/stores/taskStore'
import { useUserStore } from '@/stores/userStore'
import { Center, Stack, Text } from '@chakra-ui/react'

export default function Home() {
  const isLoggedIn = useUserStore((s) => s.isLoggedIn)

  const tasks = useTaskStore((s) => s.tasks)
  const showDone = useTaskStore((s) => s.showDone)

  const updateTaskStatus = useTaskStore((s) => s.updateTaskStatus)
  const deleteTask = useTaskStore((s) => s.deleteTask)

  if (!isLoggedIn) {
    return (
      <Center h='100%'>
        <Text fontSize='2xl'>You have to log in to see the tasks</Text>
      </Center>
    )
  }

  return (
    <Stack py={[4, 4, 8]} gap={[4, 8]}>
      {tasks.map((task) => {
        if (!showDone && task.status === 'done') return null

        return (
          <TaskCard
            key={task.id}
            task={task}
            onStatusChange={(status) => updateTaskStatus(task.id, status)}
            onDeleteTask={() => deleteTask(task.id)}
          />
        )
      })}
    </Stack>
  )
}
