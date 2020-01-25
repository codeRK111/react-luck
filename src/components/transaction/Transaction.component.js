import React, { Component } from "react";
import "./transaction.style.scss";

class Transaction extends Component {
    render() {
        return (
            <div className="d-flex flex-column w-100 transaction mt-3">
                <div className="w-100 d-flex justify-content-center mb-5">
                    <img
                        className="qr-code"
                        src="https://miro.medium.com/max/1424/1*sHmqYIYMV_C3TUhucHrT4w.png"
                        alt=""
                    />
                </div>
                <div className="w-100 d-flex justify-content-center">
                    <div className="form-group w-100">
                        <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="address"
                        />
                    </div>
                </div>
                <div className="w-100 d-flex justify-content-center mb-3">
                    <button className="deposit">Submit</button>
                </div>
            </div>
        );
    }
}

export default Transaction;
