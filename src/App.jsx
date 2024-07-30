import './App.css'; 
import 'swiper/css';
import { useEffect } from 'react';
import { useState } from 'react'; 
import Cookies from 'js-cookie';
import Banner from './components/Banner'; 
import Header from './components/Header'; 
import Main from './components/Main';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';

function App() {
  const [scroll, setScroll] = useState(0); 
  // useEffect(() => {
  //   Cookies.set("security", "secure", {secure: true, sameSite: "none"}); 
  //   const cookie = Cookies.get("security"); 
  //   console.log(cookie); 

  //   // when making a request clicking on the image, the server sends us the cookies. so, on each new request we send these cookies to the server again. 
  // }, []); 
  
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY); 
    })
    return () => {
      window.removeEventListener('scroll', () => {
        setScroll(window.scrollY); 
      })
    }
  }, [scroll])

  return (
    <>
      <Header scroll={scroll}/>
      <Banner />
      <Main />
      <Footer />
      <BackToTopButton scroll={scroll}/>
    </>
  )
}

export default App
