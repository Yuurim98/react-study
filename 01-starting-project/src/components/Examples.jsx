import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TapButton from "../components/TapButton.jsx";
import Section from "./Section.jsx";
import Taps from "./Taps.jsx";

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
        <Section title="Examples" id="examples">
            <Taps
                buttonsContainer="menu"
                buttons={
                    <>
                        <TapButton
                            isSelected={selectedTopic === "components"}
                            onClick={() => handleSelect("components")}
                        >
                            Components
                        </TapButton>
                        <TapButton
                            isSelected={selectedTopic === "jsx"}
                            onClick={() => handleSelect("jsx")}
                        >
                            JSX
                        </TapButton>
                        <TapButton
                            isSelected={selectedTopic === "props"}
                            onClick={() => handleSelect("props")}
                        >
                            Props
                        </TapButton>
                        <TapButton
                            isSelected={selectedTopic === "state"}
                            onClick={() => handleSelect("state")}
                        >
                            State
                        </TapButton>
                    </>
                }
            >
                {tabContent}
            </Taps>
        </Section>
    );
}
