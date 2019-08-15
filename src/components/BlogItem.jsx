import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import theme from '../../config/theme'

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  text-align: center;
`

const Categories = styled.div`
    color: ${props => props.theme.colors.main.dark};
    display: inline;    
`

const Image = styled.div`
    width: 100%;
    height: 100%;
    margin-bottom: 1rem;
`

const Title = styled.div`
h2 {
    font-size: 2rem;
    margin-bottom: 0.7rem;
    display: inline-block;
    color: ${props => props.theme.colors.black.base};
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      color: ${props => props.theme.colors.brands.social.orange};
    }
  }
  a {
    box-shadow: none;
  }
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