export default function TapButton(props) {
    function handleClick() {
        console.log("클릭");
    }
    return (
        <li>
            <button onClick={handleClick}>{props.children}</button>
        </li>
    );
}
