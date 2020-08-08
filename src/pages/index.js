import React from "react"
import Layout from "../components/layout"
import Emoji from "a11y-react-emoji"
import { Link } from "gatsby"

export default function Home({ data }) {
  console.log(data)
  return (
    <div>
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
          <a href="https://www.aquiles.me/about/">Aquiles Carattino</a> and{" "}
          <a href="https://joelhooks.com/digital-garden">Joel Hooks</a>
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
          and made with <Emoji symbol="💛" label="gold heart" /> using{" "}
          <a href="https://www.gatsbyjs.org/">Gatsby</a>. You can view updates
          in the <Link to="/changelog">changelog</Link>.
        </p>
        <h3>Where do I start?</h3>
        <p>You're at the root but here are some links to check out!</p>
        <ul>
          <li>
            <Link to="/100-days-of-code">#100DaysOfCode</Link>
          </li>
          {/* <li>
            <Link to="/reading">Reading list</Link>
          </li> */}
          <li>
            <Link to="/sustainability">
              We all live here; do you know what's happening?
            </Link>
          </li>
        </ul>
        <p>
          If you're interested in what I do or have any comments about this
          website, let's chat! <br></br>Find me on{" "}
          <a href="https://twitter.com/eliciaauduong/">Twitter</a> /{" "}
          <a href="https://www.linkedin.com/in/eliciaauduong/">LinkedIn</a>
        </p>

        {/* <div class="grid-item">
          <Link to="/climate/">
            <Emoji symbol="🌦️" label="sun behind rain cloud" />
            <br></br>
            root/climate-change
          </Link>
        </div>
        <div class="grid-item">
          <Emoji symbol="🌏" label="earth" />
          <br></br>
          Global Issues
        </div>
        <div class="grid-item">
          <Emoji symbol="🏭" label="factory" />
          <br></br>
          Pollution
        </div>
        <div class="grid-item">
          <Emoji symbol="🌱" label="seedling" />
          <br></br>
          Sustainability
        </div> */}
      </Layout>
    </div>
  )
}
