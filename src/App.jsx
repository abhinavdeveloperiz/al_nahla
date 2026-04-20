import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

import Home from "./pages/home"
import About from "./pages/about"
import Careers from "./pages/careers"
import Blog from "./pages/blog"
import Contact from "./pages/contact"

import Navbar from "./pages/components/Navbar"
import Footer from "./pages/components/Footer"
import ScrollToTop from "./pages/components/ScrollToTop"
import Loader from "./pages/components/Loader";

import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom"

function AppWrapper() {
  const location = useLocation()

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  useEffect(() => {
    AOS.refresh()
  }, [location])

  return (
    <>
      <Loader />
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  )
}

export default App