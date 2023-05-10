import logo from './logo.svg';
import './App.css';
import MyButton from './components/MyButton';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Halo Cuy
        </p>
        <MyButton />
        <Footer />
       
      </header>
    </div>
  );
}

export default App;
