import React from "react";
import Button from "./Button";
import TextBox from "./TextBox";
import "./styles.css";

class App extends React.Component {
  state = {
    textData: " "
  };
  onTextBoxChange = e => {
    this.setState({
      textData: e.target.value
    });
  };
  onSubmit = e => {
    const data = this.state.textData;
    e.preventDefault();
    window.alert(data);
  };
  ResetClear = e => {
    e.preventDefault();
    this.setState({
      textData: ""
    });
  };
  render() {
    return (
      <div>
        <TextBox
          content={this.state.textData}
          onTextBoxChange={this.onTextBoxChange}
        />
        <br />
        <Button
          value="Submit"
          disable={!this.state.textData}
          onClick={this.onSubmit}
          className={this.state.textData === "" ? "btnDisable" : "btnEnable"}
        />
        <br />
        <br />
        <Button value="Reset" onClick={this.ResetClear} />
      </div>
    );
  }
}
export default App;
