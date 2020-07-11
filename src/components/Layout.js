import React from "react"
// import "../css/main.css"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default Layout
