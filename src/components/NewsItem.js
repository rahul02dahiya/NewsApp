import React from 'react'

const NewsItem = (props)=> {
    let {title, description, imgUrl, newsUrl, author, date} = props;
    date = new Date(date);
    date = date.toGMTString();
    return (
      <div><div className="card my-3">
      <img src={!imgUrl ? "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1426340269/image_1426340269.jpg?io=getty-c-w750" : imgUrl } className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}...</h5>
        <p className="card-text">{description}...</p>
        <a href={newsUrl} className="btn btn-primary">Go somewhere</a>
      </div>
      <div className="card-footer">
        <small className="text-body-secondary">Published at "{date}" {author?"By "+author:""}</small>
      </div>
    </div></div>
    )
  }

export default NewsItem ;