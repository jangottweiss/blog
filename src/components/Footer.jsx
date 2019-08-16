import { Link } from "gatsby"
import React from 'react'
import styled from 'styled-components'
import HeadRoom from 'react-headroom'
import theme from '../../config/theme'

const Wrapper = styled(HeadRoom)`    
    height: 75px;
    width: 100%;  
    background-color: ${theme.palette.secondary};
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 1rem;
`


const header = ({ siteTitle }) => (
   <Wrapper>
       FOOTER
   </Wrapper>
)

export default header
