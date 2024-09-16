import Hero from "./components/Fragments/Hero"
import AuthLayout from "./components/Layout/AuthLayout"
import AboutUs from "./components/Fragments/AboutUs"
import Menu from "./components/Fragments/Menu"
import Contact from "./components/Fragments/Contact"

function App() {
  return (
    <>
      <AuthLayout>
            <Hero />
            <AboutUs />
            <Menu />
            <Contact />
      </AuthLayout>
    </>
  )
}

export default App
