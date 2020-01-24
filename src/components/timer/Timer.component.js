import React, { Component } from "react";
import "./timer.style.scss";
import Heading from "../ui/heading/Heading.component.js";

class Countdown extends Component {
    componentDidMount() {
        const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;

        let countDown = new Date("Sep 30, 2020 00:00:00").getTime(),
            x = setInterval(function() {
                let now = new Date().getTime(),
                    distance = countDown - now;

                document.getElementById("days").innerText = Math.floor(
                    distance / day
                );
                document.getElementById("hours").innerText = Math.floor(
                    (distance % day) / hour
                );
                document.getElementById("minutes").innerText = Math.floor(
                    (distance % hour) / minute
                );
                document.getElementById("seconds").innerText = Math.floor(
                    (distance % minute) / second
                );

                //do something later when date is reached
                //if (distance < 0) {
                //  clearInterval(x);
                //  'IT'S MY BIRTHDAY!;
                //}
            }, second);
    }

    render() {
        return (
            <div class="counter d-flex w-100 flex-column align-items-center">
                <Heading heading="Time remaining" />
                <div className="mt-3 w-75">
                    <div className="time-wrapper w-100 d-flex justify-content-between">
                        <div>
                            <span id="days"></span>
                            <span className="subText">days</span>
                        </div>
                        <div>
                            <span>:</span>
                        </div>
                        <div>
                            <span id="hours"></span>
                            <span className="subText">Hours</span>
                        </div>
                        <div>
                            <span>:</span>
                        </div>
                        <div>
                            <span id="minutes"></span>
                            <span className="subText">Minutes</span>
                        </div>
                        <div>
                            <span>:</span>
                        </div>
                        <div>
                            <span id="seconds"></span>
                            <span className="subText">Seconds</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Countdown;
