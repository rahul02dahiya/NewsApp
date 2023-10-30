import './App.css';
import React, { Component } from 'react'
import Navbar from "./components/Navbar";
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
          <Route exact path="/" element={<News key="general" />} />
          <Route exact path="/business" element={<News key="business" pageSize={3} category="business" />} />
          <Route exact path="/entertainment" element={<News key="entertainment" pageSize={3} category="entertainment" />} />
          <Route exact path="/health" element={<News key="health" pageSize={3} category="health" />} />
          <Route exact path="/science" element={<News key="science" pageSize={3} category="science" />} />
          <Route exact path="/sports" element={<News key="sports" pageSize={3} category="sports" />} />
          <Route exact path="/technology" element={<News key="technology" pageSize={3} category="technology" />} />



          </Routes>
        </Router>
      </div>

    )
  }
}