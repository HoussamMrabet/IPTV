import { About, Channels, Clients, Footer, Frequence, Hero, NavBar, Pricing, Services } from "../../components"
import "./home.css";

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Channels />
      <Services />
      <Pricing />
      <Clients />
      <Frequence />
      <Footer />
    </>
  )
}

export default Home