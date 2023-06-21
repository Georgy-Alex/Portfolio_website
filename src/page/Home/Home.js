import Header from "../../components/Header/Header"

function Home() {
    return (
        <div className="Home">
            <Header />
            <main className="section">
                <div className="container">

                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Frontend</h2>
                            <p>JavaScript, ReactJS, HTML, CSS, NPM</p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Backend</h2>
                            <p>Python, SQL</p>
                        </li>
                    </ul>

                </div>
            </main>
        </div>
    )
}

export default Home