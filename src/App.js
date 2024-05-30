import { useEffect } from 'react';
import { ResumeProvider } from './Context';
import './App.css';
import Header from './components/Layouts/Header';
import Navbar from './components/Layouts/Navbar';
import Footer from './components/Layouts/Footer';
import Main from './components/Main';
import WebFont from 'webfontloader';
import Contact from './components/Layouts/Contact';
function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Pacifico', 'Poppins']
      }
    });
  }, []);

  return (
    <>
      <ResumeProvider>
        <Navbar />
        <Header />
        <Main />
        <Contact />
        <Footer />
      </ResumeProvider>
    </>
  );
}

export default App;
