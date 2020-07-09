import React from 'react'
import { Button, ThemeProvider, ButtonGroup, Box,MdBuild,MdCall } from '@chakra-ui/core'

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
// 一个绿色按钮 
export const buttonOneGreen=()=>{
  return (
	 <ThemeProvider>
	     <Button variantColor="green">Button</Button>
	 </ThemeProvider>
	)
}
// 蓝色按钮组 Group
export const buttonDifferent=()=>{
  return (
	 <ThemeProvider>
	    <ButtonGroup spacing={10}>
				<Button variantColor="teal" size="xs">
					Button
				</Button>
				<Button variantColor="teal" size="sm">
					Button
				</Button>
				<Button variantColor="teal" size="md">
					Button
				</Button>
				<Button variantColor="teal" size="lg">
					Button
				</Button>
			</ButtonGroup>
	 </ThemeProvider>
	)
}
// 不同效果的按钮组
export const buttonDifferentEffect=()=>{
  return (
	 <ThemeProvider>
	    <ButtonGroup spacing={4}>
				<Button variantColor="teal" variant="solid">
					Button
				</Button>
				<Button variantColor="teal" variant="outline">
					Button
				</Button>
				<Button variantColor="teal" variant="ghost">
					Button
				</Button>
				<Button variantColor="teal" variant="link">
					Button
				</Button>
			</ButtonGroup>
	 </ThemeProvider>
	)
}
// email图标按钮  前进按钮  左右位置
export const buttonGoForward=()=>{
  return (
	 <ThemeProvider>
	  <ButtonGroup spacing={4}>
				<Button leftIcon="email" variantColor="teal" variant="solid">
					Email
				</Button>
				<Button rightIcon="arrow-forward" variantColor="teal" variant="outline">
					Call us
				</Button>
   </ButtonGroup>
	 </ThemeProvider>
	)
}

//设置  电话  按钮  左右位置
export const buttonPhoneSetting=()=>{
  return (
	 <ThemeProvider>
	 <ButtonGroup spacing={4}>
  <Button leftIcon={MdBuild} variantColor="pink" variant="solid">
    Settings
  </Button>
  <Button rightIcon={MdCall} variantColor="blue" variant="outline">
    Call us
  </Button>
</ButtonGroup>
	 </ThemeProvider>
	)
}

//提交加载
export const buttonSubmitLoading=()=>{
  return (
	 <ThemeProvider>
				<ButtonGroup spacing={4}>
				<Button isLoading variantColor="teal" variant="solid">
					Email
				</Button>
				<Button
					isLoading
					loadingText="Submitting"
					variantColor="teal"
					variant="outline"
				>
					Submit
				</Button>
			</ButtonGroup>
	 </ThemeProvider>
	)
}