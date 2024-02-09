import { tasksMock } from '@/mock'
import { minDateNowValidator } from '@/utils/validators'
import { z } from 'zod'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const taskStatuses = ['todo', 'inProgress', 'done'] as const
export type TaskStatus = (typeof taskStatuses)[number]

export const taskModel = z.object({
  id: z.string(),

  title: z
    .string()
    .trim()
    .min(3, 'Title should be at least 3 characters long.')
    .max(100, 'Title should be at most 100 characters long.'),

  description: z
    .string()
    .trim()
    .min(10, 'Description should be at least 10 characters long.')
    .max(500, 'Description should be at most 500 characters long.'),

  dueDate: z
    .string()
    .refine(minDateNowValidator, 'Due date should be in the future.'),

  status: z.enum(taskStatuses),

  priority: z.enum(['low', 'high']),
})

export type Task = z.infer<typeof taskModel>

type TaskStore = {
  tasks: Task[]
  showDone: boolean
  toggleShowDone: () => void
  createTask: (task: Task) => void
  updateTask: (task: Task) => void
  deleteTask: (id: string) => void
  updateTaskStatus: (id: string, status: TaskStatus) => void
}

export const useTaskStore = create<TaskStore>()(
  persist(
    (set, get) => ({
      tasks: tasksMock,
      showDone: true,

      toggleShowDone: () => set({ showDone: !get().showDone }),

      createTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),

      updateTask: (task) =>
        set((state) => ({
          tasks: state.tasks.map((t) => (t.id === task.id ? task : t)),
        })),

      deleteTask: (id) =>
        set((state) => ({ tasks: state.tasks.filter((t) => t.id !== id) })),

      updateTaskStatus: (id, status) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, status } : task,
          ),
        })),
    }),
    { name: 'TASKS-STATE' },
  ),
)
