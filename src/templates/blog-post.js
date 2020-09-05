import React from "react"
import Layout from "../components/layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faCoffee } from "@fortawesome/free-solid-svg-icons"
import "../styles/blog.css"
import { graphql } from "gatsby"

library.add(fab, faCoffee)
export default function BlogPost({ data }) {
  const post = data.markdownRemark
  // highlight-end
  return (
    <Layout>
      <title>{post.frontmatter.title} | Elicia's Digital Garden</title>
      <div>
        <p class="where">Elicia's Mind/{post.frontmatter.root}</p>
        <h1>{post.frontmatter.title}</h1>

        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <ul class="socials">
          <li class="social">
            <a href="https://twitter.com/eliciaauduong/">
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </a>
          </li>
          <li class="social">
            <a href="https://github.com/eliciaauduong/">
              <FontAwesomeIcon icon={["fab", "github"]} />
            </a>
          </li>
          <li class="social">
            <a href="https://www.linkedin.com/in/eliciaauduong/">
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </a>
          </li>
        </ul>
      </div>
      <p class="date">Last updated: {post.frontmatter.date}</p>
    </Layout>
  )
}

// highlight-start
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        root
        date(formatString: "DD MMMM YYYY")
      }
    }
  }
`
// highlight-end
