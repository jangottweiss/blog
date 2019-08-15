import { Link } from "gatsby"
import React from 'react'
import styled from 'styled-components'
import HeadRoom from 'react-headroom'
import theme from '../../config/theme'

const Wrapper = styled(HeadRoom)`    
    height: 60px;
    width: 100%;
    z-index: 2000;
    transition: top 0.3s;
    .headroom--pinned {
        position: fixed;
        transform: translateY(0%);
        background: ${theme.colors.main.light}
    }
    box-shadow: 0px 1px 5px rgba(0,0,0,.1);    

`
const Container = styled.div`
    display: flex;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-between;
    @media screen and (max-width: 1000px) {
        flex-wrap: wrap;
        justify-content: space-between;
    }
    padding: 15px;
`

const Row = styled.div`
    display:flex;
    align-items: center;
`
const RowEnd = styled.div`
    display:flex;
    align-items: center;
    justify-self: end;
    @media screen and (max-width: 1000px) {
        margin-right: 0;
        width: 100%;
        padding-top: 1rem;
    }
`

const NavBar = styled.nav`
    justify-content: flex-end;
    align-items: center;
    display: block;
    margin: auto;
`

const Logo = styled.svg`
    display: block; 
    margin: auto; 
    width: 10rem;
    @media screen and (max-width: 1000px) {
        width: 3rem;
    }
`

const header = ({ siteTitle }) => (
    <Wrapper>
        <Container>            
           <Row>
                <Link
                    style={{
                        boxShadow: `none`,
                        textDecoration: `none`,
                        color: `inherit`,
                        display: `block`,
                        marginLeft: '1rem'
                    }}
                    to={`/`}
                >
                    {siteTitle}
                </Link>
            </Row>
            <Row>
                <NavBar>
                    {/* <Tags tags={menuLinks} linkPrefix="categories" /> */}
                    NAV NAV NAV
                </NavBar>
            </Row>
            <RowEnd>
                END
            </RowEnd>
        </Container>
    </Wrapper>
)

export default header
