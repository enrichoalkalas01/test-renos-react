const Modal = (props) => {
    return(
        <>
            <div id="modal-box" className={ props.ModalStatus ? "active" : "" }>
                <div className="wrapper-box" onClick={ props.ModalClick }>
                    <div className="wrapper-content">
                        <div className="modal-headers">
                            <h1>This is headers</h1>
                            <button id="btn-close" onClick={ props.ModalClick }>Close</button>
                        </div>
                        <div className="modal-content">
                            { props.ModalData }
                        </div>
                        <div className="modal-footer">
                            <p>This is footer</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal