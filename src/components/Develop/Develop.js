import { NavLink } from "react-router-dom"
import "./Develop.css"

function Develop({ title, img, index}) {
    return (
        <NavLink to={`/Dev/${index}`}>
            <li className="project">
                <img src={img} alt="Project img" className="project__img" />
                <h3 className="project__title">{title}</h3>
            </li>
        </NavLink>
    )
}

export default Develop