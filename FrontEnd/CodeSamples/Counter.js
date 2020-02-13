import React, { useEffect, useState, useRef } from 'react';
import moment from 'moment';

const Counter = () => {
    const timer = useRef(null);
    const [currentTime, setCurrentTime] = useState(moment());
    useEffect(() => { console.log('changed')}, [currentTime]);
    useEffect(() => {
        timer.current = setInterval(() => {
            setCurrentTime(current => moment(current.add(1, 's')));
        }, 1000); // every seconds
        return () => clearInterval(timer.current);
    }, []);
    return <div>
        {currentTime.format('HH:mm:ss')}
    </div>;
};

export default Counter;
