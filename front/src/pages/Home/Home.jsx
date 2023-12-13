import React from 'react';
import Navbar from '../../components/Navbar/Navbar.jsx'
import Banner from '../../components/Banner/Banner.jsx';
import Features from '../../components//Features/Features.jsx';
import SignIn from '../SignIn/SignIn.jsx';
import Account from '../Account/Account.jsx';
import Footer from '../../components/Footer/Footer.jsx';

// import Features from '../../components/Features/Features.jsx';

function Home() {
  return (
    <div>
       
        <Navbar/>
        <Banner/>
        <Features/>
        <SignIn/>
         <Account/>
        <Footer/>


    </div>
  )
}

export default Home