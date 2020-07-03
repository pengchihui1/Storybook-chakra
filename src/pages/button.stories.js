import React from 'react'
import { Button, ThemeProvider, ButtonGroup, Box } from '@chakra-ui/core'

export default { title: 'Chakra-button' }

export const button = () => {
  return (
    <>
      <ThemeProvider>
        <Box margin='0 auto'>
          <ButtonGroup spacing={4}>
            <Button variantColor='teal' variant='solid'>
              Button
            </Button>
            <Button variantColor='teal' variant='outline'>
              Button
            </Button>
            <Button variantColor='teal' variant='ghost'>
              Button
            </Button>
            <Button variantColor='teal' variant='link'>
              Button
            </Button>
          </ButtonGroup>
        </Box>
      </ThemeProvider>
    </>
  )
}
