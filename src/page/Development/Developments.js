
import Develop from "../../components/Develop/Develop"
import developData from "../../particles/developData"

function Developments() {
    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">
                    {developData.map((proj, index) => {
                        return (<Develop key={proj.title} title={proj.title} img={proj.img} index={index}/>)
                    })}
                </ul>
            </div>
        </main>
    )
}

export default Developments