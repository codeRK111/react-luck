import React from "react";
import Modal from "react-modal";
import "./modal.style.scss";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#343a40",
        minWidth: "400px",
        border: 0,
        boxShadow: "inset 0 0 10px #343a40"
    },
    overlay: {
        backgroundColor: "rgba(0, 0, 0, .9)"
    }
};

Modal.setAppElement("#root");

class ModalComponent extends React.Component {
    constructor() {
        super();

        this.state = {
            modalIsOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.modalIsOpen !== prevProps.modalIsOpen) {
            this.setState({ modalIsOpen: this.props.modalIsOpen });
        }
    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = "#f00";
    }

    closeModal() {
        //this.setState({ modalIsOpen: false });
        this.props.onClose(false);
    }

    render() {
        return (
            <div>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    // onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div>
                        <div className="d-flex w-100 justify-content-end">
                            <i
                                className="fas fa-times closeIcon"
                                onClick={this.closeModal}
                            ></i>
                        </div>
                        {this.props.children}
                    </div>
                </Modal>
            </div>
        );
    }
}

export default ModalComponent;
