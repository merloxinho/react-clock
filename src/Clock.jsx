import React, {useState, useEffect} from 'react';

function Clock(){

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, [])

    function padZero(number){
        return (number < 10 ? '0' : '') + number;
    }

    function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
    

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`
    }

    return(
        <div className='clock-container'>
            <div className="clock">
                <span>
                    <h1>{formatTime()}</h1>
                </span>
            </div>
            <div className="blur"></div>
        </div>
    )
}

export default Clock;