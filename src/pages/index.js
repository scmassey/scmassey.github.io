import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Hero from '../components/hero';
import Layout from "../components/layout"
import About from '../components/about';
import Research from '../components/research';
import Events from '../components/events';
import Contact from '../components/contact';
import SEO from "../components/seo"
import Publications from '../components/publications';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
    <Research />
    <Publications />
    <Events />
    <Contact />
  </Layout>
)

export default IndexPage
