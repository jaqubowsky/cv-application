import React, { PureComponent } from "react";
import Header from "./components/Header";
import Home from "./pages/home/home";

class App extends PureComponent {
  render() {
    return (
      <>
        <Header />
        <Home />
      </>
    );
  }
}

export default App;
