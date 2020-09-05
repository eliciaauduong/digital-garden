import React from "react"
import Layout from "../components/layout"
import Emoji from "a11y-react-emoji"
import { Link, graphql } from "gatsby"

export default function Home({ data }) {
  console.log(data)
  return (
    <div>
      <title>{data.site.siteMetadata.title}</title>
      <Layout>
        <p class="where">Elicia's mind/root</p>
        <h1>Welcome to my digital garden!</h1>
        <p>
          Hey <Emoji symbol="👋" label="wave" />, it's Elicia and here lie all
          the things on my mind.
        </p>
        <h3>What is this?</h3>
        <p>
          This website is a digital garden
          <Emoji symbol="🌱" label="seedling" /> (inspired by{" "}
          <a
            href="https://www.aquiles.me/about/"
            target="_blank"
            rel="noreferrer"
          >
            Aquiles Carattino
          </a>{" "}
          and{" "}
          <a
            href="https://joelhooks.com/digital-garden"
            target="_blank"
            rel="noreferrer"
          >
            Joel Hooks
          </a>
          ), an ongoing work in progress of all my thoughts and notes.
          Everything here is scattered; there is no index or categories. The
          only way around is through links.
        </p>
        <p>
          The purpose of this site is for me to share my learning process in
          public. You may find unfinished ideas or missing concepts, just little
          seeds of information without enough connections to become projects,
          yet.
        </p>
        <p>
          My digital garden is{" "}
          <a href="https://github.com/eliciaauduong/digital-garden">
            open-sourced
          </a>{" "}
          and made with <Emoji symbol="❤️" label="red heart" /> using{" "}
          <a href="https://www.gatsbyjs.com/">Gatsby</a>. You can view updates
          in the <Link to="/changelog">changelog</Link>.
        </p>
        <h3>Where do I start?</h3>
        <p>You're at the root but here are some links to check out!</p>
        <ul>
          <li>
            <Link to="/covid-19">What I'm Doing in COVID-19</Link>
          </li>
          <li>
            <Link to="/up-next">What's Next?</Link>
          </li>
          <li>
            <Link to="/show-notes">Podcast Notes</Link>
          </li>
          {/* <li>
            <Link to="/sustainability">
              We all live here; do you know what's happening?
            </Link>
          </li> */}
        </ul>
        <p>
          If you're interested in what I do or have any comments about this
          website, let's chat! <br></br>Find me on{" "}
          <a href="https://twitter.com/eliciaauduong/">Twitter</a> /{" "}
          <a href="https://www.linkedin.com/in/eliciaauduong/">LinkedIn</a>
        </p>
      </Layout>
    </div>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
