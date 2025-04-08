import reactImg from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "./data.js";

const reactDescriptions = ["기본적인", "중요한", "핵심적인"];

function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

function Header() {
    const description = reactDescriptions[genRandomInt(2)];
    return (
        <header>
            <img src={reactImg} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>모든 앱 제작에 필요한 {description} React 개념</p>
        </header>
    );
}

function CoreConcept({ image, title, description }) {
    return (
        <li>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
}

function App() {
    return (
        <div>
            <Header />
            <main>
                <section id="core-concepts">
                    <h2>핵심 개념</h2>
                    <ul>
                        <CoreConcept {...CORE_CONCEPTS[0]} />
                        <CoreConcept {...CORE_CONCEPTS[1]} />
                        <CoreConcept {...CORE_CONCEPTS[2]} />
                        <CoreConcept {...CORE_CONCEPTS[3]} />
                    </ul>
                </section>
            </main>
        </div>
    );
}

export default App;
