import React, {Component} from "react";
import "./preload.css";

export default class Preload extends Component {
  constructor(props) {
    super(props);
    this.state = {dots: "."};
  }

  componentDidMount() {
    this.intId = setInterval(
      () => {
        if (this.state.dots.length < 3) {
          this.setState({dots: this.state.dots + "."});
        } else {
          this.setState({dots: "."});
        }
      },
      500
    );
  }

  componentWillUnmount() {
    clearInterval(this.intId);
  }

  render() {
    return (
      <div className="preload">
        Загрузка{this.state.dots}
      </div>
    );
  }
}
