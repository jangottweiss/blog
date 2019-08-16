import React from "react"
import styled from 'styled-components'
import theme from '../../config/theme';


const SidebarSection = styled.section`
    padding-top: ${theme.blog.containerPadding};    
`


class blog extends React.Component {
    render() {        
        return (
            <SidebarSection>
                My Beautiful Sidebar!
            </SidebarSection>
        )
    }
}

export default blog
