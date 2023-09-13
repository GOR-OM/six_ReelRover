import React from 'react'
import {Box,Button,HStack,Heading,Input,Stack, VStack , Text} from '@chakra-ui/react'
import {AiOutlineSend} from  'react-icons/ai'

const Footer = () => {
  return (
    <Box backgroundColor={'blackAlpha.900'}  minH={'40'} color={"white"}> 
    <Stack direction={['column', 'row']}>
    <VStack alignItems={'stretch'} w={'full'} px={"2"}> 
        <Heading size={'md'} p={'4'} textAlign={['center','left']} >
        Subscribe to our Channle
        </Heading>
        <HStack borderBottom={'2px solid white'}
        p={'2'}> 
        <Input placeholder='Enter your Email..' borderRadius={'none'} border={'none'} outline={'none'} focusBorderColor='none' />
        <Button colorScheme='purple' variant={'ghost'} p={'4'}>
        <AiOutlineSend size={'25'} />
        </Button>
        </HStack>
    </VStack>
    <VStack 
    w={'full'}
    borderLeft={['none' , '1px solid white']}
    borderRight={['none' , '1px solid white']}>
        <Heading>
        ReelRover
        </Heading>
        <Text py={'5'}>  
        © 2023 ReelRover. All Rights Reserved.
        </Text>
       
    </VStack>
   
    <VStack 
    w={'full'}
   >
     <Heading size={"md"} p={'3'}>
        Socialmedia 
    </Heading>
    <Button color={'white'} variant={'link'}>
        <a href="https://www.youtube.com/">Youtube</a>
    </Button>
    <Button color={'white'} variant={'link'}>
        <a href="https://www.instagram.com/om_3.1415926536/">Instagram</a>
    </Button>
    <Button color={'white'} variant={'link'}>
        <a href="https://www.linkedin.com/in/om-gor">Linkdin</a>
    </Button>
    <Button color={'white'} variant={'link'}>
        <a href="https://github.com/GOR-OM">Github</a>
    </Button>
       
    </VStack>
    </Stack>
    </Box>
  )
}

export default Footer