import React from "react"
// import SideContent from "../components/sideContent"
import SEO from "../components/seo"
import theme from '../../config/theme'
import Blog from '../components/blog'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Layout from "../components/layout"

const BlogMainWrapper = styled.div`
  height: 100%;
  background: ${theme.colors.main.light};
  display: table;
  margin-top: 5rem;
  @media screen and (max-width: 1000px) {
  }
`

class BlogMain extends React.Component {
    render() {
        const { site, posts } = this.props
        console.log(posts)
        return (
            // <div>TEST</div>
            <Layout title={site.title}>
                <Helmet title={site.title} />
                <SEO title="All posts" />
                <BlogMainWrapper>
                    <Blog posts={posts} />
                </BlogMainWrapper>
            </Layout>
        )
    }
}

export default BlogMain