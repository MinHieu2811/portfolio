/* eslint-disable react-hooks/rules-of-hooks */
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  Grid,
  ListItem,
  useColorModeValue,
  chakra,
  GridItem,
  SimpleGrid
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { Tooltip } from '@chakra-ui/react'
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
  IoLogoNodejs,
  IoLogoLinkedin
} from 'react-icons/io5'
import { SiTypescript, SiExpress } from 'react-icons/si'
import { DiMongodb } from 'react-icons/di'
import { SiPrisma } from 'react-icons/si'
import Image from 'next/image'
import styled from '@emotion/styled'
import NextJsIcon from '../components/icons/nextjs'
import FormContact from '../components/form'
import { WorkGridItem } from '../components/grid-item'

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
  const validateTypePlatform = title => {
    const titleString = title.toString()
    if (titleString === 'Github') {
      return <IoLogoGithub />
    } else if (titleString === 'Facebook') {
      return <IoLogoFacebook />
    } else if (titleString === 'Instagram') {
      return <IoLogoInstagram />
    } else if (titleString === 'Google') {
      return <IoLogoGoogle />
    } else if (titleString === 'Linkedin') {
      return <IoLogoLinkedin />
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
          {data?.title}
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              {data?.name}
            </Heading>
            <MotionDiv>
              {data?.animated_para?.map((item, index) => (
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
                src="/images/avatar_ver2.png"
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
            {data?.work?.title}
          </Heading>
          <Paragraph>{data?.work?.content}</Paragraph>

          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button sx={{ margin: '20px auto' }}>
              <Link href="Nguyen_Minh_Hieu_CV.pdf" download>
                Download CV
              </Link>
            </Button>
          </Box>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            {data?.bio?.title}
          </Heading>
          {data?.bio?.content.map((item, index) => (
            <BioSection key={index}>
              <BioYear>{item?.year}</BioYear>
              {item?.event}
            </BioSection>
          ))}
        </Section>

        <Section delay={0.5}>
          <Heading as="h3" variant="section-title">
            {data?.hobby?.title}
          </Heading>
          <Paragraph>{data?.hobby?.content}</Paragraph>
        </Section>

        <Section delay={0.7}>
          <Heading as="h3" variant="section-title">
            {data?.online?.title}
          </Heading>
          <List>
            {data?.online?.content?.map((item, index) => (
              <ListItem key={index}>
                <Link href={item?.link} target="_blank">
                  <Button
                    variant="ghost"
                    colorScheme="teal"
                    leftIcon={validateTypePlatform(item.type)}
                  >
                    {item?.display}
                  </Button>
                </Link>
              </ListItem>
            ))}
          </List>
        </Section>

        <Section delay={0.9}>
          <Heading as="h3" variant="section-title">
            Skills
          </Heading>
          <Box sx={{ display: 'flex', marginBottom: '50px' }}>
            <Grid
              templateColumns="repeat(5, 1fr)"
              gap={6}
              sx={{ width: '100%' }}
            >
              <GridItem
                w="100%"
                h="10"
                bg={useColorModeValue('#f0e7db', '#202023')}
              >
                <Tooltip label="HTML" placement="bottom">
                  <Box display="flex" justifyContent="center">
                    <IoLogoHtml5
                      style={{
                        fontSize: '40px',
                        marginRight: '5px',
                        marginTop: '5px'
                      }}
                    />
                  </Box>
                </Tooltip>
              </GridItem>
              <GridItem
                w="100%"
                h="10"
                bg={useColorModeValue('#f0e7db', '#202023')}
              >
                <Tooltip label="CSS">
                  <Box display="flex" justifyContent="center">
                    <IoLogoCss3
                      style={{
                        fontSize: '40px',
                        marginRight: '5px',
                        marginTop: '5px'
                      }}
                    />
                  </Box>
                </Tooltip>
              </GridItem>
              <GridItem
                w="100%"
                h="10"
                bg={useColorModeValue('#f0e7db', '#202023')}
              >
                <Tooltip label="Javascript">
                  <Box display="flex" justifyContent="center">
                    <IoLogoJavascript
                      style={{
                        fontSize: '40px',
                        marginRight: '5px',
                        marginTop: '5px'
                      }}
                    />
                  </Box>
                </Tooltip>
              </GridItem>
              <GridItem
                w="100%"
                h="10"
                bg={useColorModeValue('#f0e7db', '#202023')}
              >
                <Tooltip label="React">
                  <Box display="flex" justifyContent="center">
                    <IoLogoReact
                      style={{
                        fontSize: '40px',
                        marginRight: '5px',
                        marginTop: '5px'
                      }}
                    />
                  </Box>
                </Tooltip>
              </GridItem>
              <GridItem
                w="100%"
                h="10"
                bg={useColorModeValue('#f0e7db', '#202023')}
              >
                <Tooltip label="NextJs">
                  <Box display="flex" justifyContent="center">
                    <NextJsIcon
                      style={{
                        width: '40px',
                        marginRight: '5px',
                        height: '40px',
                        marginTop: '5px',
                        backgroundColor: '#FFFFFF',
                        borderRadius: '50%',
                        border: '1px solid'
                      }}
                    />
                  </Box>
                </Tooltip>
              </GridItem>
              <GridItem
                w="100%"
                h="10"
                bg={useColorModeValue('#f0e7db', '#202023')}
              >
                <Tooltip label="Prisma">
                  <Box display="flex" justifyContent="center">
                    <SiPrisma
                      style={{
                        fontSize: '40px',
                        marginRight: '5px',
                        marginTop: '5px'
                      }}
                    />
                  </Box>
                </Tooltip>
              </GridItem>
              {/* <GridItem
                w="100%"
                h="10"
                bg={useColorModeValue('#f0e7db', '#202023')}
              >
                <Tooltip label="Postgresql">
                  <Box display="flex" justifyContent="center">
                    <SiPostgresql
                      style={{
                        fontSize: '40px',
                        marginRight: '5px',
                        marginTop: '5px'
                      }}
                    />
                  </Box>
                </Tooltip>
              </GridItem> */}
              <GridItem
                w="100%"
                h="10"
                bg={useColorModeValue('#f0e7db', '#202023')}
              >
                <Tooltip label="Nodejs">
                  <Box display="flex" justifyContent="center">
                    <IoLogoNodejs
                      style={{
                        fontSize: '40px',
                        marginRight: '5px',
                        marginTop: '5px'
                      }}
                    />
                  </Box>
                </Tooltip>
              </GridItem>
              <GridItem
                w="100%"
                h="10"
                bg={useColorModeValue('#f0e7db', '#202023')}
              >
                <Tooltip label="ExpressJs">
                  <Box display="flex" justifyContent="center">
                    <SiExpress
                      style={{
                        fontSize: '40px',
                        marginRight: '5px',
                        marginTop: '5px'
                      }}
                    />
                  </Box>
                </Tooltip>
              </GridItem>
              <GridItem
                w="100%"
                h="10"
                bg={useColorModeValue('#f0e7db', '#202023')}
              >
                <Tooltip label="Mongodb">
                  <Box display="flex" justifyContent="center">
                    <DiMongodb
                      style={{
                        fontSize: '40px',
                        marginRight: '5px',
                        marginTop: '5px'
                      }}
                    />
                  </Box>
                </Tooltip>
              </GridItem>
              {/* <GridItem
                w="100%"
                h="10"
                bg={useColorModeValue('#f0e7db', '#202023')}
              >
                <Tooltip label="Nestjs">
                  <Box display="flex" justifyContent="center">
                    <SiNestjs
                      style={{
                        fontSize: '40px',
                        marginRight: '5px',
                        marginTop: '5px'
                      }}
                    />
                  </Box>
                </Tooltip>
              </GridItem> */}
              <GridItem
                w="100%"
                h="10"
                bg={useColorModeValue('#f0e7db', '#202023')}
              >
                <Tooltip label="Typescript">
                  <Box display="flex" justifyContent="center">
                    <SiTypescript
                      style={{
                        fontSize: '40px',
                        marginRight: '5px',
                        marginTop: '5px'
                      }}
                    />
                  </Box>
                </Tooltip>
              </GridItem>
            </Grid>
          </Box>
        </Section>

        <Section delay={0.11}>
          <Heading as="h3" fontSize={20} mb={5} variant="section-title">
            Projects
          </Heading>

          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            {Object.keys(data?.project)
              ?.slice(2)
              ?.map(item => (
                <Section key={data?.project[item]?.id}>
                  <WorkGridItem
                    id={data?.project[item]?.id}
                    title={data?.project[item]?.title}
                    thumbnail={data?.project[item]?.images[0]}
                  >
                    {data?.project[item]?.shortDesc}
                  </WorkGridItem>
                </Section>
              ))}
          </SimpleGrid>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button sx={{ margin: '5px auto' }}>
              <Link as={NextLink} href="/projects">
                See more
              </Link>
            </Button>
          </Box>
        </Section>

        <Section delay={0.14}>
          <Heading as="h3" variant="section-title">
            Contact Me
          </Heading>
          <FormContact />
        </Section>
      </Container>
    </Layout>
  )
}

export default Home
export { getServerSideProps } from '../components/chakra'
