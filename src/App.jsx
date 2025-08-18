import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Plans from './components/Plans'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Access from './components/Access'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Features />
      <Plans />
      <Process />
      <Testimonials />
      <Access />
      <Footer />
    </div>
  )
}

export default App