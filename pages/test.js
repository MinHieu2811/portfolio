/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { Container } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import dynamic from 'next/dynamic'

const LazyBackground = dynamic(() => import('../components/background'))

const Test = () => {
  return (
    <Layout>
      <Container>
        <LazyBackground />
      </Container>
    </Layout>
  )
}

export default Test
export { getServerSideProps } from '../components/chakra'
