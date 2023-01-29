import {
    Box,
    Container,
    Heading,
    ListItem,
    List,
    Text,
    LinkBox,
    LinkOverlay,
    Button,
    ListIcon
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { Swiper, SwiperSlide } from 'swiper/react'
  import { MdSettings } from 'react-icons/md'
  import ImageSlide1 from '../../public/images/projects/chatapp/thumb.png'
  import ImageSlide3 from '../../public/images/projects/chatapp/messages.png'
  import ImageSlide4 from '../../public/images/projects/chatapp/login.png'
  import ImageSlide5 from '../../public/images/projects/chatapp/conversation2.png'
  import ImageSlide6 from '../../public/images/projects/chatapp/conversation.png'
  import Image from 'next/image'
  import NextLink from 'next/link'
  import 'swiper/css'
  import { IoLogoGithub } from 'react-icons/io5'
  
  const Ecommerce = () => (
    <Layout title="Projects">
      <Container sx={{ minHeight: '50vh' }}>
        <Box>
          <Swiper
            //  modules={[Autoplay]}
            spaceBetween={20}
            // centeredSlides
            slidesPerView={1}
            loop
            style={{ margin: '30px 0px' }}
          >
            <SwiperSlide>
              <Image
                src={ImageSlide1}
                alt="slide1"
                width={500}
                placeholder="blur"
                blurDataURL="/public/thumb.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={ImageSlide3}
                alt="slide1"
                placeholder="blur"
                width={500}
                blurDataURL="/public/thumb.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={ImageSlide4}
                alt="slide1"
                width={500}
                placeholder="blur"
                blurDataURL="/public/thumb.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={ImageSlide5}
                alt="slide1"
                width={500}
                placeholder="blur"
                blurDataURL="/public/thumb.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={ImageSlide6}
                alt="slide1"
                width={500}
                placeholder="blur"
                blurDataURL="/public/thumb.png"
              />
            </SwiperSlide>
          </Swiper>
        </Box>
        <Box>
          <Heading as="h2" noOfLines={1}>
            WhatsApp
          </Heading>
          <Text fontSize="md" marginY={2}>
            A real-time chatapp built-in with NextJs and Firebase. User can login, create new conversation, chat and search users
          </Text>
          <LinkBox as={NextLink} href="https://github.com/MinHieu2811/chat-app" target="_blank" scroll={false} cursor="pointer" sx={{margin: "auto"}}>
            <LinkOverlay
              as="div"
              href={`https://github.com/MinHieu2811/chat-app`}
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
                sx={{ alignItems: 'flex-start' }}
              >
                <Text mt={2} fontSize={20} sx={{ alignContents: 'center' }}>
                  Link to my Github
                </Text>
              </Button>
            </LinkOverlay>
          </LinkBox>
          <List spacing={2} sx={{marginY: '20px'}}>
              <Heading as="h4" fontSize="lg">Technology:</Heading>
            <ListItem>
              <ListIcon as={MdSettings} />
              Front-end: NextJs
            </ListItem>
            <ListItem>
              <ListIcon as={MdSettings} />
              Back-end: NextJs 
            </ListItem>
            <ListItem>
              <ListIcon as={MdSettings} />
              Database: Firebase 
            </ListItem>
          </List>
        </Box>
      </Container>
    </Layout>
  )
  
  export default Ecommerce
  export { getServerSideProps } from '../../components/chakra'
  