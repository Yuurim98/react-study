import componentsImg from "./assets/components.png";
import propsImg from "./assets/config.png";
import jsxImg from "./assets/jsx-ui.png";
import stateImg from "./assets/state-mgmt.png";

export const CORE_CONCEPTS = [
    {
        image: componentsImg,
        title: "Components",
        description:
            "핵심 UI 구성 요소 - 여러 구성 요소를 결합하여 사용자 인터페이스를 구성한다.",
    },
    {
        image: jsxImg,
        title: "JSX",
        description:
            "렌더링될 실제 마크업을 정의하는 (동적일 수 있는) HTML(ish) 코드를 반환한다.",
    },
    {
        image: propsImg,
        title: "Props",
        description:
            "입력 데이터를 전달하여 구성 요소를 구성할 수 있도록(재사용할 수 있도록) 만든다.",
    },
    {
        image: stateImg,
        title: "State",
        description:
            "변경 시 컴포넌트가 다시 렌더링되고 UI가 업데이트되는 리액트 관리 데이터.",
    },
];
