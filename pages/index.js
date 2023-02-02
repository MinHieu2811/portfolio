/* eslint-disable react-hooks/rules-of-hooks */
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  Progress,
  ListItem,
  useColorModeValue,
  chakra,
  Stack
} from '@chakra-ui/react'
// import axios from 'axios'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoFacebook,
  IoLogoGoogle,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoReact,
  IoLogoJavascript,
  IoLogoNodejs
} from 'react-icons/io5'
import { DiJava } from 'react-icons/di'
import Image from 'next/image'
import styled from '@emotion/styled'
import NextJsIcon from '../components/icons/nextjs'
import MongoDBIcon from '../components/icons/mongoDb'
import FormContact from '../components/form'
import TechSlider from '../components/slider'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const MotionDiv = styled.div`
  height: 22px;
  line-height: 20px;
  overflow: hidden;
`

const MotionPara = styled('div')`
  display: inline-block;
  font-size: 15px;
  position: relative;
  top: 0;
  animation: slide 12s steps(2) infinite;
  :first-of-type {
    margin-bottom: 2px;
  }
  @keyframes slide {
    100% {
      top: -42px;
    }
  }

  ::after {
    content: '';
    position: absolute;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${props => props.bg};
    /* background: transparent; */
    border-left: 2px solid;
    animation: typing 6s steps(40) infinite;
  }

  @keyframes typing {
    100% {
      left: 100%;
      margin: 0 -10px 0 10px;
    }
  }
`

const Home = ({ data }) => {
  const validateTypePlatform = (title) => {
    const titleString = title.toString()
    if(titleString === 'Github') {
      return <IoLogoGithub />
    } else if(titleString === 'Facebook') {
      return <IoLogoFacebook />
    } else if(titleString === 'Instagram') {
      return <IoLogoInstagram />
    } else if(titleString === 'Google') {
      return <IoLogoGoogle />
    }
  }
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          {data.title}
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              {data.name}
            </Heading>
            <MotionDiv>
              {data.animated_para.map((item, index) => (
                <MotionPara
                  bg={useColorModeValue('#f0e7db', '#202023')}
                  key={index}
                >
                  {item}
                </MotionPara>
              ))}
            </MotionDiv>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <ProfileImage
                src="/images/avatar.jpg"
                alt="Profile image"
                borderRadius="full"
                width="100"
                height="100"
              />
            </Box>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            {data.work.title}
          </Heading>
          <Paragraph>{data.work.content}</Paragraph>

          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button sx={{ margin: '20px auto' }}>
              <Link href="cv.pdf" download>
                Download CV
              </Link>
            </Button>
          </Box>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            {data.bio.title}
          </Heading>
          {data.bio.content.map((item, index) => (
            <BioSection key={index}>
              <BioYear>{item.year}</BioYear>
              {item.event}
            </BioSection>
          ))}
        </Section>

        <Section delay={0.5}>
          <Heading as="h3" variant="section-title">
            {data.hobby.title}
          </Heading>
          <Paragraph>
            {data.hobby.content}
          </Paragraph>
        </Section>

        <Section delay={0.7}>
          <Heading as="h3" variant="section-title">
            {data.online.title}
          </Heading>
          <List>
          {data.online.content.map((item, index) => (
            <ListItem key={index}>
            <Link href={item.link} target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={validateTypePlatform(item.type)}
              >
                {item.display}
              </Button>
            </Link>
          </ListItem>
          ))}
          </List>
        </Section>

        <TechSlider />

        <Section delay={0.9}>
          <Heading as="h3" variant="section-title">
            Skills
          </Heading>
          <Box sx={{ display: 'flex', marginBottom: '50px' }}>
            <Box sx={{ flex: 2 }}>
              <IoLogoHtml5
                style={{
                  fontSize: '32px',
                  marginRight: '5px',
                  marginTop: '5px'
                }}
              />
              <IoLogoCss3
                style={{
                  fontSize: '32px',
                  marginRight: '5px',
                  marginTop: '5px'
                }}
              />
              <IoLogoJavascript
                style={{
                  fontSize: '32px',
                  marginRight: '5px',
                  marginTop: '5px'
                }}
              />
              <IoLogoReact
                style={{
                  fontSize: '32px',
                  marginRight: '5px',
                  marginTop: '5px'
                }}
              />
              <NextJsIcon
                style={{
                  width: '32px',
                  marginRight: '5px',
                  marginTop: '5px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '50%',
                  border: '1px solid'
                }}
              />
              <IoLogoNodejs
                style={{
                  fontSize: '32px',
                  marginRight: '5px',
                  marginTop: '5px'
                }}
              />
              <MongoDBIcon
                style={{ width: '32px', marginRight: '5px', marginTop: '5px' }}
              />
              <DiJava
                style={{
                  fontSize: '32px',
                  marginRight: '5px',
                  marginTop: '5px'
                }}
              />
            </Box>
            <Box sx={{ flex: 10 }}>
              <Stack
                sx={{
                  height: '32px',
                  justifyContent: 'center',
                  marginTop: '5px'
                }}
              >
                <Progress colorScheme="green" size="sm" value={80} />
              </Stack>
              <Stack
                sx={{
                  height: '32px',
                  justifyContent: 'center',
                  marginTop: '5px'
                }}
              >
                <Progress colorScheme="green" size="sm" value={70} />
              </Stack>
              <Stack
                sx={{
                  height: '32px',
                  justifyContent: 'center',
                  marginTop: '5px'
                }}
              >
                <Progress colorScheme="green" size="sm" value={75} />
              </Stack>
              <Stack
                sx={{
                  height: '32px',
                  justifyContent: 'center',
                  marginTop: '5px'
                }}
              >
                <Progress colorScheme="green" size="sm" value={70} />
              </Stack>
              <Stack
                sx={{
                  height: '32px',
                  justifyContent: 'center',
                  marginTop: '5px'
                }}
              >
                <Progress colorScheme="green" size="sm" value={70} />
              </Stack>
              <Stack
                sx={{
                  height: '32px',
                  justifyContent: 'center',
                  marginTop: '5px'
                }}
              >
                <Progress colorScheme="green" size="sm" value={50} />
              </Stack>
              <Stack
                sx={{
                  height: '32px',
                  justifyContent: 'center',
                  marginTop: '5px'
                }}
              >
                <Progress colorScheme="green" size="sm" value={50} />
              </Stack>
              <Stack
                sx={{
                  height: '32px',
                  justifyContent: 'center',
                  marginTop: '5px'
                }}
              >
                <Progress colorScheme="green" size="sm" value={50} />
              </Stack>
            </Box>
          </Box>
        </Section>

        <Section delay={0.11}>
          <Heading as="h3" variant="section-title">
            Contacts Me
          </Heading>
          <FormContact />
        </Section>
      </Container>
    </Layout>
  )
}

export default Home
export { getServerSideProps } from '../components/chakra'
