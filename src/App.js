import './App.css';
import React, { Component } from 'react'
import Navbar from "./components/Navbar";
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {

  apiKey = process.env.REACT_APP_NEWS_API

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
          />
          <Routes>
            <Route exact path="/" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="general" />} />
            <Route exact path="/business" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="business" pageSize={3} category="business" />} />
            <Route exact path="/entertainment" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="entertainment" pageSize={3} category="entertainment" />} />
            <Route exact path="/health" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="health" pageSize={3} category="health" />} />
            <Route exact path="/science" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="science" pageSize={3} category="science" />} />
            <Route exact path="/sports" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="sports" pageSize={3} category="sports" />} />
            <Route exact path="/technology" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="technology" pageSize={3} category="technology" />} />



          </Routes>
        </Router>
      </div>

    )
  }
}