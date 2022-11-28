import './App.css'
import Header from './src/components/Header'
import SolarSystem from './src/components/SolarSystem'
import Mission from './src/components/Missions'
import Footer from './src/components/Footer'

function App() {
  return (
    <section className="h-full w-full">
      <Header />
      <SolarSystem />
      <Mission />
      <Footer />
    </section>
  )
}

export default App
