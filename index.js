import React from "react"
import ReactDOM from "react-dom"
import Info from "./components/Info.js"
import About from "./components/About.js"
import Interests from "./components/Interests.js"
import Footer from "./components/Footer.js"

export default function App() {
    return (
        <>
         <Info />
         <About />
         <Interests />
         <Footer />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))