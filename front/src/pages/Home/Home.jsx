import React from 'react';
import Navbar from '../../components/Navbar/Navbar.jsx'
import Banner from '../../components/Banner/Banner.jsx';
import Features from '../../components//Features/Features.jsx';

import SignUp from '../SignUp/SignUp.jsx';
// import Account from '../Account/Account.jsx';
import Footer from '../../components/Footer/Footer.jsx';

function Home() {
  return (
    <div>
       
        <Navbar/>
        <Banner/>
        <Features/>
       
        <SignUp/>
        
        <Footer/>


    </div>
  )
}

export default Home