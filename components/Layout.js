import { Container } from "@mui/material"
import { Footer } from "./Footer"
import { Navbar } from "./Navbar"

const Layout = ({ children }) => {
  return (
    <Container
      maxWidth="lg"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "space-between",
      }}
    >
      <Navbar />
      {children}
      <Footer />
    </Container>
  )
}

export default Layout
