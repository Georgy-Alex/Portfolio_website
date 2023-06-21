
import gitHubBlack from "./../../img/icons/gitHub-black.svg"

function ProjBtn({link}) {
    return (
        <a href={link} target="blank" className="btn-outline">
            <img src={gitHubBlack} alt="" />
            GitHub repo
        </a>
    )
}

export default ProjBtn