import React from "react"
import { Link, graphql } from "gatsby"

import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from 'gatsby-image'
import styled from 'styled-components'
import { rhythm, scale } from "../utils/typography"
import theme from '../../config/theme'

const Wrapper = styled.article`
  padding-top: ${theme.blog.containerPadding};    
`

const HeaderWrapper = styled.header`
  text-align: center;
`

const Cover = styled.div`
    width: 100%;    
    overflow:hidden;
    max-height: 450px;    
`
const Categories = styled.div`
    padding-top: 0.5rem;
    padding-bottom: 0.45rem;
    text-transform: uppercase;
    color: ${theme.palette.primary};
`

const Title = styled.div`
    h1 {
        color: ${theme.palette.textDark};                
    }
`

const Date = styled.div`
    color: ${theme.palette.textLight};
`


class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
console.log(post)
    const frontmatter = post.frontmatter;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <Wrapper>
          <HeaderWrapper>
            {post.frontmatter.show_image &&
              <Cover>
                <Img fluid={post.frontmatter.image.childImageSharp.fluid} />
              </Cover>
            }
            <Categories>
              {frontmatter.categories.join(', ')}
            </Categories>
            <Title>
              <h1 style={{ marginTop: '0rem' }}>{post.frontmatter.title}</h1>
            </Title>
            <Date>
              {frontmatter.date}
            </Date>

          </HeaderWrapper>
          {/* <section dangerouslySetInnerHTML={{ __html: post.html }} /> */}
          <MDXRenderer>{post.body}</MDXRenderer>
        </Wrapper>
        {/* <article>
          <header>
            <h1
              style={{
                marginTop: rhythm(1),
                marginBottom: 0,
              }}
            >
              {post.frontmatter.title}
            </h1>
            <p
              style={{
                ...scale(-1 / 5),
                display: `block`,
                marginBottom: rhythm(1),
              }}
            >
              {post.frontmatter.date}
            </p>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
          <footer>
            <Bio />
          </footer>
        </article>

        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav> */}
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
          site {
        siteMetadata {
          title
        author
        }
      }
    mdx(fields: {slug: {eq: $slug } }) {
          id
      excerpt(pruneLength: 160)
      body
      frontmatter {
          title
        date(formatString: "MMMM DD, YYYY")
        description
        categories
        tags
        slug
        show_image
        image {
          childImageSharp {
        fluid(
          maxWidth: 1024,
              maxHeight: 768) {
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
`
