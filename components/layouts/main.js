import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'
// import { Progress } from '@chakra-ui/react'
// import { useRouter } from 'next/router'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  // const routerObj = useRouter()
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="MinHieu's homepage" />
        <meta name="author" content="MinHieu" />
        <meta name="author" content="vipers" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>MinHieu - Homepage</title>
      </Head>
      {/* {!routerObj.isReady && <Progress value={40} size="sm" colorScheme="green" isIndeterminate/>} */}

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14} >
        <LazyVoxelDog />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
