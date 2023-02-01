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

const Home = () => (
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
        Hello, I&apos;m an Front-end developer based in Vietnam!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            MinHieu
          </Heading>
          <MotionDiv>
            <MotionPara bg={useColorModeValue('#f0e7db', '#202023')}>
              Front-end Developer with NextJs
            </MotionPara>
            <MotionPara bg={useColorModeValue('#f0e7db', '#202023')}>
              Back-end Developer with NodeJs & Express
            </MotionPara>
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
          Work
        </Heading>
        <Paragraph>
          I am a junior at Hanoi University and a front-end developer with a
          passion for building responsive websites. I have a knack for all
          things, from planning and designing all the way to solving real-life
          problems with code. I have 1 year experience with React, 5 months with
          NextJs and basic knowledge of SEO, Boostrap, Git, RestfulAPI
        </Paragraph>

        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button sx={{ margin: '20px auto' }}>
            <Link href='cv.pdf' download>Download CV</Link>
          </Button>
        </Box>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2002</BioYear>
          Born in Hanoi.
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Begin study at Hanoi University
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Intern Front-end developer in Crossian LLC
        </BioSection>
      </Section>

      <Section delay={0.5}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Music, reading, story writing, football, exploring the latest
          technology and theatre may all be hobbies. Interestingly, one person’s
          profession may be another person’s hobby. For instance, one could be a
          professional flautist, but for another playing the flute could be a
          hobby. A hobby is a fun activity that is pursued during one’s leisure
          hours.
        </Paragraph>
      </Section>

      <Section delay={0.7}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/MinHieu2811" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                MinHieu2811
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.facebook.com/profile.php?id=100009415518368"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoFacebook />}
              >
                Minh Hieu
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.instagram.com/mihh_hieeus2811/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                mihh_hieeus2811
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="mailto:cuunhatnhat51@gmail.com" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGoogle />}
              >
                cuunhatnhat51@gmail.com
              </Button>
            </Link>
          </ListItem>
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
              style={{ fontSize: '32px', marginRight: '5px', marginTop: '5px' }}
            />
            <IoLogoCss3
              style={{ fontSize: '32px', marginRight: '5px', marginTop: '5px' }}
            />
            <IoLogoJavascript
              style={{ fontSize: '32px', marginRight: '5px', marginTop: '5px' }}
            />
            <IoLogoReact
              style={{ fontSize: '32px', marginRight: '5px', marginTop: '5px' }}
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
              style={{ fontSize: '32px', marginRight: '5px', marginTop: '5px' }}
            />
            <MongoDBIcon
              style={{ width: '32px', marginRight: '5px', marginTop: '5px' }}
            />
            <DiJava
              style={{ fontSize: '32px', marginRight: '5px', marginTop: '5px' }}
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

export default Home
export { getServerSideProps } from '../components/chakra'
