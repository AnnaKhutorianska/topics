import React from "react"

export class GetSnapBefUpd extends React.Component {
  state = {
    name: 'name 1',
  };
  
  componentDidMount() {
    setTimeout(() => {
      this.setState({ name: 'name 2' });
    }, 1000);
  }
  
  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById('prev').innerHTML =
      'prev name: ' + prevState.name;
  }
  
  componentDidUpdate() {
    document.getElementById('new').innerHTML =
      'cur Nnme: ' + this.state.name;
  }
  
  render() {
    return (
      <div>
        <div id="prev"></div>
        <div id="new"></div>
      </div>
    );
  }
}