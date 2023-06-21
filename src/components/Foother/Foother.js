import "./Foother.css"
import vk from "./../../img/icons/vk.svg"
import inst from "./../../img/icons/instagram.svg"
import git from "./../../img/icons/gitHub.svg"

function Foother() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item"><a href="#!" target="blank"><img src={vk} alt="Link" /></a></li>
                        <li className="social__item"><a href="#!" target="blank"><img src={inst} alt="Link" /></a></li>
                        <li className="social__item"><a href="https://github.com/Georgy-Alex?tab=repositories" target="blank"><img src={git} alt="Link" /></a></li>
                    </ul>
                    <div className="copyright">
                        <p>© 2023 frontend-dev.com</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Foother