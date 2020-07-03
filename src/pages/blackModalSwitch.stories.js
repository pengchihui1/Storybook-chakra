
import React from 'react'
import { Button, useColorMode, ThemeProvider, ColorModeProvider, Switch } from '@chakra-ui/core'
// import { App } from '../../App'
export default { title: 'BlackModeSwitch' }

export const userBox = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'

  const { useBox, setUseBox } = useColorMode()

  return (
    <>
      <ThemeProvider>
        <ColorModeProvider>{children}</ColorModeProvider>
        <Switch
          position='fixed'
          top='1rem'
          right='1rem'
          color='green'
          isChecked={isDark}
          onChange={toggleColorMode}
        />
      </ThemeProvider>

    </>
  )
}
