import { Task } from './stores/taskStore'

export const tasksMock: Task[] = [
  {
    description: 'High priority task, with todo status and due date',
    dueDate: '2024-02-10T23:03',
    id: '1707512608666',
    priority: 'high',
    status: 'todo',
    title: 'Todo task',
  },
  {
    description: 'Low priority task in progress',
    dueDate: '2024-02-10T23:03',
    id: '1707513812551',
    priority: 'low',
    status: 'inProgress',
    title: 'Task in progress',
  },
  {
    description: 'High proirity done task',
    dueDate: '',
    id: '1707520919860',
    priority: 'high',
    status: 'done',
    title: 'Done task',
  },
]
