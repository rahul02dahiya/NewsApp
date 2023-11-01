import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props)=> {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const capitalizeFirstLetter = (string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

  const updateNews = async ()=> {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`
    props.setProgress(25);
    let data = await fetch(url);
    props.setProgress(35);
    let parsedData = await data.json();
    console.log(parsedData);
    props.setProgress(50);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress( 100);

  }

  useEffect(() => {
    updateNews();
  },[]);

  const fetchMoreData = async () =>{
  setPage(page+1)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pagesize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData)

    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  }

    return (
      <>
        <h2 className='text-center my-3'>News Monkey - Top {capitalizeFirstLetter(props.category)} Headlines</h2>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<h4>loading</h4>}
        >
          <div className="container my-3">
       <div className="row">
          {
            articles.map((element) => {
              console.log(element)
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
                </div>
              )
            })
          }

        </div>
        </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button disabled={page <= 1} type="button" class="btn btn-dark" onClick={handlePreClick}>&larr; Previous</button>
          <button disabled={!(page < Math.ceil(totalResults / props.pageSize))} type="button" class="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>

        </div> */}
      </>
    )
  }


News.defaultProps = {
  country : "in",
  pageSize : 3,
  category : "general"
}

News.propTypes = {
  country : PropTypes.string,
  pageSize : PropTypes.number,
  category : PropTypes.string

}

export default News;