import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { PlacesMap } from "../components/PlacesMap";
import TimeSlider from "../components/TimeSlider";

class NavBar extends Component {
  render() {
    return (
      <div>
        <Tabs>
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
          <TabPanel>
            <h2>Places</h2>
            <PlacesMap />
          </TabPanel>
          <TabPanel>
            <h2>People</h2>
            <TimeSlider />
          </TabPanel>
          <TabPanel>
            <h2>Home</h2>
          </TabPanel>
          <TabPanel>
            <h2>Chattels</h2>
          </TabPanel>
          <TabPanel>
            <h2>Essays</h2>
          </TabPanel>
          <TabPanel>
            <h2>Analytics</h2>
          </TabPanel>
          <TabPanel>
            <h2>Resources</h2>
          </TabPanel>
          <TabPanel>
            <h2>About</h2>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}
export default NavBar;
