import App from "./App"
import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

function start() {
    // Create main component.
    ReactDOM.createRoot(document.getElementById("ROOT")).render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    )
    // ReactDOM.render(
    //     <React.StrictMode>
    //         <App />
    //     </React.StrictMode>,
    //     document.getElementById("ROOT")
    // )

    // Remove splash screen.
    removeSplashScreen()
}

function removeSplashScreen() {
    const splash = document.getElementById("SPLASH")
    if (splash) {
        splash.classList.add("hide")
        const VANISHING_TIME = 1000
        window.setTimeout(() => {
            const parent = splash.parentNode
            if (parent) parent.removeChild(splash)
        }, VANISHING_TIME)
    }
}

start()
