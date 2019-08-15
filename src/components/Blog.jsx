import React from "react"
import BlogItem from '../components/BlogItem'
import styled from 'styled-components'


const BlogSection = styled.section`
    padding: 1.5rem;    
`

const BlogContainer = styled.ul`
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-gap: 1rem;
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
