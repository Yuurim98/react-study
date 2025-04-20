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

export const EXAMPLES = {
    components: {
        title: "Components",
        description:
            "컴포넌트는 리액트 애플리케이션의 기본 구성 요소이다. HTML, 선택적 CSS, JavaScript 코드를 하나로 묶은 독립적인 모듈이며, 특정 UI 출력을 담당한다 (화면에 어떤 부분을 보여줄지 정의하는 작은 블록)",
        code: `
  function Welcome() {
    return <h1>Hello, World!</h1>;
  }`,
    },
    jsx: {
        title: "JSX",
        description:
            "JSX는 자바스크립트의 문법 확장이다. HTML처럼 보이지만, 자바스크립트의 모든 기능을 사용할 수 있는 템플릿 문법이다. (HTML과 JavaScript를 섞어 쓸 수 있게 해주는 문법, 동적인 데이터 화면에 출력 가능)",
        code: `
  <div>
    <h1>Welcome {userName}</h1>
    <p>Time to learn React!</p>
  </div>`,
    },
    props: {
        title: "Props",
        description:
            "컴포넌트는 props라는 입력값을 받을 수 있다. props는 컴포넌트에 데이터를 전달할 때 사용되며, 함수의 매개변수와 비슷한 역할을 한다. (부모 컴포넌트가 자식 컴포넌트에게 주는 정보)",
        code: `
  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }`,
    },
    state: {
        title: "State",
        description:
            "state는 리액트 컴포넌트가 시간에 따라 변화하는 데이터를 가질 수 있도록 도와준다. 사용자 입력, 네트워크 응답 등 외부 요인에 따라 컴포넌트의 출력(UI)이 바뀔 수 있도록 하는 요소이다. (변할 수 있는 컴포넌트의 내부 데이터)",
        code: `
  function Counter() {
    const [isVisible, setIsVisible] = useState(false);
  
    function handleClick() {
      setIsVisible(true);
    }
  
    return (
      <div>
        <button onClick={handleClick}>Show Details</button>
        {isVisible && <p>Amazing details!</p>}
      </div>
    );
  }`,
    },
};
