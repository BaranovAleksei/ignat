import React from "react"
import { NavLink } from "react-router-dom"
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.nav}>
           <div className={ s.item }>
             <NavLink to='/pre-junior' activeClassName = { s.activeLink }>PreJunior</NavLink>
           </div>
          <div className={ s.item }>
            <NavLink to='/junior' activeClassName = { s.activeLink }>Junior</NavLink>
          </div>
          <div className={ s.item }>
            <NavLink to='/junior-plus' activeClassName = { s.activeLink }>JuniorPlus</NavLink>
          </div>

        </div>
    );
}

export default Header;
