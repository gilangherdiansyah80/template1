import Hero from '../components/Fragments/Hero'
import AboutUs from '../components/Fragments/AboutUs'
import Menu from '../components/Fragments/Menu'
import Contact from '../components/Fragments/Contact'
import AuthLayout from '../components/Layout/AuthLayout'

const Home = () => {
  return (
      <AuthLayout>
            <Hero />
            <AboutUs />
            <Menu />
            <Contact />
      </AuthLayout>
  )
}

export default Home
