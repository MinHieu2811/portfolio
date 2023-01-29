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
import ImageSlide1 from '../../public/images/projects/e-commerce/banner.png'
import ImageSlide3 from '../../public/images/projects/e-commerce/category.png'
import ImageSlide4 from '../../public/images/projects/e-commerce/collections.png'
import ImageSlide5 from '../../public/images/projects/e-commerce/product.png'
import ImageSlide6 from '../../public/images/projects/e-commerce/thumb.png'
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
          SolStore
        </Heading>
        <Text fontSize="md" marginY={2}>
          An E-Commerce website built-in with ReactJs, NodeJs, Express and
          MongoDB. Customer can add to cart, add to wishlist, checkout order,
          and review. About admin, they can create, update, delete products,
          manage orders.{' '}
        </Text>
        <LinkBox as={NextLink} href="https://github.com/MinHieu2811/fullstack-ecommerce" target="_blank" scroll={false} cursor="pointer" sx={{margin: "auto"}}>
          <LinkOverlay
            as="div"
            href={`https://github.com/MinHieu2811/fullstack-ecommerce`}
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
            Front-end: React Router v6, Redux, Redux Thunk, Framer Motion
          </ListItem>
          <ListItem>
            <ListIcon as={MdSettings} />
            Back-end: Basic JWT Authentication & Authorization, Nodejs, Express
          </ListItem>
          <ListItem>
            <ListIcon as={MdSettings} />
            Database: MongoDB
          </ListItem>
        </List>
      </Box>
    </Container>
  </Layout>
)

export default Ecommerce
export { getServerSideProps } from '../../components/chakra'
