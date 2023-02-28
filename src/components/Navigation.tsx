/* eslint-disable jsx-a11y/alt-text */
import React, { useState} from 'react';
import { Container } from '../UI/Container';
import Logo from '../UI/Logo';
import Ostad from '../assets/logo/logo.png'
import UK from '../assets/icon/uk.png'
import Dowan from '../assets/icon/arr-dowan.png'
import Menu from '../assets/icon/menu.png'


const Navigation = () => {

  const [open, setOpen] = useState<boolean>(false)
console.log(open)

    return (
        <Container>
        <div className='nav-container'>
            <Logo logo={Ostad} classes="nav-logo"/>
        <ul>
          <li><p>সেট ইয়োর গোল</p><img src={Dowan}/></li>
          <li><p>আপকামিং লাইভ ব্যাচ</p></li>
          <li><img src={UK}/><p>ENGLISH</p></li>
          <li><button className='login-btn'>Login</button></li>
        </ul>

        </div>
        {/* for responsive mobile devices view */}

          <div className='mobile-view'>
            <Logo logo={Ostad} classes="nav-logo"/>
            <img src={Menu} onClick={() => setOpen(!open)} />

          </div>

          <ul className={open ? 'mobile-menu': 'mobile-menu-hiden'}>
            <li><p>সেট ইয়োর গোল</p><img src={Dowan}/></li>
            <li><p>আপকামিং লাইভ ব্যাচ</p></li>
            <li><img src={UK}/><p>ENGLISH</p></li>
            <li><button className='login-btn'>Login</button></li>
        </ul>
        {/* for responsive mobile devices view */}
      </Container>
    );
};

export default Navigation;