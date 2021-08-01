import React, { Component } from "react";
import Student from "./Components/Student";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="leadersboardHeading">Leadersboard</h1>
        <Student name="Fashad Ahmed" university="NED-UET" score={360} />
        <Student
          name="Annus Ahmed"
          university="Karachi University"
          score={329}
        />
        <Student name="Tassaduq Bashir" university="FAST-KHI" score={334} />
        <Student name="Wahaj Ud Din" university="NUST" score={340} />
        <Student name="Waqar Khalid" university="SZABIST" score={200} />
      </div>
    );
  }
}
export default App;
