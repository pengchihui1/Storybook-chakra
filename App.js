import React from 'react'
// import { ColorModeProvider } from '@chakra-ui/color-mode'
import { ThemeProvider, theme, CSSReset, ColorModeProvider } from '@chakra-ui/core'
export const App = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <CSSReset />
          {children}
        </ColorModeProvider>
      </ThemeProvider>
    </>
  )
}
