'use client'

import { taskModel } from '@/stores/taskStore'
import { getMinDate } from '@/utils/date'
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Link,
  Select,
  Stack,
  Textarea,
} from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formModel = taskModel.omit({ id: true })

type FormModel = z.infer<typeof formModel>

type TaskFormProps = {
  onSubmit: (formValues: FormModel) => void
  defaultValues?: Partial<FormModel>
  submitButtonLabel?: string
}

const _defaultValues: TaskFormProps['defaultValues'] = {
  status: 'todo',
  priority: 'low',
}

export const TaskForm = ({
  defaultValues = _defaultValues,
  onSubmit,
  submitButtonLabel = 'create',
}: TaskFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormModel>({
    defaultValues,
    resolver: zodResolver(formModel),
  })

  return (
    <Stack
      as='form'
      w={['100%', '100%', 600]}
      mx='auto'
      px={[2, 4, 8]}
      py={[4, 4, 8]}
      gap={[4, 8]}
      alignItems='center'
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormControl isInvalid={!!errors.title}>
        <FormLabel>Task Title</FormLabel>
        <Input size={['sm', 'md', 'lg']} {...register('title')} />
        <FormErrorMessage>{errors.title?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.description}>
        <FormLabel>Task Description</FormLabel>
        <Textarea
          rows={4}
          size={['sm', 'md', 'lg']}
          {...register('description')}
        />
        <FormErrorMessage>{errors.description?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.dueDate}>
        <FormLabel>Task Due Date</FormLabel>
        <Input
          type='datetime-local'
          size={['sm', 'md', 'lg']}
          min={getMinDate()}
          {...register('dueDate')}
        />
        <FormErrorMessage>{errors.dueDate?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.status}>
        <FormLabel>Task Status</FormLabel>
        <Select size={['sm', 'md', 'lg']} {...register('status')}>
          <option value='todo'>To Do</option>
          <option value='inProgress'>In Progress</option>
          <option value='done'>Done</option>
        </Select>
        <FormErrorMessage>{errors.status?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.priority}>
        <FormLabel>Task Priority</FormLabel>
        <Select size={['sm', 'md', 'lg']} {...register('priority')}>
          <option value='low'>Low</option>
          <option value='high'>High</option>
        </Select>
        <FormErrorMessage>{errors.priority?.message}</FormErrorMessage>
      </FormControl>

      <Stack direction='row' gap={4}>
        <Link href='/'>
          <Button as='span' colorScheme='red' size={['md', 'md', 'lg']}>
            cancel
          </Button>
        </Link>
        <Button type='submit' colorScheme='green' size={['md', 'md', 'lg']}>
          {submitButtonLabel}
        </Button>
      </Stack>
    </Stack>
  )
}
