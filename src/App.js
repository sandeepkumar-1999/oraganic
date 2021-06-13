import './App.css';
import NavBar from './components/Nav.js'
import Footer from './components/Footer.js'
import Landing from './components/Landing';
import CardSection from './components/CardSection'
import Car from './components/Carousel'
import Testimonial from './components/Testimonial';
import Blog from './components/Blog.js'

function App() {
  return (
    <div className="App">
      <div className="navLand">
        <NavBar/>
        <Landing/>
      </div>
      <CardSection/>
      <Car/>
      <Testimonial/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
