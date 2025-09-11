import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Plans from './components/Plans'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Access from './components/Access'
import Footer from './components/Footer'
import EstimateForm from './components/EstimateForm'
import ContactForm from './components/ContactForm'

function App() {
  const [isEstimateFormOpen, setIsEstimateFormOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState('')
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)

  const handleOpenEstimateForm = (planName) => {
    setSelectedPlan(planName)
    setIsEstimateFormOpen(true)
  }

  const handleCloseEstimateForm = () => {
    setIsEstimateFormOpen(false)
    setSelectedPlan('')
  }

  const handleOpenContactForm = () => {
    setIsContactFormOpen(true)
  }

  const handleCloseContactForm = () => {
    setIsContactFormOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onOpenContactForm={handleOpenContactForm} />
      <Hero />
      <About />
      <Features />
      <Plans onOpenEstimateForm={handleOpenEstimateForm} />
      <Process onOpenContactForm={handleOpenContactForm} />
      <Testimonials />
      <Access onOpenContactForm={handleOpenContactForm} />
      <Footer onOpenContactForm={handleOpenContactForm} />
      {isEstimateFormOpen && (
        <EstimateForm 
          selectedPlan={selectedPlan}
          onClose={handleCloseEstimateForm}
        />
      )}
      {isContactFormOpen && (
        <ContactForm onClose={handleCloseContactForm} />
      )}
    </div>
  )
}

export default App