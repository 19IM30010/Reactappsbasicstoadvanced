import AboutMe from './AboutMe';
import './App.css';
import {Routes,Route,Link} from 'react-router-dom';
import HomePage from './HomePage';
import Contact from './Contact';
// Contact
// HomePage
// AboutMe

const App = () => {
  return (

    <div className="App">
      <nav className="nav">
        <Link to="/" className="nav-item">HomePage</Link>
        <Link to = "/about-me" className='nav-item'>About Me</Link>
        <Link to = "/contact" className='nav-item'>Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about-me" element={<AboutMe/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      
      
    </div>
    
  );
}

export default App;
