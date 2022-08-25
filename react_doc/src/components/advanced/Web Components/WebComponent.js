import React, {useState} from "react";
import ReactWebComponent from 'react-web-component';

export const WebComponent = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <div>{name}</div>
      <br />
      <input style={{backgroundColor: 'yellowgreen', color: 'brown'}} onChange={e => setName(e.target.value)} type="text" />
    </div>
  );
};

ReactWebComponent.create(<WebComponent />, "web-component");
