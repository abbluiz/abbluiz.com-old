import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import Activity from '../Activity/Activity';
import Portfolio from '../Portfolio/Portfolio';
import About from '../About/About';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  }
};

export default class NavigationTabs extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      slideIndex: 0,
    };

  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    return(
      <div>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          <Tab label="Activity" value={0} />
          <Tab label="Portfolio" value={1} />
          <Tab label="About Me" value={2} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div style={styles.slide}>
            <Activity />
          </div>
          <div style={styles.slide}>
            <Portfolio />
          </div>
          <div style={styles.slide}>
            <About />
          </div>
        </SwipeableViews>
      </div>
    );
  }

}