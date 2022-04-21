import Footer from "./componets/Footer"
import Navbar from "./componets/Navbar"
import Services from "./componets/Services"
import Transactions from "./componets/Transactions"
import Welcome from "./componets/Welcome"

const App = () => {

  return (
    <div className="min-h-screen">
      <div className='gradient-bg-welcome'>
        <Navbar />
        <Welcome />
      </div>
      <div>
        <Services />
        <Transactions />
        <Footer />
      </div>
      
    </div>
  )
}

export default App
