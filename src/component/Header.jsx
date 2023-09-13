import React from 'react';
import {Link} from 'react-router-dom';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  VStack,
  HStack,
} from '@chakra-ui/react';
import {BiMenuAltLeft} from "react-icons/bi";
// Import useDisclosure from Chakra UI
import { useDisclosure } from '@chakra-ui/react';



function Header() {

    const { isOpen, onOpen, onClose } = useDisclosure();

  return (
  <>
  <Button
  pos={'fixed'}
  top={'1rem'}
  left={'1rem'}
  colorScheme='purple'
  p={'0'}
  w={'10'}
  h={'10'}
  zIndex={`overlay`}
  onClick={onOpen}
  borderRadius={'full'}>
    <BiMenuAltLeft size={20} />
  </Button>
  <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
    <DrawerOverlay/>

    <DrawerContent>
        <DrawerCloseButton />
      <DrawerHeader>ReelRover</DrawerHeader>
      <DrawerBody>
        <VStack alignItems={'flex-start'}>
        <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
            <Link to='/'>Home</Link>
          </Button> 
          <Button onClick={onClose}  variant={'ghost'} colorScheme='purple'>
            <Link to='/Videos'>Videos</Link>
          </Button> 
          <Button onClick={onClose}  variant={'ghost'} colorScheme='purple'>
            <Link to='/Videos?category=free'>free Videos</Link>
          </Button> 
          <Button onClick={onClose}  variant={'ghost'} colorScheme='purple'>
            <Link to='/Upload'>Upload Video</Link>
          </Button> 
        </VStack>
        <HStack pos={'fixed'} bottom={'10'} w={'full'} >  
          <Button onClick={onClose}  variant={'solid'} colorScheme='blue'>
            <Link to='/Login'>Login</Link>
          </Button> 
          <Button onClick={onClose}  variant={'outline'} colorScheme='blue'>
            <Link to='/SignUp'>Sign Up</Link>
          </Button>
        </HStack>
        </DrawerBody>
    </DrawerContent>




  </Drawer>

  </>
  );
}

export default Header;
