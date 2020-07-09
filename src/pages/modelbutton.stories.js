import React, { useState } from 'react'
import { ThemeProvider, ColorModeProvider, Box, Button, useColorMode } from '@chakra-ui/core'

export default { title: 'ModeButton' }

export const StyleColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const b = colorMode
  const k = toggleColorMode()

  const bgColor = { light: 'red.500', dark: 'red.200' }
  const color = { light: 'white', dark: 'gray.800' }

  return (
    <>
      <ThemeProvider>
        <Button size='sm' onClick={() => { console.log(k) }}>
          Toggle Mode
        </Button>
      </ThemeProvider>
    </>
  )
}
