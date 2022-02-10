import { useState } from "react"
import './style.css'

const App = () => {
    const [Modal, setModal] = useState(false)

    const ClickButton = () => {
        setModal(true)
    }

    const ModalClick = (e) => {
        if ( e.target !== e.currentTarget ) return true
        else setModal(false)
    }

    return(
        <>
            <section id="app">
                <h1>Text For Tester Modal Here</h1>
                <button onClick={ ClickButton } id="modal-button">Test Modal Here</button>
                <div id="modal-box" className={ Modal ? "active" : "" }>
                    <div className="wrapper-box" onClick={ ModalClick }>
                        <div className="wrapper-content">
                            Tester
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default App