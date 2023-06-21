import { useParams } from "react-router-dom"
import projectData from "../../particles/cardsData"
import ProjBtn from "../../components/ProjeBtn/ProjeBtn"


function ProjPage() {

    const { id } = useParams()
    const project = projectData[id]
    return (
        <main className="section">
            <div className="container">
                <div className="project-details">

                    <h1 className="title-1">{project.title}</h1>

                    <img src={project.bigImg} alt="" className="project-details__cover" />

                    <div className="project-details__desc">
                        <p>{project.skils}</p>
                    </div>

                    {project.gitHubLink && (<ProjBtn link={project.gitHubLink} />)}
                </div>
            </div>
        </main>
    )
}

export default ProjPage