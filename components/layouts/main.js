import Head from 'next/head'
import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'
import NavBar from '../navbar'
import { Box, Container, Button } from '@chakra-ui/react'
import { Tooltip } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'
import { AiOutlineArrowUp } from 'react-icons/ai'
import 'nprogress/nprogress.css'
import {
  useToggleBackground,
  BackgroundProvider
} from '../../context/toggleBackground'
import { useCheckMobile } from '../../hooks/useCheckMobile'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const LazyBackground = dynamic(() => import('../background'), {
  ssr: false
})

NProgress.configure({ easing: 'ease', speed: 500 })

const Main = ({ children, router }) => {
  const routerObj = useRouter()
  const [visible, setVisible] = useState(false)
  // const [initial, syncedState] = useSyncedState(false)
  const { isVisible } = useToggleBackground()

  useEffect(() => {
    routerObj.events.on('routeChangeStart', () => {
      NProgress?.start()
    })

    routerObj.events.on('routeChangeComplete', () => {
      NProgress.done(false)
    })

    routerObj.events.on('beforeHistoryChange', url => {
      console.log('history changing to ', url)
    })

    return () => {
      routerObj.events.off('routeChangeStart', () => {})
      routerObj.events.off('routeChangeComplete', () => {})
    }
  }, [routerObj])

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrolled = document.documentElement.scrollTop

      if (scrolled > 300) {
        setVisible(true)
      } else if (scrolled <= 300) {
        setVisible(false)
      }
    })
  }, [])

  const handleScrollTop = () => {
    if (typeof window !== 'undefined') {
      window?.scrollTo({ left: 0, top: 0, behavior: 'smooth' })
    }
  }
  const isMobile = useCheckMobile()

  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="MinHieu's homepage" />
        <meta name="author" content="MinHieu" />
        <meta name="author" content="vipers" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>MinHieu</title>
      </Head>
      <BackgroundProvider>
        <NavBar path={router.asPath} />
        <LazyBackground visible={isVisible} />

        <Container maxW="container.md" pt={14}>
          <LazyVoxelDog />
          {children}

          <Box
            display={isMobile ? 'none' : 'flex'}
            justifyContent="center"
            position="fixed"
            width="50px"
            height="50px"
            bottom={visible ? '100px' : '110vh'}
            right="100px"
            borderRadius="full"
            transition="all 0.4s ease-in-out"
          >
            <Tooltip label="Scroll to top">
              <Button onClick={handleScrollTop}>
                <AiOutlineArrowUp />
              </Button>
            </Tooltip>
          </Box>

          <Footer />
        </Container>
      </BackgroundProvider>
    </Box>
  )
}

export default Main
