import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Offers from './components/Offers';
import Plan from './components/Plan';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Offers></Offers>
      <Plan></Plan>
    </div>
  );
}

export default App;
