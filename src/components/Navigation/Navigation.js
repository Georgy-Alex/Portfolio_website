import "./Navigation.css"
import { NavLink } from "react-router-dom"
import BtnDarkMode from "../btnDarkMode/BtnDarkMode"

function Navigation() {

    const activeLink = "nav-list__link nav-list__link--active"
    const pasLink = "nav-list__link"
    return (
        <div className="Navigation">
            <nav className="nav">
                <div className="container">
                    <div className="nav-row">
                        <a href="./index.html" className="logo"><strong>Freelancer</strong> portfolio</a>

                        <BtnDarkMode/>
                        {/* <button className="dark-mode-btn">
                            <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
                            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
                        </button> */}

                        

                        <ul className="nav-list">
                            <li className="nav-list__item"><NavLink to='/' className={({isActive}) => isActive ? activeLink : pasLink}>Home</NavLink></li>
                            <li className="nav-list__item"><NavLink to='/Proj' className={({isActive}) => isActive ? activeLink : pasLink}>Projects</NavLink></li>
                            <li className="nav-list__item"><NavLink to='/Dev' className={({isActive}) => isActive ? activeLink : pasLink}>Development</NavLink></li>
                            <li className="nav-list__item"><NavLink to='/Cont' className={({isActive}) => isActive ? activeLink : pasLink}>Contacts</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navigation