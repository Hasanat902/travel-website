import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Offers from './components/Offers';
import Plan from './components/Plan';
import Rooms from './components/Rooms';
import Slider from './components/Slider';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Offers></Offers>
      <Plan></Plan>
      <Rooms></Rooms>
      <Slider></Slider>
      <Footer></Footer>
    </div>
  );
}

export default App;
