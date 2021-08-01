import React, { Component } from "react";
import "./Student.css";

class Student extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      success: false,
      failure: false
    };
  }

  componentDidMount() {
    this.setState({
      score: this.props.score
    });
  }

  addScore() {
    this.setState(
      {
        score: this.state.score + 1
      },
      () => {
        if (this.state.score >= 350) {
          this.setState({ success: true });
        }
      }
    );
  }

  subScore() {
    this.setState(
      {
        score: this.state.score - 1
      },
      () => {
        if (this.state.score <= 200) {
          this.setState({ failure: true });
        }
      }
    );
  }

  render() {
    const isSuccess = this.state.success;
    let text;
    if (isSuccess) {
      text = <span>Success</span>;
    } else {
      text = "";
    }

    const isFailure = this.state.failure;
    let text1;
    if (isFailure) {
      text1 = <span>Fail</span>;
    } else {
      text1 = "";
    }

    return (
      <div className="student">
        <div className="left">
          <h2 className="studentName">
            {this.props.name}
            <button className="addScorebtn" onClick={() => this.addScore()}>
              +
            </button>
            <button className="subScorebtn" onClick={() => this.subScore()}>
              -
            </button>
          </h2>
          <p className="universityName">
            {this.props.university} {text} {text1}
          </p>
        </div>

        <div className="right">
          <div className="score">{this.state.score}</div>
        </div>
      </div>
    );
  }
}

export default Student;
