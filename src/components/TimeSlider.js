import React, { Component } from "react";
import Slider from "rc-slider";
// import { geojson } from "../data/places";
import "rc-slider/assets/index.css";

const style = { width: 400, margin: 50 };
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

class TimeSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lowerBound: 1100,
      upperBound: 1250,
      value: [1100, 1250],
      maxValue: 2018
    };
  }
  log(value) {
    console.log(value);
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
  // dynamicallyChangeMarkers(feature, lowerBound, upperBound) {
  //   return feature.properties.map(time => {
  //     if (
  //       feature.properties.details["earliest-attestation"] >
  //         lowerBoundSliderValue &&
  //       feature.properties.details["earliest-attestation"] <
  //         upperBoundSliderValue
  //     ) {
  //       return <GeoJSON With corresponding data />;
  //     } else {
  //       return nothing;
  //     }
  //   });
  // }
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
          max={this.state.maxValue}
          tipFormatter={value => `${value}`}
        />
      </div>
    );
  }
}
export default TimeSlider;
