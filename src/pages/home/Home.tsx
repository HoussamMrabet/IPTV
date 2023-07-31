import { About, Channels, Clients, Footer, Frequence, Hero, NavBar, Pricing, Services } from "../../components"
import "./home.css";

const Home = () => {
  return (
    <>
      <NavBar isHome={true} />
      <Hero />
      <About />
      <Channels />
      <Services />
      <Pricing />
      <Clients />
      <Frequence />
      <Footer isHome={true} />
    </>
  )
}

export default Home