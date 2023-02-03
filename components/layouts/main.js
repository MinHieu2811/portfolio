import Head from 'next/head'
import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'
// import { Progress } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const StyledLoading = styled('div')`
  height: 5px;
  position: relative;
  overflow: hidden;

  ::after {
    content: '';
    position: absolute;
    display: block;
    width: ${(props) => props.width};
    background: ${(props) => props.bg};
    height: 5px;
    top: 0;
    left: 0;
  }
`

const Main = ({ children, router }) => {
  const routerObj = useRouter()

  const [routeIsChanging, setRouteIsChanging] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    routerObj.events.on('routeChangeStart', (url) => {
      console.log(url);
      setRouteIsChanging(true);
    });

    routerObj.events.on('routeChangeComplete', () => {
      setRouteIsChanging(false);
    });

    routerObj.events.on('beforeHistoryChange', (url) => {
      console.log('history changing to ', url);
    });

    return () => {
      routerObj.events.off('routeChangeStart', () => {
        setRouteIsChanging(false);
      });
      routerObj.events.off('routeChangeComplete', () => {});
    };
  }, [routerObj]);

  useEffect(() => {
    if (routeIsChanging) {
      let timer = setInterval(() => {
        if (progress >= 97 && progress <= 99)
          setProgress((_progress) => _progress - 5);
        else setProgress((_progress) => _progress + 1);
      }, 50);

      return () => {
        clearInterval(timer);
      };
    } else {
      setProgress(0);
    }
  }, [progress, routeIsChanging]);
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
      {routeIsChanging && <StyledLoading width={`${progress * 10}%`} bg={`green`}/>}
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
