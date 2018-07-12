import React, { Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

class TimeSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lowerBound: 1105,
      upperBound: 1250,
      value: [1100, 1250],
      maxValue: 2018,
      style: { width: 400, margin: 50 }
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

  handleApply = () => {
    const { lowerBound, upperBound } = this.state;
    this.setState({ value: [lowerBound, upperBound] });
  };

  compareDate = value => {
    this.setState({
      value
    });
    // return geojson.features.map(feature => {
    //   if (
    //     feature.properties.place.details["earliest-attestation"] >=
    //       this.state.lowerBound &&
    //     feature.properties.place.details["earliest-attestation"] <=
    //       this.state.upperBound
    //   ) {
    //     return console.log("Working");
    //   } else {
    //     return null;
    //   }
    // });
  };
  // Thought process: Map over the GeoJSON to see the earliest attestation
  // Compare all of these dates to the upperbound and lowerbound values of the time slider
  // Return the GeoJSON points that match this criteria
  // Filter function to remove data that does not meet the criteria to be displayed?
  // Where do I return this GeoJSON?

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
          onChange={this.compareDate}
          style={this.state.style}
          max={this.state.maxValue}
          tipFormatter={value => `${value}`}
        />
      </div>
    );
  }
}

export default TimeSlider;
