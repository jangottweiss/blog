import React from "react"
import { graphql } from "gatsby"

import BlogMain from '../components/BlogMain';

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const site = data.site;
    const posts = data.allMdx.edges;

    return (
      <BlogMain
        site={site}
        posts={posts}
      ></BlogMain>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description            
            categories
            tags
            slug
            image {
              childImageSharp {
                fluid(
                  maxWidth: 450,
                  maxHeight: 300) {
                  ...GatsbyImageSharpFluid
                }
                fixed(width: 700, height: 300) {
                  ...GatsbyImageSharpFixed
                }
              }
            }            
          }         
        }
      }
    }
  }
`
