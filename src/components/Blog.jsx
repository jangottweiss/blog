import React from "react"

import styled from 'styled-components'

import BlogItem from '../components/BlogItem'
import theme from '../../config/theme';


const BlogSection = styled.section`
    padding: ${theme.blog.containerPadding};    
`

const BlogContainer = styled.ul`
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-gap: ${theme.blog.gridGap};
    margin-left: 0px;
`

class blog extends React.Component {
    render() {
        let { posts } = this.props;
        return (
            <BlogSection>
                <BlogContainer>
                    {posts.map(({ node }) => {
                        return (
                            <li
                                key={node.fields.slug}>
                                <BlogItem
                                    key={node.fields.slug}
                                    path={node.frontmatter.slug}
                                    cover={node.frontmatter.image.childImageSharp.fluid}
                                    title={node.frontmatter.title}
                                    date={node.frontmatter.date}
                                    category={node.frontmatter.categories}
                                    excerpt={node.excerpt}
                                />
                            </li>
                        )
                    })}
                </BlogContainer>
            </BlogSection>
        )
    }
}

export default blog
