import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import theme from '../../config/theme'

const Wrapper = styled.article`

`

const Categories = styled.div`
   
`

const Image = styled.div`

`

const Title = styled.div`

`

const Date = styled.div`

`

const BlogItem = ({ path, cover, category, title, date, excerpt }) => (
    <Wrapper>
        <Image>
            <Link to={path} title={title}>
                <Img fluid={cover} />
            </Link>
        </Image>
        <Categories>
            {category.join(', ')}
        </Categories>
        <Title>
            <Link to={path} >
                <h2 style={{ marginTop: '1rem', fontSize: '1 vw' }}>{title}</h2>
            </Link>
        </Title>
        <Date>
            {date}
        </Date>
    </Wrapper>
)

export default BlogItem