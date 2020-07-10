import React from 'react'
import { Grid, Box, Stack, Heading, Icon, Flex, Text } from '@chakra-ui/core'

export default { title: 'Chakra-Alert' }

// 不同类型的标题
export const AlertOne = () => {
  return (
    <Box>
      <Stack spacing={3}>
        <Heading as='h1' size='2xl'>
          In love with React & Next
        </Heading>
        <Heading as='h2' size='xl'>
          In love with React & Next
        </Heading>
        <Heading as='h3' size='lg'>
          In love with React & Next
        </Heading>
        <Heading as='h4' size='md'>
          In love with React & Next
        </Heading>
        <Heading as='h5' size='sm'>
          In love with React & Next
        </Heading>
        <Heading as='h6' size='xs'>
          In love with React & Next
        </Heading>
      </Stack>
    </Box>
  )
}
// 不同类型的标题
export const AlertIcon = () => {
  return (
    <Box>
      <Stack isInline>
        {/* Default size is 1em => 16px */}
        <Icon name='phone' />
        {/* Use the `size` prop to change the icon size */}
        <Icon name='check-circle' size='24px' />
        {/* Use the `color` prop to change the icon color */}
        <Icon name='warning' size='32px' color='red.500' />
      </Stack>
    </Box>
  )
}
// 不同类型的grid
export const AlertGrid = () => {
  return (
    <Box>
      <Grid templateColumns='repeat(3, 1fr)' gap={6}>
        <Box w='100%' h='20' bg='#FF8C69' />
        <Box w='100%' h='10' bg='#EED8AE' />
        <Box w='100%' h='30' bg='#8B4726' />
        <Box w='100%' h='10' bg='blue.500' />
        <Box w='100%' h='50' bg='#FFB6C1' />
        <Box w='100%' h='10' bg='#A020F0' />
        <Box w='100%' h='10' bg='#CDBA96' />
      </Grid>
    </Box>
  )
}

export const AlertFlex = () => {
  return (
    <Flex align='center'>
      <Flex bg='green.50' align='flex-end'>
        <Text>Box 1</Text>
      </Flex>
      <Flex bg='blue.50' size='150px' align='center' justify='center'>
        <Text textAlign='center' bg='pink.50'>
          Box 2
        </Text>
      </Flex>
      <Box>
        <Text bg='tomato' color='white'>
          Box 3
        </Text>
      </Box>
    </Flex>
  )
}
