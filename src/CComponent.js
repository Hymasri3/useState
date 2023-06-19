import React from "react";
class CComponent extends React.Component {
  state = { message: "Class Component", time: new Date().toString() };

  componentDidMount() {
    console.log("I am from ComponentDidMount");
    this.intervalId = setInterval(this.showDate, 1000);
  }

  componentDidUpdate() {
    console.log("I am from ComponentDidUpdate");
  }
  componentWillUnmount() {
    console.log("I am from componentWillUnmount");
    clearInterval(this.intervalId);
  }

  showDate = () => {
    this.setState({ time: new Date().toString() });
  };

  render() {
    return (
      <div>
        {this.state.message}
        <div>{this.state.time}</div>
      </div>
    );
  }
}
export default CComponent;
