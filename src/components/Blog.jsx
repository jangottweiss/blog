import React from "react"
import BlogItem from '../components/BlogItem'
import theme from '../../config/theme'
import styled from 'styled-components'
// import Tag from '../components/Tag'


const Section = styled.div`
    margin: 1.5rem 0;
`

const BlogBox = styled.div`
    border-radius: ${props => props.theme.borderRadius.default};
    background: ${props => props.theme.colors.main.light};
`

class blog extends React.Component {
    render() {
        let { posts } = this.props;
        return (
            <div>
                <div style={{
                    height: '100%',
                    width: '70%',
                    background: theme.colors.main.light,
                    display: 'table-cell'
                }}>
                    {posts.map(({ node }) => {
                        return (
                            <BlogBox
                                key={node.fields.slug}>
                                <Section>
                                    <BlogItem
                                        key={node.fields.slug}
                                        path={node.frontmatter.slug}
                                        cover={node.frontmatter.image.childImageSharp.fluid}
                                        title={node.frontmatter.title}
                                        date={node.frontmatter.date}
                                        category={node.frontmatter.categories}
                                        excerpt={node.excerpt}
                                    />
                                </Section>
                            </BlogBox>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default blog
