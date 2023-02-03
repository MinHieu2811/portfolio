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
import { Pagination } from 'swiper'
import Layout from '../../components/layouts/article'
import { Swiper, SwiperSlide } from 'swiper/react'
import { MdSettings } from 'react-icons/md'
import Image from 'next/image'
import NextLink from 'next/link'
import 'swiper/css'
import { IoLogoGithub } from 'react-icons/io5'
import { useRouter } from 'next/router'
import 'swiper/css/pagination';
import data from '../../lib/data'

const Ecommerce = () => {
  const router = useRouter()
  const id = router.query.id

  const dataProject = data.project[id]
  return (
    <Layout title="Projects">
      <Container sx={{ minHeight: '50vh' }}>
        <Box>
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            pagination={{clickable: true}}
            slidesPerView={1}
            loop
            style={{ margin: '30px 0px' }}
          >
            {dataProject && dataProject.images.map((item, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={item}
                  alt="slide1"
                  width={500}
                  height={300}
                  placeholder="blur"
                  blurDataURL="/thumb.png"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
        <Box>
          <Heading as="h2" noOfLines={1}>
            {dataProject && dataProject.title}
          </Heading>
          <Text fontSize="md" marginY={2}>
            {dataProject && dataProject.description}
          </Text>
          <LinkBox
            as={NextLink}
            href={dataProject ? dataProject.linkGithub : '#'}
            target="_blank"
            scroll={false}
            cursor="pointer"
            sx={{ margin: 'auto' }}
          >
            <LinkOverlay as="div" href={dataProject ? dataProject.linkGithub : '#'} target="_blank">
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
          <List spacing={2} sx={{ marginY: '20px' }}>
            <Heading as="h4" fontSize="lg">
              Technology:
            </Heading>
            <ListItem>
              <ListIcon as={MdSettings} />
              Front-end:{' '}
              {dataProject && dataProject.technology.frontend.length > 1 ? (
                <span>{dataProject.technology.frontend.join(', ')}</span>
              ) : (
                dataProject && dataProject.technology.frontend.map((item, index) => (
                  <span key={index}>{item}</span>
                ))
              )}
            </ListItem>
            <ListItem>
              <ListIcon as={MdSettings} />
              Back-end:{' '}
              {dataProject && dataProject.technology.backend.length > 1 ? (
                <span>{dataProject.technology.backend.join(', ')}</span>
              ) : (
                dataProject && dataProject.technology.backend.map((item, index) => (
                  <span key={index}>{item}</span>
                ))
              )}
            </ListItem>
            <ListItem>
              <ListIcon as={MdSettings} />
              Database:{' '}
              <span>{dataProject && dataProject.technology.database.join(', ')}</span>
            </ListItem>
          </List>
        </Box>
      </Container>
    </Layout>
  )
}

export default Ecommerce
export { getServerSideProps } from '../../components/chakra'
