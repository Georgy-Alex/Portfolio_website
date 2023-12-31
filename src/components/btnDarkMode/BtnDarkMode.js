import { useState, useEffect } from "react"

import sun from "./../../img/icons/sun.svg"
import moon from "./../../img/icons/moon.svg"
import "./btnDarkMode.css"


function BtnDarkMode() {

    const [darkMode, setDarkMode] = useState('light')

    useEffect(() =>{
        if(darkMode === 'dark'){
            document.body.classList.add('dark')
        }else{
            document.body.classList.remove('dark')
        }

    }, [darkMode])

    const switching = () =>{
        setDarkMode((value) => value === 'light' ? 'dark' : 'light')
    }
    return (
        <button className="dark-mode-btn" onClick={switching}>
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
        </button>
    )
}

export default BtnDarkMode