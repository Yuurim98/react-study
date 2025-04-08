import reactImg from "./assets/react-core-concepts.png";
import componentsImg from "./assets/components.png";

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

function CoreConcept(props) {
    return (
        <li>
            <img src={props.img} alt={props.title} />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
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
                        <CoreConcept
                            title="Components"
                            description="핵심 UI 구성 요소"
                            img={componentsImg}
                        />
                        <CoreConcept title="Props" />
                        <CoreConcept />
                        <CoreConcept />
                    </ul>
                </section>
            </main>
        </div>
    );
}

export default App;
