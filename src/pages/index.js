import React from "react"
import { graphql } from "gatsby"

import { Layout, Seo, Menu, Hero, About } from "../components"

const IndexPage = ({ location, data }) => {
  return (
    <Layout>
      <Seo />
      <Menu />
      <Hero data={data.hero.edges} />
      <About data={data.about.edges} />
    </Layout>
  )
}

export default IndexPage;

export const pageQuery = graphql`
  {
    hero: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/hero/" } }) {
      edges {
        node {
          frontmatter {
            title
            name
            subtitle
          }
          html
        }
      }
    }
    about: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/about/" } }) {
      edges {
        node {
          frontmatter {
            title
            skills
            avatar {
              childImageSharp {
                fluid(maxWidth: 700, quality: 100, traceSVG: { color: "rgb(56, 47, 92)", threshold: 75 }
                      toFormat: JPG) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
          html
        }
      }
    }
  }
  `;