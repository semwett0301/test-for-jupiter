import "./styles/app-styles.css";
import Header from "./components/functional-components/Header/Header";
import Representing from "./components/functional-components/Representing/Representing";
import Navbar from "./components/functional-components/Navbar/Navbar";
import Grid from "./components/functional-components/Grid/Grid";
import Loader from "./components/functional-components/Loader/Loader";
import React from "react";



function App() {
    return (
        <div id={"main-element"}>
            <Header/>
            <Representing/>
            <Navbar/>
            <Grid/>
            <Loader/>
        </div>
    );
}

export default App;
