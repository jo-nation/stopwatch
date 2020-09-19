import React, { useState } from "react";

export const Stopwatch = ({ interval }) => {
    const [intervalId, setIntervalId] = useState(null);
    const [totalMilliseconds, setTotalMilliseconds] = useState(0);

    const getFormattedTime = () => {
        const milliseconds = `${totalMilliseconds % 1000}`.substring(0, 2).padStart(2, "0");
        const seconds = `${Math.floor((totalMilliseconds / 1000) % 60)}`.padStart(2, "0");
        const minutes = `${Math.floor(totalMilliseconds / (1000 * 60))}`.padStart(2, "0");
        return `${minutes}:${seconds}:${milliseconds}`;
    }

    const reset = () => {
        setTotalMilliseconds(0);
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(null);
        }
    }

    const start = () => {
        if (!intervalId) {
            const intervalId = setInterval(() => {
                setTotalMilliseconds(totalMilliseconds => totalMilliseconds + interval);
            }, interval);
            setIntervalId(intervalId);
        }
    }

    const stop = () => {
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(null);
        }
    }

    return (
        <div className="stopwatch">
            <span className="time">{getFormattedTime()}</span>
            <div className="buttons-row">
                <button className="button stop" onClick={() => stop()}>stop</button>
                <button className="button reset" onClick={() => reset()}>reset</button>
                <button className="button start" onClick={() => start()}>start</button>
            </div>
    </div>);
}