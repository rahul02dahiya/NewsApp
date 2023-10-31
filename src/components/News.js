import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {

static defaultProps = {
  country : "in",
  pageSize : 3,
  category : "general"
}

static propTypes = {
  country : PropTypes.string,
  pageSize : PropTypes.number,
  category : PropTypes.string

}

  articles = [
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "Quentyn Kennemer",
      "title": "How to watch UFC 294 live stream from anywhere: Makhachev vs. Volkanovski 2",
      "description": "Want to witness Makhachev vs. Volkanovski 2 for the lightweight title? Here's how to watch the UFC 294 live stream from anywhere.",
      "url": "https://www.businessinsider.com/guides/streaming/how-to-watch-ufc-294-live-stream-makhachev-vs-volkanovski-2",
      "urlToImage": "https://i.insider.com/65304d2796f7540cd05ff5a5?width=1200&format=jpeg",
      "publishedAt": "2023-9-21T15:30:01Z",
      "content": "When you buy through our links, Insider may earn an affiliate commission. Learn moreJeff Bottari / Zuffa LLC\r\nUFC 294's main card features Makhachev vs. Volkanovski 2 for the UFC lightweight champion… [+6931 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "Jordan Pandy",
      "title": "Does ambition die in Austin? These tech workers don't think so.",
      "description": "Some tech workers called Austin a city where people lack ambition. Others say it's a place where people don't live to work, and that's a good thing.",
      "url": "https://www.businessinsider.com/moving-to-austin-tech-jobs-texas-startups-no-regrets-2023-9",
      "urlToImage": "https://i.insider.com/6532aa21be9edfa8eda61bc8?width=1200&format=jpeg",
      "publishedAt": "2023-9-21T09:52:01Z",
      "content": "Savannah White, left, and Robert Johnson, right, both work in the tech industry and relocated to Austin, Texas.Courtesy of Savannah White and Robert Johnson\r\n<ul>\n<li>Some workers called Austin a fai… [+6292 chars]"
    },

    {
      "source": {
        "id": null,
        "name": "VentureBeat"
      },
      "author": "Rachel Kaser",
      "title": "California — and GamesBeat Next — here I come! | Kaser Focus",
      "description": "GamesBeat Next is coming up in San Francisco -- come and join writer Rachel Kaser there for the Women in Gaming breakfast!",
      "url": "https://venturebeat.com/games/california-and-gamesbeat-next-here-i-come-kaser-focus/",
      "urlToImage": "https://venturebeat.com/wp-content/uploads/2023/9/GBN23-Promo-2.png?w=1200&strip=all",
      "publishedAt": "2023-9-21T00:04:07Z",
      "content": "GamesBeat Next unites gaming industry leaders for exceptional content, networking, and deal-making opportunities. Join us on Oct 23-24 in San Francisco.  Register Now\r\nIn case youve somehow missed it… [+291 chars]"
    }
  ]

  capitalizeFirstLetter = (string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

  constructor(props) {
    super();
    console.log("constructor called");
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      totalResults: 0
    }
    document.title = `${this.capitalizeFirstLetter(props.category)} - News Monkey`;
  }

  async updateNews() {
    console.log("Update news");
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pageSize}`
    this.props.setProgress(25);
    let data = await fetch(url);
    this.props.setProgress(35);
    let parsedData = await data.json()
    console.log(parsedData)
    this.props.setProgress(50);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults
    })
    this.props.setProgress(100);

  }
  async componentDidMount() {
    console.log("component  inbound");
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pageSize}`
    // let data = await fetch(url);
    // let parsedData = await data.json()
    // console.log(parsedData)
    // this.setState({
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults
    // })
  this.updateNews()
  }

  handlePreClick = async () => {
    // console.log("pre button clicked")
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`
    // this.setState({loading:true})
    // let data = await fetch(url);
    // let parsedData = await data.json()
    // console.log(parsedData)
    // this.setState({
    //   articles: parsedData.articles,
    //   page: this.state.page - 1,
    //   loading:false
    // })
  this.setState({page : this.state.page-1})
  this.updateNews()
  }
  handleNextClick = async () => {
    // console.log("next button clicked");
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`
    // let data = await fetch(url);
    // let parsedData = await data.json()
    // console.log(parsedData)
    // this.setState({
    //   articles: parsedData.articles,
    //   page: this.state.page + 1
    // })
  this.setState({page : this.state.page+1})
  this.updateNews()
  }

  fetchMoreData = async () =>{
  this.setState({page : this.state.page+1})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pagesize=${this.props.pageSize}`
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults
    })
  }

  render() {
    console.log("render")
    return (
      <>
        <h2 className='text-center my-3'>News Monkey - Top Headlines</h2>
        {/* {this.state.loading && <Spinner />} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={this.hasMore ? <h4>loading...</h4> : "" }
        >
          <div className="container my-3">
       <div className="row">
          {
            this.state.articles.map((element) => {
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
          <button disabled={this.state.page <= 1} type="button" class="btn btn-dark" onClick={this.handlePreClick}>&larr; Previous</button>
          <button disabled={!(this.state.page < Math.ceil(this.state.totalResults / this.props.pageSize))} type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>

        </div> */}
      </>
    )
  }
}

