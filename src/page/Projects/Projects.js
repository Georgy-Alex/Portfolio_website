
import Project from "../../components/Project/Project"
import projectData from "../../particles/cardsData"

function Projects() {
    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">
                    {projectData.map((proj, index) => {
                        return(<Project key={proj.title} title={proj.title} img={proj.img} index={index}/>)
                    })}
                </ul>
            </div>
        </main>
    )
}

export default Projects