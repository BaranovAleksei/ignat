import React from "react"
import { NavLink } from "react-router-dom"
import s from './Header.module.sass'
import { PATH } from './Routes'

function Header() {
    return (
        <div className={s.nav}>
          <button className={ s.menuHover }>Меню</button>
          <div className={s.items}>
            <div className={ s.item }>
              <NavLink to= { PATH.PRE_JUNIOR } activeClassName = { s.activeLink }>PreJunior</NavLink>
            </div>
            <div className={ s.item }>
              <NavLink to={ PATH.JUNIOR } activeClassName = { s.activeLink }>Junior</NavLink>
            </div>
            <div className={ s.item }>
              <NavLink to={ PATH.JUNIOR_PLUS } activeClassName = { s.activeLink }>JuniorPlus</NavLink>
            </div>
          </div>
        </div>
    )
}

export default Header;
