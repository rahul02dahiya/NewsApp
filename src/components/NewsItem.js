import React, { Component } from 'react'

export default class NewsItem extends Component {

 
  render() {
    let {title, description, imgUrl, newsUrl} = this.props;
    return (
      <div><div className="card" style={{"width": "18rem"}}>
      <img src={!imgUrl ? "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1426340269/image_1426340269.jpg?io=getty-c-w750" : imgUrl } className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}...</h5>
        <p className="card-text">{description}...</p>
        <a href={newsUrl} className="btn btn-primary">Go somewhere</a>
      </div>
    </div></div>
    )
  }
}
