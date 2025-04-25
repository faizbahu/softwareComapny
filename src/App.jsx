import './App.css'
import HomePage from './pages/HomePage'
import BlogPage from './pages/BlogPage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Portfolio from "./pages/Portfolio";
import ProjectDetails from "./pages/ProjectDetails";
import ServiceDetails from "./pages/ServiceDetails";
import Service from "./pages/Service";
import About from "./pages/AboutUs";
import Contact from './pages/Contact';
import BlogDetails from './pages/BlogDetails';
import JobDetailsPage from './pages/JobDetailsPage';
import CareersPage from './pages/CareersPage';
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
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blogDetails" element={<BlogDetails />} />
      <Route path="/jobDetails" element={<JobDetailsPage />} />
      <Route path="/careerPage" element={<CareersPage />} />
    </Routes>
    <Footer/> 
  </Router>
  )
}

export default App
