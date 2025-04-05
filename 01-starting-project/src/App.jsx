const reactDescriptions = ["기본적인", "중요한", "핵심적인"];

function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

function Header() {
    const description = reactDescriptions[genRandomInt(2)];
    return (
        <header>
            <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>모든 앱 제작에 필요한 {description} React 개념</p>
        </header>
    );
}

function App() {
    return (
        <div>
            <Header></Header>
            <main>
                <h2>시작하기!</h2>
            </main>
        </div>
    );
}

export default App;
