import React, {useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('')

  return (
    <nav
      className={` ${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`} 
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/" /* direct to top of page */ 
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");  /* callback function; setActive set to nothing - keeps track of where user is on page */
            window.scrollTo(0, 0); /* will scroll to top of page */
          }} 
        >
          <img src={logo} alt="logo" className="w-12 h-12 object-contain" /> 
          <p className="text-white text-[18px] font-bold cursor-pointer">Robert <span className="sm:block hidden">| Tarino</span></p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (  /* dynamic navbar links */
            <li
              key={link.id}
              className={`${
                active === link.title
                  ? "text-white"
                  : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar