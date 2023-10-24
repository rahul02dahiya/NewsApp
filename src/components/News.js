import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
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
        "publishedAt": "2023-10-21T15:30:01Z",
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
        "url": "https://www.businessinsider.com/moving-to-austin-tech-jobs-texas-startups-no-regrets-2023-10",
        "urlToImage": "https://i.insider.com/6532aa21be9edfa8eda61bc8?width=1200&format=jpeg",
        "publishedAt": "2023-10-21T09:52:01Z",
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
        "urlToImage": "https://venturebeat.com/wp-content/uploads/2023/10/GBN23-Promo-2.png?w=1200&strip=all",
        "publishedAt": "2023-10-21T00:04:07Z",
        "content": "GamesBeat Next unites gaming industry leaders for exceptional content, networking, and deal-making opportunities. Join us on Oct 23-24 in San Francisco.  Register Now\r\nIn case youve somehow missed it… [+2101 chars]"
    }
  ]
  constructor() {
    super();
    console.log("constructor called");
    this.state = {
      articles: this.articles,
      loading: false
    }
  }

  render() {

    return (
      <div className='container my-3'>
        <h1>News Monkey - Top Headlines</h1>
        <div className="row">
          {
            this.state.articles.map((element) => {
              console.log(element)
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem title={element.title.slice(0,40)} description={element.description.slice(0,85)} imgUrl={element.urlToImage} newsUrl={element.url} />
                </div>
              )
            })
          }

        </div>
      </div>
    )
  }
}
