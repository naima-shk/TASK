import React, { Component } from 'react'
import Navigation from './components/navigation';
import Header from './components/header';

import Contact from './components/contact';
import JsonData from './data/data.json';

export class App extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <div>
        <Navigation />
        <Header data={this.state.landingPageData.Header} />
        
         <Contact data={this.state.landingPageData.Contact} />
      </div>
    )
  }
}

export default App;
