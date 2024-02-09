'use client'

import { notFound, useRouter } from 'next/navigation'
import { TaskForm } from '../../components/TaskForm'
import { Task, useTaskStore } from '@/stores/taskStore'
import { useToast } from '@chakra-ui/react'

type Params = { taskId: Task['id'] }

export default function Page({ params: { taskId } }: { params: Params }) {
  const task = useTaskStore((s) => s.tasks.find((t) => t.id === taskId))
  const updateTask = useTaskStore((s) => s.updateTask)
  const router = useRouter()
  const toast = useToast()

  if (!task) {
    notFound()
  }

  return (
    <TaskForm
      defaultValues={task}
      submitButtonLabel='update'
      onSubmit={(values) => {
        updateTask({ ...values, id: task?.id })
        toast({
          title: 'success',
          description: 'updated task',
          status: 'success',
        })
        router.push('/')
      }}
    />
  )
}
