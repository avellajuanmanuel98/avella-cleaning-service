import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Stats from './components/Stats'
import Process from './components/Process'
import Gallery from './components/Gallery'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Stats />
        <Process />
        <Gallery />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
