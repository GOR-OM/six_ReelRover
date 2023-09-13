import React from 'react'
import { Box,Image,Heading,Text,Container,Stack } from '@chakra-ui/react'
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import img1 from '../asseates/1.jpg' 
import img2 from '../asseates/2.jpg' 
import img3 from '../asseates/3.jpg' 
import img4 from '../asseates/4.jpg' 
import img5 from '../asseates/5.png'   

const headingOptions = {
    pos: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    textTransform: 'uppercase',
    p: '4',
    size: '4xl',
  };

const Home = () => {
  return (
    <Box>
        <MyCarosel/>
        <Container maxW={'container.xl'} minH={'100vh'} p="16">
        <Heading
          textTransform={'uppercase'}
          py="2"
          w={'fit-content'}
          borderBottom={'2px solid'}
          m="auto"
        >
          Services
        </Heading>

        <Stack
          h="full"
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />

          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
            fontFamily={'cursive'}
          >
            At ReelRover, our commitment is to enhance your video-watching experience by offering a diverse range of services. We pride ourselves on helping you discover videos that match your interests through our intuitive search and recommendation algorithms. Create personalized playlists to organize your favorite videos, making it simple to revisit content for different moods or occasions. Engage with a thriving community of video enthusiasts and creators, share your thoughts, and collaborate with others who share your passion.

Sharing your favorite videos is effortless with our platform - spread the joy of discovery with friends and followers on social media. We prioritize high-quality streaming, ensuring that you experience every detail and nuance in your chosen content. Our user-friendly interface caters to both beginners and seasoned viewers, making navigation a breeze. The platform's personalized features tailor your feed and recommendations, learning from your preferences to serve you better. For an uninterrupted viewing experience, consider upgrading to our premium or ad-free subscription plans.

          </Text>
        </Stack>
      </Container>

    </Box>

  )
}

const MyCarosel =()=>(
    <Carousel
    autoPlay
    infiniteLoop
    interval={5000}
    showStatus={false}
    showThumbs={false}
    
    
  >
    <Box w="full" h={'100vh'}>
      <Image src={img1} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch The Future
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img2} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
        Future is Gaming
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img3} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Gaming on Console
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img4} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Night life is cool
      </Heading>
    </Box>
  </Carousel>

)

export default Home