import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = ({ data }) => (
    <Layout>
        <SEO title="Blog" keywords={[`gatsby`, `application`, `react`]} />
        <h1>Últimos posts</h1>
        {data.allMarkdownRemark.edges.map(post => (
            <div key={post.node.id}>
                <h3>{post.node.frontmatter.title}</h3>
                <small>Postado por {post.node.frontmatter.author} em {post.node.frontmatter.date}</small>
                <br />
                <br />
                <Link to={post.node.frontmatter.path}>Ver mais</Link>
                <br />
                <br />
                <hr />
            </div>
        ))}
    </Layout>
)

export const pageQuery = graphql`
    query BlogIndexQuery {
        allMarkdownRemark {
            edges {
                node {
                    id
                    frontmatter {
                        path
                        title
                        date
                        author
                    }
                }
            }
        }                
    }
`

export default BlogPage
