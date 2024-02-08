import { Box, Center } from '@chakra-ui/react'
import Image from 'next/image'
import { HeaderAuth } from './HeaderAuth'

export const Header = () => {
  return (
    <Center
      as='header'
      px={[2, 4, 8]}
      py={[2, 2, 4]}
      borderBottom='1px'
      borderColor='gray.700'
      justifyContent='space-between'
    >
      <Box pos='relative' width={['100px', '200px']} height={['40px', '60px']}>
        <Image
          src='https://www.omedym.com/hubfs/Omedym-logo-digitizes-the-buying-experience-w%20white.svg'
          alt='logo'
          fill
        />
      </Box>

      <HeaderAuth />
    </Center>
  )
}
