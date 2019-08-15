import React from "react"
import { graphql } from "gatsby"

import BlogMain from '../components/BlogMain';

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const site = data.site;
    const posts = data.allMarkdownRemark.edges;

    return (
      <BlogMain
        site={site}
        posts={posts}
      ></BlogMain>
      // <Layout location={this.props.location} title={siteTitle}>
      //   <SEO title="All posts" />
      //   <Bio />
      //   {posts.map(({ node }) => {
      //     const title = node.frontmatter.title || node.fields.slug
      //     return (
      //       <article key={node.fields.slug}>
      //         <header>
      //           <h3
      //             style={{
      //               marginBottom: rhythm(1 / 4),
      //             }}
      //           >
      //             <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
      //               {title}
      //             </Link>
      //           </h3>
      //           <small>{node.frontmatter.date}</small>
      //         </header>
      //         <section>
      //           <p
      //             dangerouslySetInnerHTML={{
      //               __html: node.frontmatter.description || node.excerpt,
      //             }}
      //           />
      //         </section>
      //       </article>
      //     )
      //   })}
      // </Layout>
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
