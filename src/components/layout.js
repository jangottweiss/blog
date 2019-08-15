import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Header from '../components/Header'
import { ThemeProvider } from 'styled-components'
import theme from '../../config/theme'
import styled from 'styled-components'

const Wrapper = styled.div`  
  width: 100%;
  background: theme.colors.main.light;
`

const BlogWrapper = styled.div`

`

const layout = ({ children }) => (
  <StaticQuery
    query={siteTitleQuery}
    render={data => (
      <ThemeProvider theme={theme}>
        {/* <SEO/> */}
        <Wrapper>
          {/* <Header siteTitle={data.site.siteMetadata.title} menuLinks={data.site.siteMetadata.menuLinks} /> */}
          <Header siteTitle={data.site.siteMetadata.title} />
          <BlogWrapper>
            <main>{children}</main>
          </BlogWrapper>
          
          {/* <Footer>
        </Footer> */}
        </Wrapper>
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
