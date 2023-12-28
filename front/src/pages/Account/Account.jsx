import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import EditUserName from '../../components/EditUserName/EditUserName';
import UserTransactions from '../../components/UserTransactions/UserTransactions';
import Footer from '../../components/Footer/Footer';

function Account() {
  return (
    <div>
      <Navbar/>
      
    <main className="main bg-dark">

       <EditUserName/>
       <UserTransactions/>
         
    </main>
    <Footer/>
    </div>
  )
}

export default Account