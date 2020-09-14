import React from "react";
import Button from "../Button";
import Quote from "./Quote";
import Link from "../Link";
import "./index.css";

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.colors = props.colors;

    this.state = {
      quote: "",
      author: "",
      currentColor: null,
      quotes: [],
      error: null,
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch(
        "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
      );
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
      this.setState({
        quotes: json.quotes,
      });
    } catch (error) {
      console.log(error);
      this.setState({
        error,
      });
    }

    this.changeBackground();
    this.getNewQuote();
  }

  changeBackground() {
    let color = null;
    do {
      color = this.colors[Math.floor(Math.random() * this.colors.length)];
    } while (color === this.state.currentColor);

    document.body.style.background = `${color}`;
    document.body.style.color = `${color}`;

    this.setState({
      currentColor: color,
    });
  }

  getNewQuote() {
    const index = Math.floor(Math.random() * this.state.quotes.length);
    let { quote, author } = this.state.quotes[index];

    this.setState({
      quote: quote,
      author: author,
    });
  }

  handleClick = () => {
    this.changeBackground();
    this.getNewQuote();
  };

  render() {
    const { currentColor, quote, author, error } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
        <div id="quote-box">
          <div className="text-container">
            <Quote color={currentColor} quote={quote} author={author}></Quote>
          </div>
          <div className="btn-container">
            <Link color={currentColor} quote={quote} author={author}></Link>
            <Button color={currentColor} onClick={this.handleClick}></Button>
          </div>
        </div>
      );
    }
  }
}

export default QuoteBox;
