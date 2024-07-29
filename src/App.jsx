import './App.css'; 
import 'swiper/css';
import Banner from './components/Banner'; 
import Header from './components/Header'; 
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import Main from './components/Main';

function App() {
  useEffect(() => {
    Cookies.set("security", "secure", {secure: true, sameSite: "none"}); 
    const cookie = Cookies.get("security"); 
    console.log(cookie); 

    // when making a request clicking on the image, the server sends us the cookies. so, on each new request we send these cookies to the server again. 
  }, []); 
  
  return (
    <>
      <Header />
      <Banner />
      <Main />
    </>
  )
}

export default App
