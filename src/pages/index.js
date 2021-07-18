import * as React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby";

const IndexPage = ({data}) => (
  <Layout>
    {data.allWpPost.edges.map(({ node }) => (
      <>
        <a href={node.slug}>
          <h2>{node.title}</h2>
        </a>
      </>
    ))}
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    allWpPost(sort: { fields: [date] }, limit: 6) {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`

