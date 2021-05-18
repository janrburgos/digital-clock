import "./DigitalClock.css";
import React from "react";

class DigitalClock extends React.Component {
  state = {
    time: new Date(),
    hour: new Date().getHours(),
    minute: new Date().getMinutes(),
    second: new Date().getSeconds(),
    timeFormat: 12,
    font: "Xahn",
    fontColor: "black",
    bgColorRef: 20,
  };

  componentDidMount() {
    this.intervalID = setInterval(() => this.updateClock(), 1000);
  }

  updateClock() {
    this.setState({
      time: new Date(),
      hour: new Date().getHours(),
      minute: new Date().getMinutes(),
      second: new Date().getSeconds(),
    });
    this.changeBackground();
  }

  changeBackground() {
    if (this.state.hour < 12) {
      this.setState({
        bgColorRef: 14 + 6 * this.state.hour,
      });
    } else {
      this.setState({
        bgColorRef: 86 - 6 * (this.state.hour - 12),
      });
    }
  }

  render() {
    return (
      <div
        className="DigitalClock"
        style={{
          color: this.state.fontColor,
          backgroundColor: `hsl(160, 180%, ${this.state.bgColorRef}%)`,
          fontFamily: `${this.state.font}, monospace`,
        }}
      >
        <div className="clock">
          <p className="time">
            {this.state.timeFormat === 24 && this.state.hour < 10 && "0"}
            {this.state.timeFormat === 12 && this.state.hour === 0
              ? "12"
              : this.state.timeFormat === 12 && this.state.hour > 12
              ? this.state.hour - 12
              : this.state.hour}
            :
            {this.state.minute < 10
              ? `0${this.state.minute}`
              : this.state.minute}
            :
            {this.state.second < 10
              ? `0${this.state.second}`
              : this.state.second}{" "}
            {this.state.timeFormat === 12 && this.state.hour < 12
              ? "AM"
              : this.state.timeFormat === 12 && this.state.hour >= 12
              ? "PM"
              : null}
          </p>
          <p className="time-zone">{this.state.time.toTimeString().slice(8)}</p>
        </div>
        <div className="color-buttons">
          <div className="button-title">COLORS</div>
          <div className="button-group">
            <button
              className="black"
              onClick={() =>
                this.setState({
                  fontColor: "black",
                })
              }
            >
              Black
            </button>
            <button
              className="red"
              onClick={() =>
                this.setState({
                  fontColor: "red",
                })
              }
            >
              Red
            </button>
            <button
              className="green"
              onClick={() =>
                this.setState({
                  fontColor: "green",
                })
              }
            >
              Green
            </button>
          </div>
        </div>
        <div className="font-buttons">
          <div className="button-title">FONTS</div>
          <div className="button-group">
            <button
              className="xahn"
              onClick={() =>
                this.setState({
                  font: "Xahn Mono, monospace",
                })
              }
            >
              Xahn
            </button>
            <button
              className="oxygen"
              onClick={() =>
                this.setState({
                  font: "Oxygen Mono, monospace",
                })
              }
            >
              Oxygen
            </button>
            <button
              className="major"
              onClick={() =>
                this.setState({
                  font: "Major Mono Display, monospace",
                })
              }
            >
              Major
            </button>
          </div>
        </div>
        <div className="format-button">
          <button
            onClick={() => {
              if (this.state.timeFormat === 12) {
                this.setState({
                  timeFormat: 24,
                });
              } else {
                this.setState({
                  timeFormat: 12,
                });
              }
            }}
          >
            Change Hour Format
          </button>
        </div>
      </div>
    );
  }
}

export default DigitalClock;
