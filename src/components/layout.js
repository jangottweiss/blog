import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import { ThemeProvider } from 'styled-components'
import theme from '../../config/theme'
import styled from 'styled-components'

const SiteWrapper = styled.div`  
  width: 100%;
  background: theme.colors.main.light;  
  margin: 0;
  min-height: 100vh;

`

const HeaderContainer = styled.header`
  
`

const MainContainer = styled.div`
  width: 75%;
  max-width: 1080px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 200px;
  grid-gap: 2rem;  

  @media screen and (max-width: ${theme.breakpoints.m}) {
    width: 90%;
    margin: auto;    
    display: flex;
    flex-direction: column;

  }
`
const SidebarContainer = styled.aside`

`

const BlogWrapper = styled.main`

`

const FooterWrapper = styled.footer`

`

const layout = ({ children }) => (
  <StaticQuery
    query={siteTitleQuery}
    render={data => (
      <ThemeProvider theme={theme}>
        {/* <SEO/> */}
        <SiteWrapper>
          <HeaderContainer>
            <Header siteTitle={data.site.siteMetadata.title} />
          </HeaderContainer>

          <MainContainer>
            <BlogWrapper>
              <main>{children}</main>
            </BlogWrapper>
            <SidebarContainer>
              <Sidebar></Sidebar>
            </SidebarContainer>
          </MainContainer>

          {/* <FooterWrapper>
            <Footer></Footer>
          </FooterWrapper> */}
        </SiteWrapper>
      </ThemeProvider>
    )}
  />
)

const siteTitleQuery = graphql`
  query SiteTitleQuery {
    cats: allMarkdownRemark(
      limit: 2000) {
      group(field: frontmatter___categories) {
        fieldValue
        totalCount
      }
    }
    site {
            siteMetadata {
              title
            }
          }
    }
  `

export default layout
// import React from "react"
// import { Link } from "gatsby"

// import { rhythm, scale } from "../utils/typography"

// class Layout extends React.Component {
//   render() {
//     const { location, title, children } = this.props
//     const rootPath = `${__PATH_PREFIX__}/`
//     let header

//     if (location.pathname === rootPath) {
//       header = (
//         <h1
//           style={{
//             ...scale(1.5),
//             marginBottom: rhythm(1.5),
//             marginTop: 0,
//           }}
//         >
//           <Link
//             style={{
//               boxShadow: `none`,
//               textDecoration: `none`,
//               color: `inherit`,
//             }}
//             to={`/`}
//           >
//             {title}
//           </Link>
//         </h1>
//       )
//     } else {
//       header = (
//         <h3
//           style={{
//             fontFamily: `Montserrat, sans-serif`,
//             marginTop: 0,
//           }}
//         >
//           <Link
//             style={{
//               boxShadow: `none`,
//               textDecoration: `none`,
//               color: `inherit`,
//             }}
//             to={`/`}
//           >
//             {title}
//           </Link>
//         </h3>
//       )
//     }
//     return (
//       <div
//         style={{
//           marginLeft: `auto`,
//           marginRight: `auto`,
//           maxWidth: rhythm(24),
//           padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
//         }}
//       >
//         <header>{header}</header>
//         <main>{children}</main>
//         <footer>
//           © {new Date().getFullYear()}, Built with
//           {` `}
//           <a href="https://www.gatsbyjs.org">Gatsby</a>
//         </footer>
//       </div>
//     )
//   }
// }

// export default Layout
