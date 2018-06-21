import React, { Component } from "react";
import { Range } from "rc-slider";
import "rc-slider/assets/index.css";

// BrainStorm Code -- Idea of how to make slider remove markers
// timeSlider(geojson, sliderValue) {
//   return geojson.map(time => {
//     if (geojson.time > sliderValue) {
//       return <GeoJSON With corresponding data/>
//     } else {
//       return nothing
//     }
//   });
// }
const style = { width: 400, margin: 50 };

class TimeSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lowerBound: 1100,
      upperBound: 2018,
      value: [1100, 1250]
    };
  }
  log(value) {
    console.log(value); //eslint-disable-line
  }
  onLowerBoundChange = e => {
    this.setState({ lowerBound: +e.target.value });
  };
  onUpperBoundChange = e => {
    this.setState({ upperBound: +e.target.value });
  };
  onSliderChange = value => {
    this.log(value);
    this.setState({
      value
    });
  };
  handleApply = () => {
    const { lowerBound, upperBound } = this.state;
    this.setState({ value: [lowerBound, upperBound] });
  };
  render() {
    return (
      <div>
        <label>LowerBound: </label>
        <input
          type="number"
          value={this.state.lowerBound}
          onChange={this.onLowerBoundChange}
        />
        <br />
        <label>UpperBound: </label>
        <input
          type="number"
          value={this.state.upperBound}
          onChange={this.onUpperBoundChange}
        />
        <br />
        <button onClick={this.handleApply}>Apply</button>
        <br />
        <br />
        <Range
          allowCross={false}
          value={this.state.value}
          onChange={this.onSliderChange}
          style={style}
        />
      </div>
    );
  }
}
export default TimeSlider;
