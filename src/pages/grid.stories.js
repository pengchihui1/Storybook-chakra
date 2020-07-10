import React from 'react'
import { Button, ThemeProvider, ButtonGroup, Box,Grid } from '@chakra-ui/core'

export default { title: 'Chakra-Grid' }


//横向自动分布 repeat每行分布个数  gap差距
export const GridOne = () => {
  return (
    <>
      <ThemeProvider>
        <Grid templateColumns="repeat(3, 1fr)" gap={100}>
		  <Box w="100%" h="10" bg="blue.500" />
		  <Box w="100%" h="10" bg="blue.500" />
		  <Box w="100%" h="10" bg="blue.500" />
		  <Box w="100%" h="10" bg="blue.500" />
		  <Box w="100%" h="10" bg="blue.500" />
		</Grid>
      </ThemeProvider>
    </>
  )
}