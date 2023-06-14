import {
  ChakraProvider,
  cookieStorageManagerSSR,
  localStorageManager
} from '@chakra-ui/react'
// import path from "path";
// import { promises as fs } from "fs";
import theme from '../lib/theme'
// import axios from 'axios'

export default function Chakra({ cookies, children }) {
  const colorModeManager =
    typeof cookies === 'string'
      ? cookieStorageManagerSSR(cookies)
      : localStorageManager

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  )
}

export async function getServerSideProps({ req }) {
  const data = await import('../public/data/data.json')
  const dataParsed = JSON.parse(JSON.stringify(data))
  return {
    props: {
      data: dataParsed,
      cookies: req.headers.cookie ?? ''
    }
  }
}
