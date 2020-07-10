import React, { useState,useRef } from 'react'
import {
  Button, ThemeProvider, Modal, Switch, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useColorMode, useDisclosure,Lorem,Box,finalRef
} from '@chakra-ui/core'
import { App } from '../../App'
import { Container } from '../../components/cometainer'
import { DarkModeSwitch } from '../../components/Swich'
import { DarkModeButton } from '../../components/Button'

export default { title: 'Chakra-modal' }
//弹窗加黑暗按钮
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
          <DarkModeButton />
          <DarkModeSwitch />
        </Container>
      </App>
    </>
  )
}

//打开协议
export const ModalOpenAgreement = () => {
	 const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <ThemeProvider>
       <Button onClick={onOpen}>Open Modal</Button>

				<Modal isOpen={isOpen} onClose={onClose}>
					<ModalOverlay />
					<ModalContent>
						<ModalHeader>Modal Title</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							<Lorem count={2} />
						</ModalBody>

						<ModalFooter>
							<Button variantColor="blue" mr={3} onClick={onClose}>
								Close
							</Button>
							<Button variant="ghost">Secondary Action</Button>
						</ModalFooter>
					</ModalContent>
				</Modal>
      </ThemeProvider>
    </>
  )
}
//打开协议
export const ModalButtonAgreement= () => {
	 const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <ThemeProvider>
       <Box ref={finalRef} tabIndex={-1} aria-label="Focus moved to this box">
        Some other content that'll receive focus on close.
      </Box>

      <Button mt={4} onClick={onOpen}>
        Open Modal
      </Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Lorem count={2} />
          </ModalBody>

          <ModalFooter>
            <Button variantColor="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </ThemeProvider>
    </>
  )
}
