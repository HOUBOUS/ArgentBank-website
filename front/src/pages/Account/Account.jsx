import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import EditUserName from '../../components/EditUserName/EditUserName';
import UserTransactions from '../../components/UserTransactions/UserTransactions';
import Footer from '../../components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';


function Account() {

  const dispatch = useDispatch();
  const { isRemember } = useSelector((state) => state.signin)
  const {user} = useSelector((state) => state.userProfile)
 
  useEffect(() =>{
 
      
      console.log(user);

    if (isRemember && user) {
      const {userName, firstName, lastName} = user;
      localStorage.setItem('userName',   JSON.stringify(userName));
      localStorage.setItem('firstName',  JSON.stringify(firstName));
      localStorage.setItem('lastName',  JSON.stringify(lastName));
    }else{
      localStorage.removeItem('userName')
      localStorage.removeItem('firstName')
      localStorage.removeItem('lastName')
    }
  }, [dispatch, isRemember, user]);
   

  
  
  
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