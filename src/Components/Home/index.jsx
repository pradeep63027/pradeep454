import { Component } from "react";
import Header from "../Header";
import BooksCard from "../BooksCard";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <BooksCard/>
      </div>
    );
  }
}

export default Home;
