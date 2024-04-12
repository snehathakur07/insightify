import React, { Component } from "react";

export class NewsItem extends Component {
    static defaultProps={
        imageURL:"https://t4.ftcdn.net/jpg/01/95/73/03/360_F_195730369_Fi6XI2ORrPgnxtZ000SqW5lY6wlNXW5d.jpg"
    }
  constructor(props) {
    super(props);
  }

  render() {
    let { title, description, imageURL, newsURL, articleId,category, date } = this.props;
    return (
      <div className="item" key={this.props.articleId}>
        <div className="card">
          <img
            src={this.props.imageURL}
            alt={this.props.title}
            height="180"
            width="330"
          />
          <h6 style={{textTransform:"uppercase"}}>{this.props.category}</h6>
          <h3 className="header">{this.props.title}...</h3>
          <p className="desc">{this.props.description}...</p>
          <div className="bottom">
            <h6>{this.props.date.slice(0, 10)}</h6>
            <a href={this.props.newsURL}target="_blank">Read More</a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
