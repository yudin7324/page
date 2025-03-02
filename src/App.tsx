import { FC } from "react"
import About from "./components/About/About"
import Contacts from "./components/Contancts/Contacts"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Skills from "./components/Skills/Skills"
import Projects from "./components/Projects/Projects"
import Footer from "./components/Footer/Footer"

const App:FC = () => {

  return (
    <main className="main">
      <Header />
      <div className="main__wrapper">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contacts />
      </div>
      <Footer />
    </main>
  )
}

export default App
