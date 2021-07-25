import React, {useState} from 'react';


const Timer = () => {
    const [timer, setTimer] = useState("00:00:00");
    const [time, setTime] = useState(0);
    var hr = 0;
    var min = 0;
    var sec = 0;
    var stoptime = true;
    var dontStart = false;
    
    function timerCycle() {
        if (!stoptime) {
            sec = parseInt(sec);
            min = parseInt(min);
            hr = parseInt(hr);

            sec = sec + 1;

            if (sec === 60) {
                min = min + 1;
                sec = 0;
            }
            if (min === 60) {
                hr = hr + 1;
                min = 0;
                sec = 0;
            }

            if (sec < 10 || sec === 0) {
                sec = '0' + sec;
            }
            if (min < 10 || min === 0) {
                min = '0' + min;
            }
            if (hr < 10 || hr === 0) {
                hr = '0' + hr;
            }

            setTimer(hr + ':' + min + ':' + sec);

            setTime(setTimeout( timerCycle, 1000));
        }
    }
    const startTimer = () => {
        if (stoptime && !dontStart) {
            stoptime = false;
            dontStart = true;
            timerCycle();
        }
    }
    const stopTimer = () => {
        if (stoptime) {
            stoptime = true;
            dontStart = false;
            clearTimeout(time);
        }
    }
    
    const resetTimer = () => {
        setTimer("00:00:00");
        stoptime = true;
        clearTimeout(time);
        hr = 0;
        sec = 0;
        min = 0;
    }

    return (
        <div>
            <div className="Box-timer">
                <div id="watch">
                    {timer}
                </div>

                <ul id="buttons">
                    <li><button onClick={(e) => startTimer()}>Start</button></li>
                    <li><button onClick={(e) => stopTimer()}>Stop</button></li>
                    <li><button onClick={(e) => resetTimer()}>Reset</button></li>
                </ul>
            </div>
        </div>
    );
}

export default Timer;