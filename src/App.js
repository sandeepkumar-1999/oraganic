import './App.css';
import NavBar from './components/Nav.js'
import Footer from './components/Footer.js'
import Landing from './components/Landing';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Landing/>
      <Footer/>
    </div>
  );
}

export default App;
