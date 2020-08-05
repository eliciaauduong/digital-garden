import React from "react"
import "../styles/styles.css"
// highlight-start
export default function Header(props) {
  return (
    <div>
      <p class="where">Elicia's mind/{props.where}</p>
      <h1>{props.title}</h1>
    </div>
  )
}
