import React from 'react'
import { Link } from 'react-router'
import { useTranslation } from 'react-i18next';

const Header = () => {
const {t, i18n} = useTranslation()

  return (
    <header>
        <div className="container">
            <div className="wrap">
                <div className="logo">LOGO</div>
                <nav className='nav'>
                    <Link to="/">{t("home")}</Link>
                    <Link to="/about">{t("about")}</Link>
                    <Link to="/contacts">{t("contacts")}</Link>
                </nav>
                <button onClick={() => i18n.changeLanguage("en")}><img width="48" height="48" src="https://img.icons8.com/color/48/great-britain.png" alt="great-britain"/></button>
                <button onClick={() => i18n.changeLanguage("ru")}><img width="48" height="48" src="https://img.icons8.com/color/48/russian-federation.png" alt="russian-federation"/></button>
                <button onClick={() => i18n.changeLanguage("hy")}><img width="48" height="48" src="https://img.icons8.com/color/48/armenia.png" alt="armenia"/></button>
            </div>
        </div>
    </header>
  )
}

export default Header