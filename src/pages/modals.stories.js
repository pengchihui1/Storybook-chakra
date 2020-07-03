import React, { useState } from 'react'
import {
  Button, ThemeProvider, Modal, Switch, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useColorMode, useDisclosure
} from '@chakra-ui/core'
import { App } from '../../App'
import { Container } from '../../components/cometainer'
import { DarkModeSwitch } from '../../components/Swich'

export default { title: 'Chakra-modal' }

export const BasicUsage = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <App>
        <Container>
          <Button onClick={onOpen}>Open Modal</Button>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Modal Title</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                黑色乔布斯
              </ModalBody>

              <ModalFooter>
                <Button variantColor='blue' mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button variant='ghost'>Secondary Action</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

          <DarkModeSwitch />
        </Container>
      </App>
    </>
  )
}
