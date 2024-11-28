import React, { useState, useEffect } from 'react';

const Clock: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex card text-center p-2 ">
      <h1>Current Time</h1>
      <p>{currentTime.toLocaleTimeString()}</p>
    </div>
  );
};

export default Clock;