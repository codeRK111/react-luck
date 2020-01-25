import React, { Component } from "react";
import "./game.style.scss";

import Modal from "../ui/modal/Modal.component.js";
import Transaction from "../transaction/Transaction.component.js";

class Game extends Component {
    state = {
        openModal: false
    };

    toggleModal = modalState => this.setState({ openModal: modalState });

    render() {
        const { openModal } = this.state;
        return (
            <div className="game w-100 d-flex flex-column align-items-center">
                <Modal modalIsOpen={openModal} onClose={this.toggleModal}>
                    <Transaction />
                </Modal>
                <div className="play-wrapper">
                    <button className="game--play">
                        <i className="fas fa-gamepad mr-2 text-light"></i>
                        Play now
                    </button>
                </div>
                <div className="buy-wrapper mt-5">
                    <button
                        className="game--deposit"
                        onClick={() => this.toggleModal(true)}
                    >
                        Deposit
                    </button>
                    <button className="game--luck">Buy luck</button>
                </div>
            </div>
        );
    }
}

export default Game;
