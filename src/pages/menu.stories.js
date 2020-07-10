import React from 'react'
import { 
  Button,
  ThemeProvider, 
  ButtonGroup,
  Box,
  Grid ,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  MenuOptionGroup,
  MenuItemOption,
  Image
} from '@chakra-ui/core'

export default { title: 'Chakra-Menu' }


//当选列表
export const MenuOneSelect = () => {
  return (
    <>
      <ThemeProvider>
       <Menu>
		  <MenuButton as={Button} rightIcon="chevron-down">
			Actions
		  </MenuButton>
		  <MenuList>
			<MenuItem>Download</MenuItem>
			<MenuItem>Create a Copy</MenuItem>
			<MenuItem>Mark as Draft</MenuItem>
			<MenuItem>Delete</MenuItem>
			<MenuItem as="a" href="#">
			  Attend a Workshop
			</MenuItem>
		  </MenuList>
	  </Menu>
      </ThemeProvider>
    </>
  )
}
//选择头像
export const MenuSelectImg = () => {
  return (
    <>
      <ThemeProvider>
       <Menu>
		  <MenuButton as={Button} rightIcon="chevron-down">
			Your Cats
		  </MenuButton>
		  <MenuList>
			<MenuItem minH="48px">
			  <Image
				size="2rem"
				rounded="full"
				src="https://placekitten.com/100/100"
				alt="Fluffybuns the destroyer"
				mr="12px"
			  />
			  <span>Fluffybuns the Destroyer</span>
			</MenuItem>
			<MenuItem minH="40px">
			  <Image
				size="2rem"
				rounded="full"
				src="https://placekitten.com/120/120"
				alt="Simon the pensive"
				mr="12px"
			  />
			  <span>Simon the pensive</span>
			</MenuItem>
		  </MenuList>
		</Menu>
      </ThemeProvider>
    </>
  )
}
//选择文件
export const MenuSelectFile = () => {
  return (
    <>
      <ThemeProvider>
       <Menu>
		  <MenuButton as={Button} variantColor="pink">
			Profile
		  </MenuButton>
		  <MenuList>
			<MenuGroup title="Profile">
			  <MenuItem>My Account</MenuItem>
			  <MenuItem>Payments </MenuItem>
			</MenuGroup>
			<MenuDivider />
			<MenuGroup title="Help">
			  <MenuItem>Docs</MenuItem>
			  <MenuItem>FAQ</MenuItem>
			</MenuGroup>
		  </MenuList>
		</Menu>
      </ThemeProvider>
    </>
  )
}