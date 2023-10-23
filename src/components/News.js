import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h1>News Monkey - Top Headlines</h1>
        <div className="row">
          <div className="col-md-4">
            <NewsItem title="my title" description="my description" />
          </div>
          <div className="col-md-4">
            <NewsItem title="my title" description="my description" />
          </div>
          <div className="col-md-4">
            <NewsItem title="my title" description="my description" />
          </div>

        </div>
      </div>
    )
  }
}
