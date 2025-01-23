import About from "./components/About/About"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"

function App() {

    return (
        <div className="main">
             <Header />
            <div className="main__wrapper">
                <Hero />
                <About />
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
