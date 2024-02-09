import { Box, IconButton, Link, Tooltip } from '@chakra-ui/react'
import Image from 'next/image'
import { HeaderAuth } from './HeaderAuth'
import { PlusIcon } from 'lucide-react'

export const Header = () => {
  return (
    <Box
      display='flex'
      alignItems='center'
      as='header'
      px={[2, 4, 8]}
      py={[2, 2, 4]}
      borderBottom='1px'
      borderColor='gray.700'
    >
      <Box pos='relative' width={['100px', '200px']} height={['40px', '60px']}>
        <Image
          src='https://www.omedym.com/hubfs/Omedym-logo-digitizes-the-buying-experience-w%20white.svg'
          alt='logo'
          fill
        />
      </Box>

      <Tooltip label='Create new task'>
        <Link href='create-task' ml='auto' mr={8}>
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

      <HeaderAuth />
    </Box>
  )
}
