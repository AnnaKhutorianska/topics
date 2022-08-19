import React, { useState, unstable_Profiler as Profiler } from "react";

const ProfilerComp = () => {
  const [change, setChange] = useState(true);

  return (
    <div>
        <button onClick={() => setChange(!change)}>Click Here!</button>
        {change ? (
          <h1>Welcome</h1>
        ) : (
          <h1>Here</h1>
        )}
    </div>
  );
};

export default ProfilerComp;
