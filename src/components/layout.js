import React from "react"

export default function Layout({ children }) {
  return (
    <div style={{ margin: `90px auto`, maxWidth: 800, padding: `0 1rem` }}>
      {children}
    </div>
  )
}
