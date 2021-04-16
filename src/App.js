// create your App component here

import React from "react";

class App extends React.Component {
  componentDidMount() {
    console.log("hi");
    fetch("http://api.open-notify.org/astros.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
  render() {
    return <div>hi</div>;
  }
}

export default App;
