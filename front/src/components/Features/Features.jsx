import React from 'react';
import ChatIcon from '../../assets/img/icon-chat.png';
import MoneyIcon from '../../assets/img/icon-money.png';
import SecurityIcon from '../../assets/img/icon-security.png';
import './Features.css';

function Features() {
  return (
    <div className='features'>
        <h2 className='sr-only'> Features </h2>
        <section className='feature-elem'>
             <img src={ChatIcon} alt="Chat icon"  className='feature-icon' />
             <h2 className='feature-item-title'>You are our #1 priority</h2>
             <p>Need to talk to a representative? 
                You can get in touch through our 24/7 
                chat or through a phone call in less 
                than 5 minutes.</p>

        </section>
        <section className='feature-elem'>
        <img src={MoneyIcon} alt="Money icon" className='feature-icon'/>
             <h2 className='feature-item-title'>More savings means higher rates</h2>
             <p>The more you save with us, the higher your interest rate will be!</p>
        </section>
        <section className='feature-elem'>
        <img src={SecurityIcon} alt="SecurityIcon" className='feature-icon' />
             <h2 className='feature-item-title'>Security you can trust</h2>
             <p>We use top of the line encryption to make sure your data and money is always safe.</p>
        </section>
    </div>
  )
}

export default Features