import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";


export class App extends Component{
  state = {
    inputValue: '',

  }

  render() {
    return <div>

    <Searchbar />

    </div>
  }
}
