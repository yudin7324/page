import Header from "./components/Header/Header"

function App() {

    return (
        <div className="main">
             <Header />
            <div className="main__wrapper">
                <section className="hero">
                    <div className="hero-text">
                        <h1>Привет, я Илья!</h1>
                        <p>Frontend Developer | React, TypeScript, CSS</p>
                    </div>
                    <img src="your-photo.jpg" alt="Your Photo" />
                </section>

                <section id="about" className="section">
                    <div className="container">
                        О себе
                    </div>
                </section>
                <section id="skills" className="section">
                    <div className="container">
                    Навыки
                    </div>
                </section>
                <section id="experience" className="section">Опыт</section>
                <section id="projects" className="section">Проекты</section>
                <section id="contact" className="section">Контакты</section>
                <footer>footer</footer>
            </div>
        </div>
    )
}

export default App
