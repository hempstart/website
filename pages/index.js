import { useEffect, useState } from "react"
import Head from "next/head"
import Button from "../components/button"
import Header from "../components/header"
import Hero from "../components/hero"
import Why from "../components/why"
import How from "../components/how"
import Team from "../components/team"
import Contact from "../components/contact"
import Footer from "../components/footer"

function Index() {
  const [date, setDate] = useState([])
  useEffect(() => {}, [])

  return (
    <main>
      <Head>
        <title>Hempstart - Born to Grow</title>
      </Head>
      <Header />
      <Hero />
      <Why />
      <How />
      <Team />
      <Contact />
      <Footer />
      <p className="copy">2019 Hempstart. All rights reserverd</p>
      <style jsx>{`
        .copy {
          background: #1c3d38;
          color: var(--background);
          text-align: center;
          width: 100%;
          padding: 20px 0;
        }
      `}</style>
    </main>
  )
}

export default Index
