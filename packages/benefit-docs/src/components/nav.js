/** @jsx jsx */
import { Link, graphql, useStaticQuery } from "gatsby"
import { jsx, ConfigProvider } from "benefit-react"

const Nav = () => {
  const allDocs = useStaticQuery(graphql`
    query docsIndex {
      allMdx {
        edges {
          node {
            id
            excerpt
            frontmatter {
              name
              route
            }
          }
        }
      }
    }
  `)

  const { edges: docs } = allDocs.allMdx

  return (
    <div>
      <ul>
        {docs.map(({ node: doc }) => (
          <li key={doc.id}>
            <Link to={doc.frontmatter.route}>
              <h2 className="text-orange-100">{doc.frontmatter.name}</h2>
            </Link>
            <p>{doc.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Nav
