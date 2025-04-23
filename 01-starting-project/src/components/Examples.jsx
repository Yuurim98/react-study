import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TapButton from "../components/TapButton.jsx";

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
        console.log(selectedButton + "클릭");
        setSelectedTopic(selectedButton);
    }

    let tabContent = <p>주제를 선택하세요.</p>;

    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        );
    }

    return (
        <section id="examples">
            <h2>Examples</h2>
            <menu>
                <TapButton
                    isSelected={selectedTopic === "components"}
                    onSelect={() => handleSelect("components")}
                >
                    Components
                </TapButton>
                <TapButton
                    isSelected={selectedTopic === "jsx"}
                    onSelect={() => handleSelect("jsx")}
                >
                    JSX
                </TapButton>
                <TapButton
                    isSelected={selectedTopic === "props"}
                    onSelect={() => handleSelect("props")}
                >
                    Props
                </TapButton>
                <TapButton
                    isSelected={selectedTopic === "state"}
                    onSelect={() => handleSelect("state")}
                >
                    State
                </TapButton>
            </menu>
            {tabContent}
        </section>
    );
}
