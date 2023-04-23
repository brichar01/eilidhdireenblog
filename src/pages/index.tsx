import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import BlogHeader from "../components/blog-header"
import HomePage from "./HomePage"
import TwoBodiesThreeFools from "./TwoBodiesThreeFools"
import ComingSoon from "../components/coming-soon"
import Arcadia from "../components/arcadia-blurb"
import FAQ from "../components/FAQ"
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  display: 'flex',
  textAlign: 'center',
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <BlogHeader />
      <div>
        <div name="Home">
          <HomePage />
        </div>
        <div name="Two Bodies÷Three Fools">
          <TwoBodiesThreeFools />
        </div>
        <div name="Arcadia">
          <Arcadia />
        </div>
        <div name="Coming Soon">
          <ComingSoon />
        </div>
        <div name="Blog">
          <h1>Blog</h1>
          Under construction, check in later!
        </div>
        <div name="FAQ">
          <FAQ />
        </div>
        <div name="Contact me">
          <h1>Contact me</h1>
          Under construction, check in later!
        </div>
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Eilidh's Blog</title>


