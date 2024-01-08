import './app.scss'
import Navbar from './components/Navbar'
import { Hero } from './components/hero/Hero'

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">Parallax</section>
      <section>Services</section>
      <section id="Portfolio">Parallax</section>
      <section>Portfolio 1</section>
      <section>Portfolio 2</section>
      <section>Portfolio 3</section>
      <section id="Contact">Contact</section>
      <section id="About">About</section>

      {/* <Test />
      <Test /> */}
    </div>
  )
}

export default App
