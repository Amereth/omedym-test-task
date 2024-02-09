import { Box } from '@chakra-ui/react'
import Image from 'next/image'
import { HeaderAuth } from './HeaderAuth'
import { CreateTaskLink } from './CreateTaskLink'

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
      <Box
        pos='relative'
        width={['100px', '200px']}
        height={['40px', '60px']}
        mr='auto'
      >
        <Image
          src='https://www.omedym.com/hubfs/Omedym-logo-digitizes-the-buying-experience-w%20white.svg'
          alt='logo'
          fill
        />
      </Box>

      <CreateTaskLink />

      <HeaderAuth />
    </Box>
  )
}
