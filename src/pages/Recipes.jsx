import { useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Hero from '../components/Hero'
import RecipeSec from '../components/RecipeSec'
import Footer from '../components/Footer'

const Recipes = () => {
  const location = useLocation()
  const { ingredients } = location.state || {}

  return (
    <div>
      <Header />
      <Hero />
      <RecipeSec ingredients={ingredients} />
      <Footer />
    </div>
  )
}

export default Recipes
