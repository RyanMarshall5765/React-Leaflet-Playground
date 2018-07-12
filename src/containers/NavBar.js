import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PlacesMap from "../components/PlacesMap";
import TimeSlider from "../components/TimeSlider";

class NavBar extends Component {
  render() {
    return (
      <div>
        <Tabs>
          <h1>
            <TabList>
              <Tab>Places</Tab>
              <Tab>People</Tab>
              <Tab>Home</Tab>
              <Tab>Chattels</Tab>
              <Tab>Essays</Tab>
              <Tab>Analytics</Tab>
              <Tab>Resources</Tab>
              <Tab>About</Tab>
            </TabList>
          </h1>
          <TabPanel>
            <PlacesMap />
            <hr />
            <TimeSlider />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}
export default NavBar;
