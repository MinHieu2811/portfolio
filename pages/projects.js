import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

// import thumbEcommerce from '../public/images/projects/e-commerce/thumb.png'
// import thumbChatapp from '../public/images/projects/chatapp/thumb.png'

const Works = ({ data }) => {
  return (
    <Layout title="Projects">
      <Container>
        <Heading as="h3" fontSize={20} mb={4} variant="section-title">
          Projects
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          {Object.keys(data?.project)?.map((item) => (
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
      </Container>
    </Layout>
  )
}

export default Works
export { getServerSideProps } from '../components/chakra'
