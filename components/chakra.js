import {
  ChakraProvider,
  cookieStorageManagerSSR,
  localStorageManager
} from '@chakra-ui/react'
// import path from "path";
// import { promises as fs } from "fs";
import theme from '../lib/theme'
import axios from 'axios'

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
  const dataFetch = await axios.get('http://localhost:3000/api/data').then((res) => res?.data)
  console.log(dataFetch);
  return {
    props: {
      data: dataFetch,
      cookies: req.headers.cookie ?? ''
    }
  }
}
