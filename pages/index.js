import { FeaturedComp } from "../components/FeaturedComp"
import Head from "next/head"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <>
      <Head>
        <title>Ivan Hill | Frontend Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100vh",
        }}
      >
        <Layout>
          <FeaturedComp />
        </Layout>
      </div>
    </>
  )
}
