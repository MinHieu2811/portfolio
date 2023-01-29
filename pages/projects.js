import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbEcommerce from '../public/images/projects/e-commerce/thumb.png'
import thumbChatapp from '../public/images/projects/chatapp/thumb.png'

const Works = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="chatapp" title="Chat App" thumbnail={thumbChatapp}>
            A real-time chat app built-in with NextJs, Firebase
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="ecommerce" title="SolStore" thumbnail={thumbEcommerce}>
            An E-Commerce website built-in with ReactJs, Nodejs, Express
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
