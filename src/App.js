import './App.css';
import NavBar from './components/Nav.js'
import Footer from './components/Footer.js'
import Landing from './components/Landing';
import CardSection from './components/CardSection'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Landing/>
      <CardSection/>
      <Footer/>
    </div>
  );
}

export default App;
