export default function Taps({ children, buttons, ButtonsContainer = "menu" }) {
    // const ButtonsContainer = buttonsContainer;
    return (
        <>
            <ButtonsContainer>{buttons}</ButtonsContainer>
            {children}
        </>
    );
}
