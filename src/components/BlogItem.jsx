import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import theme from '../../config/theme'

const Card = styled.article`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: flex-start;
    width: 100%;
    text-align: center;
`

const Image = styled.div`
    width: 100%;
`

const Categories = styled.div`
    padding-top: 0.5rem;
    padding-bottom: 0.45rem;
    text-transform: uppercase;
    color: ${theme.palette.primary};
`

const Title = styled.div`
    h2 {
        color: ${theme.palette.textDark};                
    }
`

const Date = styled.div`
    color: ${theme.palette.textLight};
`

const BlogItem = ({ path, cover, category, title, date, excerpt }) => (
    <Card>
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
                <h2 style={{ marginTop: '0rem', fontSize: '2.5vw' }}>{title}</h2>
            </Link>
        </Title>
        <Date>
            {date}
        </Date>
    </Card>
)

export default BlogItem