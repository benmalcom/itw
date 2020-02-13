import React, { useEffect, useState } from 'react';
import moment from 'moment';

const Counter = () => {
    let timer = null;
    const [currentTime, setCurrentTime] = useState(moment());
    useEffect(() => {
        timer = setTimeout(() => {
            setCurrentTime(current => current.add(1, 'seconds'));
        }, 1000); // every seconds
        return () => clearTimeout(timer);
    }, []);
  return <div>
      {currentTime.format('HH:mm:ss')}
  </div>;
};

export default Counter;