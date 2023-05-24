import logo from './logo.svg';
import './App.css';
import MyButton from './components/MyButton';
import Navbar from './components/Navbar';
import Footer from './components/Footer';



function App() {
  const navText = 'Noffrizal Zaim'
  const navHeading = 'Navigation Bar'

  const clicked = () =>{
    return alert('button dipencet')
  }

  return (
    <div className="App">
      <header className="App-header">
        <Navbar test = {navText} navHeading = {navHeading} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Halo Cuy selamat datang deh disini
        </p>
        <MyButton clicked={clicked}/>
        <Footer />

      </header>
    </div>
  );
}

export default App;
