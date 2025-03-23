import './App.css'
import HomePage from './pages/HomePage'
import BlogPage from './pages/BlogPage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Portfolio from "./pages/Portfolio";
import ProjectDetails from "./pages/ProjectDetails";
import ServiceDetails from "./pages/ServiceDetails";
import Service from "./pages/Service";
function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/projectDetails" element={<ProjectDetails />} />
      <Route path="/serviceDetails" element={<ServiceDetails />} />
      <Route path="/service" element={<Service />} />
    </Routes>
    <Footer/> 
  </Router>
  )
}

export default App
