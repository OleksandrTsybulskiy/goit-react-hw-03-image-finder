import { Component } from "react";

export class Searchbar extends Component {
    state = {
        inputValue: '',

    };

    handleInput = (e) => {
        this.setState({
            inputValue: e.target.value.toLowerCase().trim()
        })
    }

    handleSubmit = (e) => {
        e.preventDeafult();
    }

    render() {
       return <header class="searchbar">
       <form onSubmit={this.handleSubmit} class="form">
         <button type="submit" class="button">
           <span class="button-label">Search</span>
         </button>
     
         <input onChange={this.handleInput}
         value={this.state.inputValue}
           class="input"
           type="text"
           autoComplete="off"
           autoFocus
           placeholder="Search images and photos"
         />
       </form>
     </header>
    }
}