import * as React from "react"
import Layout from "../components/layout";
import { graphql } from "gatsby"

export default function Single ({data}) {
  const post = data.allWpPost.edges[0].node

  return (
    <Layout>
        <h1>{post.title}</h1>
        <img src={post.featuredImage.node.sourceUrl} />
        <p dangerouslySetInnerHTML={{ __html: post.content }}></p>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          slug
          title
          content
          excerpt
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }  
  }
`