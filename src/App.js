import { useState } from "react"
import './style.css'
import ModalSection from './Components/Modal'
import DataContainer from './Components/Data'

const App = () => {
    const [Modal, setModal] = useState(false)
    const Body = document.querySelector("body")

    document.body.addEventListener('keydown', (e) => {
        if (e.key === "Escape") {
            if ( !Modal ) return false
            else {
                Body.removeAttribute("class")
                setModal(false)
            }
        }
    });

    const ClickButton = () => {
        Body.setAttribute("class", "active"); setModal(true)
    }

    const ModalClick = (e) => {
        if ( e.target !== e.currentTarget ) return true
        else setModal(false); Body.removeAttribute("class")
    }

    return(
        <>
            <section id="app">
                <h1>Text For Tester Modal Here</h1>
                <button onClick={ ClickButton } id="modal-button">Test Modal Here</button>
                <ModalSection
                    ModalStatus={ Modal }
                    ModalClick={ ModalClick }
                    ModalData={ <DataContainer /> }
                />
            </section>
        </>
    )
}

export default App