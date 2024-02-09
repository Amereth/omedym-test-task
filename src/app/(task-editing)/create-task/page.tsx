'use client'

import { useRouter } from 'next/navigation'
import { TaskForm } from '../components/TaskForm'
import { useTaskStore } from '@/stores/taskStore'
import { useToast } from '@chakra-ui/react'

export default function Page() {
  const createTask = useTaskStore((s) => s.createTask)
  const router = useRouter()
  const toast = useToast()

  return (
    <TaskForm
      onSubmit={(values) => {
        createTask({ ...values, id: Date.now().toString() })
        toast({
          title: 'success',
          description: 'created new task',
          status: 'success',
        })
        router.push('/')
      }}
    />
  )
}
