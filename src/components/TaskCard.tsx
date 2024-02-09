import { Task, TaskStatus } from '@/stores/taskStore'
import {
  Stack,
  StackDivider,
  Tooltip,
  Select,
  Box,
  Text,
  IconButton,
  Link,
} from '@chakra-ui/react'
import { AlertCircleIcon, EditIcon } from 'lucide-react'

const now = new Date()

const taskCardBorderColorMap: Record<TaskStatus, string> = {
  todo: 'gray.500',
  inProgress: 'blue.500',
  done: 'green.500',
}

type TaskCardProps = {
  task: Task
  onStatusChange: (status: TaskStatus) => void
}

export const TaskCard = ({ task, onStatusChange }: TaskCardProps) => {
  return (
    <Stack
      borderRadius={12}
      border='1px solid'
      borderColor={taskCardBorderColorMap[task.status]}
      p={[2, 2, 4]}
      divider={<StackDivider borderColor='gray.500' />}
    >
      <Box display='flex' alignItems='center' gap={2}>
        {task.priority === 'high' && (
          <Tooltip label='This is high priority task'>
            <Text color='red.300'>
              <AlertCircleIcon size={20} />
            </Text>
          </Tooltip>
        )}

        {task.dueDate && (
          <Text
            fontSize='sm'
            color={now > new Date(task.dueDate) ? 'red.300' : 'gray.500'}
          >
            Due date: {new Date(task.dueDate).toLocaleString()}
          </Text>
        )}

        <Box ml='auto'>
          <Select
            size={['xs']}
            value={task.status}
            onChange={(e) => onStatusChange(e.target.value as TaskStatus)}
          >
            <option value='todo'>To Do</option>
            <option value='inProgress'>In Progress</option>
            <option value='done'>Done</option>
          </Select>
        </Box>

        <Tooltip label='Edit task'>
          <Link href={`update-task/${task.id}`}>
            <IconButton
              as='span'
              size='sm'
              aria-label='Edit task'
              color='gray.500'
              icon={<EditIcon size={24} strokeWidth={1} />}
              variant='ghost'
            />
          </Link>
        </Tooltip>
      </Box>

      <Text as='span' fontSize={['lg', 'xl']}>
        {task.title}
      </Text>

      <Text fontSize={['sm', 'md']}>{task.description}</Text>
    </Stack>
  )
}
