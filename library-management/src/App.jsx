import React, { useState, useEffect } from "react";
import Counter from "./Countor";

function App() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Mounting
    console.log("Timer Component Mounted");

    const interval = setInterval(() => {
      setSeconds(prev => prev + 1); // Updating
    }, 5000);

    // Unmounting
    return () => {
      clearInterval(interval);
      console.log("Timer Component Unmounted");
    };
  }, []);
  return (
    <div>
      <Counter/>
      <h2>Timer: {seconds} seconds</h2>
    </div>
  );
}	
export default App;
