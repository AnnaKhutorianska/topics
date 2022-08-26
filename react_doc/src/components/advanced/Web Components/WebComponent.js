import React, {useState} from "react";
import ReactWebComponent from 'react-web-component';

// export const WebComponent = () => {
//   const [name, setName] = useState("");

//   return (
//     <div>
//       <div>{name}</div>
//       <br />
//       <input style={{backgroundColor: 'yellowgreen', color: 'brown'}} onChange={e => setName(e.target.value)} type="text" />
//     </div>
//   );
// };

// ReactWebComponent.create(<WebComponent />, "web-component");


class ShadowView extends React.Component {
  attachShadow = (host) => {
    host.attachShadow({ mode: "open" });
  };
 
  render() {
    const { children } = this.props;
 
    return <div ref={this.attachShadow}>{children}</div>;
  }
}
 
export function WebComponent() {
  return (
    <ShadowView>
      <span>text</span>
    </ShadowView>
  );
}