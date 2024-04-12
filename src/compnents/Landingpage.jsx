import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import { PropTypes } from "prop-types";

export default class Landingpage extends Component {
  static defaultProps = {
    category: "top",
    country: "",
  };
  static propTypes = {
    category: PropTypes.string,
    country: PropTypes.string,
  };
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      nextPage: "",
    };
    console.log("constr");
  }
  async componentDidMount() {
    console.log("helo did mount");
    let country = this.props.country ? "&country=in" : "";
    let url = `https://newsdata.io/api/1/news?apikey=${this.props.apiKey}&language=en&category=${this.props.category}${country}`;

    this.setState({ loading: true });
    let data = await fetch(url);
    console.log(data);
    let parsedData = await data.json();
    console.log(parsedData);
    const uniqueArticles = [];
    const uniqueTitles = new Set();
    parsedData.results.forEach((article) => {
      if (
        !uniqueTitles.has(article.title) &&
        uniqueArticles.length + 1 < 8 &&
        article.title &&
        article.description &&
        article.image_url
      ) {
        uniqueTitles.add(article.title);
        uniqueArticles.push(article);
      }
    });

    this.setState({
      articles: uniqueArticles,
      loading: false,
      nextPage: parsedData.nextPage,
    });
  }
  nextPage = async () => {
    console.log("nextttt");
    let country = this.props.country ? "&country=in" : "";
    let url = `https://newsdata.io/api/1/news?apikey=${this.props.apiKey}&language=en&category=${this.props.category}${country}&page=${this.state.nextPage}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    console.log(data);
    let parsedData = await data.json();
    console.log(parsedData);
    const uniqueArticles = [];
    const uniqueTitles = new Set();
    parsedData.results.forEach((article) => {
      if (
        !uniqueTitles.has(article.title) &&
        uniqueArticles.length + 1 < 8 &&
        article.title &&
        article.description &&
        article.image_url
      ) {
        uniqueTitles.add(article.title);
        uniqueArticles.push(article);
      }
    });
    this.setState({
      articles: uniqueArticles,
      loading: false,
      nextPage: parsedData.nextPage,
    });
  };
  render() {
    return (
      <div className="container-landing">
        <h2 className="topHeadline">Top Headlines</h2>
        {this.state.loading && <Spinner />}
        <div className="articles">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <NewsItem
                  key={element.article_id}
                  articleId={element.article_id}
                  title={element.title ? element.title.slice(0, 50) : ""}
                  description={
                    element.description ? element.description.slice(0, 100) : ""
                  }
                  imageURL={element.image_url ? element.image_url : undefined}
                  newsURL={element.link}
                  category={element.category}
                  date={element.pubDate}
                />
              );
            })}
        </div>
        <div className="pages">
          {/* <button onClick={this.prevPage}>&larr; Prev </button> */}
          <button disabled={(this.state.nextPage==='')} onClick={this.nextPage}>
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
