
import './App.css';
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import AboutMe from './AboutMe/AboutMe';
// import Galeria from './Galeria/Galeria';
import Card from './Galeria/Card';
import Footer from './Footer/Footer';


function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <AboutMe/>
      {/* <Galeria/> */}
      <Card/>
      <Footer/>
    </>
  );
}

export default App;
 