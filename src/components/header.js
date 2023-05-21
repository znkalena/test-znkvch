import React from "react"
import Image from "./image"
import Logo from '../img/logo.png'
import Link from "./link"

class Header extends React.Component{
    render(){
    return(
        <header className='header'>
        <div className='header__conteiner'>
            <div className='logo'>
            <Image image = {Logo} className="logo__img" alt={'logotype blue figure'}/>
            <Link content ="Jobored" href ="#" className="logo__link link"/>          
            </div>
            <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item">
                <Link  className="link active" content="Поиск Вакансий" href="#"/>
                </li>
                <li className="nav__item">
                <Link className="link" content="Избранное" href="#" />
                </li>
            </ul>
            </nav>
        </div>
        </header>
    )
    }
    
}
export default Header