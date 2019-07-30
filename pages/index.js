import { useEffect, useState } from "react"
import Head from "next/head"
import Button from "../components/button"

function Index() {
  const [date, setDate] = useState([])
  useEffect(() => {}, [])

  return (
    <main>
      <Head>
        <title>Hempstart - Born to Grow</title>
      </Head>
      <style jsx>{``}</style>
    </main>
  )
}

export default Index
