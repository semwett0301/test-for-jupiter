import "./styles/app-styles.css";
import Header from "./components/functional-components/Header/Header";
import Representing from "./components/functional-components/Representing/Representing";
import Main from "./components/functional-components/Main/Main";



function App() {
    return (
        <div id={"main-element"}>
            <Header/>
            <Representing/>
            <Main/>
        </div>
    );
}

export default App;
