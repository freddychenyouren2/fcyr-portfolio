import './App.scss';
import { Routes , Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='/fcyr-portfolio' element={<Home/>} />
          <Route path="/fcyr-portfolio/about" element={<About />} />
          {/* Dynamic Route for portfolio page depending on portfolio type */}
          <Route path="/fcyr-portfolio/portfolio/:portfolioType" element={<Portfolio />} />
          <Route path="/fcyr-portfolio/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
