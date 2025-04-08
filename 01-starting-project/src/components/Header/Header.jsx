import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css";

const reactDescriptions = ["기본적인", "중요한", "핵심적인"];

function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
    const description = reactDescriptions[genRandomInt(2)];
    return (
        <header>
            <img src={reactImg} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>모든 앱 제작에 필요한 {description} React 개념</p>
        </header>
    );
}
